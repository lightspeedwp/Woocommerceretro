#!/usr/bin/env python3
"""
Fix Legacy Syntax in Pattern Files
Removes interface declarations and replaces them with comments.
Also fixes const/let -> var in function bodies.
"""

import re
import sys
from pathlib import Path

def remove_interface_block(content):
    """Remove export interface blocks and replace with comments."""
    
    # Pattern to match interface declarations
    interface_pattern = r'export interface (\w+) \{([^}]+)\}'
    
    def interface_to_comment(match):
        name = match.group(1)
        body = match.group(2)
        
        # Convert interface body to comment format
        lines = []
        for line in body.strip().split('\n'):
            line = line.strip()
            if line and not line.startswith('//'):
                # Remove trailing semicolons and format as comment
                line = line.rstrip(';')
                lines.append(' *   ' + line)
        
        comment = '/*\n * ' + name + ':\n' + '\n'.join(lines) + '\n */'
        return comment
    
    # Replace all interface declarations
    content = re.sub(interface_pattern, interface_to_comment, content, flags=re.MULTILINE | re.DOTALL)
    
    return content

def fix_const_let_to_var(content):
    """Replace const and let with var in function bodies."""
    
    # Only replace const/let that are inside function bodies (indented)
    # Don't replace top-level const exports
    lines = content.split('\n')
    result = []
    
    for line in lines:
        # Check if line starts with indented const or let (not export const)
        if re.match(r'^\s+(const|let)\s+', line) and not line.strip().startswith('export'):
            # Replace const or let with var
            line = re.sub(r'^(\s+)(const|let)(\s+)', r'\1var\3', line)
        result.append(line)
    
    return '\n'.join(result)

def remove_type_annotations(content):
    """Remove type annotations from function parameters."""
    
    # Remove : Type from function parameters
    # Match function(param: Type) and replace with function(param)
    content = re.sub(r'function\s*\([^)]*\)', lambda m: re.sub(r':\s*\w+(\[\])?', '', m.group(0)), content)
    
    # Remove type annotations from variable declarations
    # var name: Type = value -> var name = value
    content = re.sub(r'(var\s+\w+):\s*\w+(\[\])?(\s*=)', r'\1\3', content)
    
    # Remove as Type assertions
    content = re.sub(r'\s+as\s+\w+', '', content)
    
    return content

def process_file(filepath):
    """Process a single file."""
    print(f'Processing {filepath}...')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Apply transformations
    content = remove_interface_block(content)
    content = fix_const_let_to_var(content)
    content = remove_type_annotations(content)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'✓ Fixed {filepath}')
        return True
    else:
        print(f'- No changes needed for {filepath}')
        return False

def main():
    # Pattern files to process
    pattern_dir = Path('src/app/components/patterns')
    
    if not pattern_dir.exists():
        print(f'Error: Directory not found: {pattern_dir}')
        sys.exit(1)
    
    files_to_process = list(pattern_dir.glob('*.tsx'))
    
    print(f'Found {len(files_to_process)} pattern files to process\n')
    
    fixed_count = 0
    for filepath in files_to_process:
        if process_file(filepath):
            fixed_count += 1
    
    print(f'\n✓ Completed! Fixed {fixed_count} out of {len(files_to_process)} files')

if __name__ == '__main__':
    main()
