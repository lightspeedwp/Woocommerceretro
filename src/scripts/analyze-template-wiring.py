#!/usr/bin/env python3
"""
Template Data Wiring Analysis Script
Generates a comprehensive report on template data imports, Layout usage, and route connections.
"""

import os
import re
from pathlib import Path
from typing import Dict, List, Tuple

# Colors for terminal output
class Colors:
    GREEN = '\033[0;32m'
    YELLOW = '\033[1;33m'
    RED = '\033[0;31m'
    BLUE = '\033[0;34m'
    CYAN = '\033[0;36m'
    NC = '\033[0m'

def analyze_template(file_path: Path) -> Dict:
    """Analyze a single template file for data imports and Layout usage."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    result = {
        'filename': file_path.name,
        'path': str(file_path),
        'has_data_import': False,
        'data_imports': [],
        'has_layout': False,
        'has_hardcoded_data': False,
        'hardcoded_examples': [],
        'component_name': '',
        'is_routed': False
    }
    
    # Extract component name
    match = re.search(r'export default function (\w+)', content)
    if match:
        result['component_name'] = match.group(1)
    
    # Check for data imports
    data_import_patterns = [
        r'from [\'"].*?/data/',
        r'from [\'"]@/data/',
        r'from [\'"]\.\.\/\.\.\/data/'
    ]
    
    for pattern in data_import_patterns:
        matches = re.findall(pattern, content)
        if matches:
            result['has_data_import'] = True
            result['data_imports'].extend(matches)
    
    # Check for Layout wrapper
    layout_patterns = [
        r'<Layout[\s>]',
        r'import.*Layout.*from',
        r'return \(\s*<Layout'
    ]
    
    for pattern in layout_patterns:
        if re.search(pattern, content):
            result['has_layout'] = True
            break
    
    # Check for hardcoded data arrays (excluding component-internal state)
    hardcoded_patterns = [
        r'const \w+ = \[\s*{',  # Array of objects
        r'const \w+:\s*\w+\[\] = \['  # Typed arrays
    ]
    
    # Exclude lines that are clearly UI state or temporary data
    exclude_keywords = ['useState', 'items', 'options', 'tabs', 'sections', 'examples']
    
    for pattern in hardcoded_patterns:
        matches = re.finditer(pattern, content, re.MULTILINE)
        for match in matches:
            line = content[match.start():match.end() + 200]  # Get context
            if not any(kw in line.lower() for kw in exclude_keywords):
                result['has_hardcoded_data'] = True
                result['hardcoded_examples'].append(line[:100] + '...')
    
    return result

def check_route_connection(component_name: str, app_tsx_content: str) -> bool:
    """Check if a component is referenced in App.tsx routes."""
    if not component_name:
        return False
    
    # Check for component name in App.tsx
    patterns = [
        rf'<Route.*element={{<{component_name}',
        rf'component={{\s*{component_name}',
        rf'import.*{component_name}.*from'
    ]
    
    for pattern in patterns:
        if re.search(pattern, app_tsx_content):
            return True
    
    return False

def generate_report(templates_dir: Path, app_tsx_path: Path) -> Dict:
    """Generate comprehensive report on all templates."""
    
    # Read App.tsx
    with open(app_tsx_path, 'r', encoding='utf-8') as f:
        app_tsx_content = f.read()
    
    # Analyze all templates
    results = []
    for template_file in sorted(templates_dir.glob('*.tsx')):
        if template_file.is_file():
            result = analyze_template(template_file)
            result['is_routed'] = check_route_connection(result['component_name'], app_tsx_content)
            results.append(result)
    
    # Calculate statistics
    total = len(results)
    with_data = sum(1 for r in results if r['has_data_import'])
    with_layout = sum(1 for r in results if r['has_layout'])
    with_route = sum(1 for r in results if r['is_routed'])
    with_hardcoded = sum(1 for r in results if r['has_hardcoded_data'])
    
    # Special templates that don't need Layout or routes
    special_templates = [
        'AccountLayout.tsx',
        'AccountDashboardWidgets.tsx',
        'PageLivePreview.tsx',
        'SocialRedirect.tsx'
    ]
    
    return {
        'results': results,
        'total': total,
        'with_data': with_data,
        'with_layout': with_layout,
        'with_route': with_route,
        'with_hardcoded': with_hardcoded,
        'special_templates': special_templates
    }

def print_report(report: Dict):
    """Print formatted report to console."""
    
    print(f"\n{Colors.BLUE}{'=' * 60}")
    print("Template Data Wiring Analysis Report")
    print(f"{'=' * 60}{Colors.NC}\n")
    
    # Summary statistics
    print(f"{Colors.CYAN}Summary Statistics:{Colors.NC}")
    print(f"  Total Templates: {report['total']}")
    print(f"  {Colors.GREEN}✓{Colors.NC} With Data Imports: {report['with_data']} ({report['with_data']/report['total']*100:.1f}%)")
    print(f"  {Colors.GREEN}✓{Colors.NC} With Layout Wrapper: {report['with_layout']} ({report['with_layout']/report['total']*100:.1f}%)")
    print(f"  {Colors.GREEN}✓{Colors.NC} With Route Connection: {report['with_route']} ({report['with_route']/report['total']*100:.1f}%)")
    print(f"  {Colors.YELLOW}⚠{Colors.NC} With Hardcoded Data: {report['with_hardcoded']}\n")
    
    # Templates without data imports
    no_data = [r for r in report['results'] if not r['has_data_import']]
    if no_data:
        print(f"{Colors.YELLOW}Templates WITHOUT Data Imports ({len(no_data)}):{Colors.NC}")
        for r in no_data:
            status = f"{Colors.RED}✗{Colors.NC}"
            print(f"  {status} {r['filename']}")
        print()
    
    # Templates without Layout wrapper
    no_layout = [r for r in report['results'] 
                 if not r['has_layout'] and r['filename'] not in report['special_templates']]
    if no_layout:
        print(f"{Colors.YELLOW}Templates WITHOUT Layout Wrapper ({len(no_layout)}):{Colors.NC}")
        for r in no_layout:
            status = f"{Colors.RED}✗{Colors.NC}"
            print(f"  {status} {r['filename']}")
        print()
    
    # Templates without route connection
    no_route = [r for r in report['results'] 
                if not r['is_routed'] and r['filename'] not in report['special_templates']]
    if no_route:
        print(f"{Colors.YELLOW}Templates WITHOUT Route Connection ({len(no_route)}):{Colors.NC}")
        for r in no_route:
            status = f"{Colors.RED}✗{Colors.NC}"
            component = r['component_name'] or 'unknown'
            print(f"  {status} {r['filename']} ({component})")
        print()
    
    # Templates with hardcoded data
    with_hardcoded = [r for r in report['results'] if r['has_hardcoded_data']]
    if with_hardcoded:
        print(f"{Colors.YELLOW}Templates WITH Hardcoded Data ({len(with_hardcoded)}):{Colors.NC}")
        print("(These should ideally import from /src/app/data/)")
        for r in with_hardcoded:
            print(f"  {Colors.YELLOW}⚠{Colors.NC} {r['filename']}")
        print()
    
    # Verification summary
    print(f"{Colors.BLUE}{'=' * 60}{Colors.NC}")
    
    all_verified = (len(no_data) == 0 and len(no_layout) == 0 and len(no_route) == 0)
    
    if all_verified:
        print(f"{Colors.GREEN}✅ ALL VERIFICATION CHECKS PASSED{Colors.NC}")
        print("All templates import data, use Layout wrapper, and are routed.")
    else:
        print(f"{Colors.YELLOW}⚠️  VERIFICATION ISSUES FOUND:{Colors.NC}")
        if no_data:
            print(f"  - {len(no_data)} templates without data imports")
        if no_layout:
            print(f"  - {len(no_layout)} templates without Layout wrapper")
        if no_route:
            print(f"  - {len(no_route)} templates without route connection")
    
    print(f"{Colors.BLUE}{'=' * 60}{Colors.NC}\n")

def main():
    """Main execution function."""
    
    # Paths
    templates_dir = Path('./src/app/components/templates')
    app_tsx_path = Path('./App.tsx')
    
    if not templates_dir.exists():
        print(f"{Colors.RED}Error: Templates directory not found: {templates_dir}{Colors.NC}")
        return
    
    if not app_tsx_path.exists():
        print(f"{Colors.RED}Error: App.tsx not found: {app_tsx_path}{Colors.NC}")
        return
    
    # Generate and print report
    report = generate_report(templates_dir, app_tsx_path)
    print_report(report)

if __name__ == '__main__':
    main()
