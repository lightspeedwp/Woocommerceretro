#!/usr/bin/env python3
"""
Convert ES6 import destructuring to legacy syntax for Figma Make parser.
Converts: import { X, Y } from 'module'
To: import ModuleName from 'module'; var X = ModuleName.X; var Y = ModuleName.Y;
"""

import os
import re
import sys

def get_module_var_name(module_path):
    """Generate a safe variable name from module path."""
    # Remove quotes and file extensions
    clean = module_path.strip('\'"')
    
    # Special cases for known modules
    if 'lucide-react' in clean:
        return 'LucideReactModule'
    elif 'sonner' in clean:
        return 'SonnerModule'
    elif 'react-router' in clean:
        return 'ReactRouterModule'
    elif '@radix-ui' in clean:
        # Extract the component name from @radix-ui/react-accordion -> RadixAccordion
        match = re.search(r'react-(\w+)', clean)
        if match:
            comp = match.group(1)
            return 'Radix' + comp.capitalize() + 'Module'
        return 'RadixModule'
    elif clean.startswith('.'):
        # Local imports - use the filename
        basename = os.path.basename(clean)
        name = basename.replace('.tsx', '').replace('.ts', '').replace('.jsx', '').replace('.js', '')
        # Convert kebab-case to PascalCase
        parts = name.split('-')
        return ''.join(p.capitalize() for p in parts) + 'Module'
    else:
        # Default: capitalize first letter
        basename = os.path.basename(clean)
        name = basename.replace('-', '_').replace('@', '').replace('/', '_')
        return name.capitalize() + 'Module'

def convert_destructured_import(line):
    """Convert a single destructured import line to legacy syntax."""
    # Pattern: import { X, Y, Z } from 'module'
    # or: import React, { useState, useEffect } from 'react'
    
    # Check if it's a destructured import
    match = re.match(r"^import\s+(?:(\w+),\s*)?\{\s*([^}]+)\s*\}\s+from\s+(['\"][^'\"]+['\"])\s*;?\s*$", line)
    
    if not match:
        return None
    
    default_import = match.group(1)  # e.g., "React"
    destructured = match.group(2)    # e.g., "useState, useEffect"
    module = match.group(3)          # e.g., "'react'"
    
    # Split destructured imports
    imports = [i.strip() for i in destructured.split(',')]
    
    # Handle aliased imports like "X as Y"
    var_assignments = []
    for imp in imports:
        if ' as ' in imp:
            original, alias = imp.split(' as ')
            original = original.strip()
            alias = alias.strip()
            var_assignments.append(f'var {alias} = ModulePlaceholder.{original};')
        else:
            var_assignments.append(f'var {imp} = ModulePlaceholder.{imp};')
    
    # Generate module variable name
    module_var = get_module_var_name(module)
    
    # Replace placeholder
    var_assignments = [v.replace('ModulePlaceholder', module_var) for v in var_assignments]
    
    # Build result
    result = []
    
    # If there's a default import (like React), keep it
    if default_import:
        result.append(f'import {default_import}, ModuleImport from {module};')
        result.append(f'var {module_var} = ModuleImport;')
    else:
        result.append(f'import {module_var} from {module};')
    
    result.extend(var_assignments)
    
    return '\n'.join(result)

def process_file(filepath):
    """Process a single file and convert its imports."""
    print(f"Processing: {filepath}")
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"  ERROR reading file: {e}")
        return False
    
    new_lines = []
    changes = 0
    
    for line in lines:
        converted = convert_destructured_import(line.rstrip('\n'))
        if converted:
            new_lines.append(converted + '\n')
            changes += 1
        else:
            new_lines.append(line)
    
    if changes > 0:
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print(f"  ✓ Converted {changes} import(s)")
            return True
        except Exception as e:
            print(f"  ERROR writing file: {e}")
            return False
    else:
        print(f"  - No destructured imports found")
        return False

def find_tsx_files(root_dir):
    """Recursively find all .tsx and .ts files."""
    tsx_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(('.tsx', '.ts')) and not file.endswith('.d.ts'):
                tsx_files.append(os.path.join(root, file))
    return tsx_files

def main():
    """Main entry point."""
    if len(sys.argv) > 1:
        target = sys.argv[1]
    else:
        target = 'src/app'
    
    if not os.path.exists(target):
        print(f"ERROR: Path not found: {target}")
        sys.exit(1)
    
    if os.path.isfile(target):
        files = [target]
    else:
        files = find_tsx_files(target)
    
    print(f"Found {len(files)} TypeScript files to process\n")
    
    processed = 0
    for filepath in files:
        if process_file(filepath):
            processed += 1
    
    print(f"\n✓ Successfully processed {processed}/{len(files)} files")

if __name__ == '__main__':
    main()
