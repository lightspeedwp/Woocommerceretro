#!/usr/bin/env python3
"""
Fix Data Interface Declarations

Converts TypeScript interface/type declarations to JSDoc typedefs
in all /src/app/data/*.ts files for Figma Make parser compatibility.

Usage:
    python3 scripts/fix-data-interfaces.py
"""

import re
import os
from pathlib import Path

def convert_interface_to_jsdoc(content):
    """Convert export interface declarations to JSDoc typedefs."""
    
    # Pattern to match interface declarations
    # Matches: export interface Name { ... }
    interface_pattern = re.compile(
        r'export\s+interface\s+(\w+)\s*\{([^}]+)\}',
        re.MULTILINE | re.DOTALL
    )
    
    def replace_interface(match):
        interface_name = match.group(1)
        interface_body = match.group(2)
        
        # Convert properties to JSDoc format
        # Match: propertyName?: type; or propertyName: type;
        prop_pattern = re.compile(r'^\s*(\w+)(\?)?:\s*([^;]+);', re.MULTILINE)
        
        jsdoc_props = []
        for prop_match in prop_pattern.finditer(interface_body):
            prop_name = prop_match.group(1)
            is_optional = prop_match.group(2) == '?'
            prop_type = prop_match.group(3).strip()
            
            # Convert TypeScript types to JSDoc types
            jsdoc_type = convert_ts_type_to_jsdoc(prop_type)
            
            # Build JSDoc property line
            if is_optional:
                jsdoc_props.append(f' * @property {{{jsdoc_type}}} [{prop_name}]')
            else:
                jsdoc_props.append(f' * @property {{{jsdoc_type}}} {prop_name}')
        
        # Build complete JSDoc typedef
        jsdoc = f'/**\n * @typedef {{Object}} {interface_name}\n'
        jsdoc += '\n'.join(jsdoc_props)
        jsdoc += '\n */'
        
        return jsdoc
    
    # Replace all interfaces
    content = interface_pattern.sub(replace_interface, content)
    
    return content

def convert_type_alias(content):
    """Convert export type aliases to JSDoc typedefs."""
    
    # Pattern: export type Name = 'value1' | 'value2' | ...;
    type_pattern = re.compile(
        r"export\s+type\s+(\w+)\s*=\s*([^;]+);",
        re.MULTILINE
    )
    
    def replace_type(match):
        type_name = match.group(1)
        type_def = match.group(2).strip()
        
        # Convert union types
        if '|' in type_def:
            jsdoc = f'/**\n * @typedef {type_name}\n * @type {{string}}\n */'
        else:
            jsdoc_type = convert_ts_type_to_jsdoc(type_def)
            jsdoc = f'/**\n * @typedef {type_name}\n * @type {{{jsdoc_type}}}\n */'
        
        return jsdoc
    
    content = type_pattern.sub(replace_type, content)
    
    return content

def convert_ts_type_to_jsdoc(ts_type):
    """Convert TypeScript type to JSDoc type."""
    
    # Common conversions
    conversions = {
        'string': 'string',
        'number': 'number',
        'boolean': 'boolean',
        'any': 'any',
        'void': 'void',
        'null': 'null',
        'undefined': 'undefined',
    }
    
    ts_type = ts_type.strip()
    
    # Handle array types
    if '[]' in ts_type:
        base_type = ts_type.replace('[]', '').strip()
        return f'Array<{convert_ts_type_to_jsdoc(base_type)}>'
    
    # Handle object types
    if ts_type == 'object':
        return 'Object'
    
    # Check for known conversions
    if ts_type in conversions:
        return conversions[ts_type]
    
    # Handle complex types - keep as-is (custom types)
    return ts_type

def remove_type_annotations_from_functions(content):
    """Remove TypeScript type annotations from function signatures."""
    
    # Pattern: function name(param: type): returnType {
    func_pattern = re.compile(
        r'export\s+function\s+(\w+)\s*\(([^)]*)\)\s*:\s*([^{]+)\{',
        re.MULTILINE
    )
    
    def replace_function(match):
        func_name = match.group(1)
        params = match.group(2)
        
        # Remove type annotations from parameters
        clean_params = re.sub(r':\s*[^,)]+', '', params)
        
        return f'export function {func_name}({clean_params}) {{'
    
    content = func_pattern.sub(replace_function, content)
    
    return content

def remove_as_casts(content):
    """Remove 'as Type' type assertions."""
    
    # Pattern: variable as Type
    content = re.sub(r'\s+as\s+\w+(\[\])?', '', content)
    
    # Pattern: (expression as Type)
    content = re.sub(r'\(([^)]+)\s+as\s+\w+\)', r'\1', content)
    
    return content

def process_file(filepath):
    """Process a single TypeScript file."""
    
    print(f'Processing {filepath}...')
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Store original for comparison
    original = content
    
    # Apply transformations
    content = convert_interface_to_jsdoc(content)
    content = convert_type_alias(content)
    content = remove_type_annotations_from_functions(content)
    content = remove_as_casts(content)
    
    # Write back if changed
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  ✓ Updated {filepath}')
        return True
    else:
        print(f'  - No changes needed')
        return False

def main():
    """Main entry point."""
    
    # Find all data files
    data_dir = Path('src/app/data')
    
    if not data_dir.exists():
        print(f'Error: Directory {data_dir} not found')
        return 1
    
    ts_files = list(data_dir.glob('*.ts'))
    
    if not ts_files:
        print(f'No .ts files found in {data_dir}')
        return 1
    
    print(f'Found {len(ts_files)} files to process\n')
    
    updated_count = 0
    
    for filepath in ts_files:
        if process_file(filepath):
            updated_count += 1
    
    print(f'\n✓ Complete! Updated {updated_count}/{len(ts_files)} files')
    
    return 0

if __name__ == '__main__':
    exit(main())
