#!/usr/bin/env python3
"""
Template Guidelines Audit Script
Identifies which templates have guidelines and which need creation.
"""

import os
from pathlib import Path

# Colors
class Colors:
    GREEN = '\033[0;32m'
    YELLOW = '\033[1;33m'
    RED = '\033[0;31m'
    BLUE = '\033[0;34m'
    NC = '\033[0m'

def main():
    templates_dir = Path('./src/app/components/templates')
    guidelines_dir = Path('./guidelines/templates')
    
    # Get all template files
    template_files = sorted([f.stem for f in templates_dir.glob('*.tsx')])
    
    # Get all guideline files
    guideline_files = sorted([f.stem for f in guidelines_dir.glob('*.md')])
    
    # Categorize templates
    with_guidelines = []
    without_guidelines = []
    
    for template in template_files:
        if template in guideline_files:
            with_guidelines.append(template)
        else:
            without_guidelines.append(template)
    
    # Print report
    print(f"\n{Colors.BLUE}{'=' * 60}")
    print("Template Guidelines Audit")
    print(f"{'=' * 60}{Colors.NC}\n")
    
    print(f"{Colors.GREEN}Templates WITH Guidelines ({len(with_guidelines)}):{Colors.NC}")
    for template in with_guidelines:
        print(f"  ✅ {template}")
    
    print(f"\n{Colors.YELLOW}Templates WITHOUT Guidelines ({len(without_guidelines)}):{Colors.NC}")
    for template in without_guidelines:
        print(f"  ❌ {template}")
    
    print(f"\n{Colors.BLUE}{'=' * 60}")
    print(f"Summary: {len(with_guidelines)}/{len(template_files)} templates have guidelines")
    print(f"Remaining: {len(without_guidelines)} templates need guidelines")
    print(f"{'=' * 60}{Colors.NC}\n")
    
    # Group missing templates by category
    print(f"{Colors.YELLOW}Missing Templates by Category:{Colors.NC}\n")
    
    categories = {
        'Blog': [],
        'Shop': [],
        'Pages': [],
        'Account': [],
        'Subscriptions': [],
        'Dev Tools': [],
        'Misc': []
    }
    
    for template in without_guidelines:
        if 'Blog' in template or 'Post' in template or 'Archive' in template:
            categories['Blog'].append(template)
        elif 'Shop' in template or 'Product' in template:
            categories['Shop'].append(template)
        elif 'Account' in template or 'Login' in template or 'Wishlist' in template:
            categories['Account'].append(template)
        elif 'Subscription' in template or 'Membership' in template:
            categories['Subscriptions'].append(template)
        elif 'Page' in template and any(x in template for x in ['Style', 'Showcase', 'Icon', 'Component', 'Live']):
            categories['Dev Tools'].append(template)
        elif 'Page' in template:
            categories['Pages'].append(template)
        else:
            categories['Misc'].append(template)
    
    for category, templates in categories.items():
        if templates:
            print(f"{Colors.BLUE}{category} ({len(templates)}):{Colors.NC}")
            for template in templates:
                print(f"  - {template}")
            print()

if __name__ == '__main__':
    main()
