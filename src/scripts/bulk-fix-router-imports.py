#!/usr/bin/env python3
"""
Bulk Fix React Router Imports - Comprehensive Version

Replaces ALL instances of 'react-router-dom' with 'react-router'
in all TypeScript/TSX files in the project.

Usage:
    python3 scripts/bulk-fix-router-imports.py
"""

import os
import re
from pathlib import Path

def fix_file(filepath):
    """Fix react-router-dom imports in a single file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if 'react-router-dom' not in content:
            return False
        
        original = content
        
        # Replace all variations
        content = content.replace("'react-router-dom'", "'react-router'")
        content = content.replace('"react-router-dom"', '"react-router"')
        content = content.replace('from "react-router-dom"', 'from "react-router"')
        content = content.replace("from 'react-router-dom'", "from 'react-router'")
        
        if content != original:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        
        return False
    except Exception as e:
        print(f"⚠️  Error processing {filepath}: {e}")
        return False

def main():
    """Main execution function"""
    print("=" * 70)
    print("BULK FIX: React Router Imports")
    print("=" * 70)
    print()
    
    # Directories to search
    search_dirs = [
        'src/app/components/blocks',
        'src/app/components/patterns',
        'src/app/components/parts',
        'src/app/components/common',
        'src/app/components/blog',
        'components',  # Root components folder
    ]
    
    fixed_files = []
    total_scanned = 0
    
    for base_dir in search_dirs:
        if not os.path.exists(base_dir):
            print(f"⏩ Skipping {base_dir} (not found)")
            continue
        
        print(f"📂 Scanning {base_dir}...")
        
        for root, dirs, files in os.walk(base_dir):
            for file in files:
                if file.endswith(('.tsx', '.ts')):
                    filepath = os.path.join(root, file)
                    total_scanned += 1
                    
                    if fix_file(filepath):
                        fixed_files.append(filepath)
                        print(f"  ✅ Fixed: {filepath}")
    
    print()
    print("=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"Total files scanned: {total_scanned}")
    print(f"Files fixed: {len(fixed_files)}")
    print(f"Files unchanged: {total_scanned - len(fixed_files)}")
    print()
    
    if fixed_files:
        print("=" * 70)
        print("FIXED FILES:")
        print("=" * 70)
        for filepath in fixed_files:
            print(f"  • {filepath}")
        print()
    
    print("=" * 70)
    print("✅ Complete! All react-router-dom imports have been replaced.")
    print("=" * 70)

if __name__ == "__main__":
    main()
