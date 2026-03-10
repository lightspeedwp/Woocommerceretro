#!/usr/bin/env python3
"""
Fix React Router Imports

Replaces all 'react-router-dom' imports with 'react-router' in TypeScript files.

Usage:
    python scripts/fix-react-router-imports.py
"""

import os
import re
from pathlib import Path

def fix_file(file_path):
    """Replace react-router-dom with react-router in a file."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Track if we made any changes
        original_content = content
        
        # Replace single-quoted imports
        content = re.sub(
            r"from\s+['\"]react-router-dom['\"]",
            "from 'react-router'",
            content
        )
        
        # Replace double-quoted imports
        content = re.sub(
            r'from\s+["react-router-dom"]',
            'from "react-router"',
            content
        )
        
        # Only write if content changed
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def main():
    """Main function to process all TypeScript files."""
    root_dir = Path(__file__).parent.parent
    src_dir = root_dir / 'src'
    tests_dir = root_dir / 'tests'
    
    files_changed = 0
    files_scanned = 0
    
    print("🔄 Scanning for react-router-dom imports...")
    
    # Process src directory
    for file_path in src_dir.rglob('*.tsx'):
        files_scanned += 1
        if fix_file(file_path):
            files_changed += 1
            print(f"✅ Fixed: {file_path.relative_to(root_dir)}")
    
    for file_path in src_dir.rglob('*.ts'):
        files_scanned += 1
        if fix_file(file_path):
            files_changed += 1
            print(f"✅ Fixed: {file_path.relative_to(root_dir)}")
    
    # Process tests directory if it exists
    if tests_dir.exists():
        for file_path in tests_dir.rglob('*.tsx'):
            files_scanned += 1
            if fix_file(file_path):
                files_changed += 1
                print(f"✅ Fixed: {file_path.relative_to(root_dir)}")
        
        for file_path in tests_dir.rglob('*.ts'):
            files_scanned += 1
            if fix_file(file_path):
                files_changed += 1
                print(f"✅ Fixed: {file_path.relative_to(root_dir)}")
    
    print(f"\n📊 Summary:")
    print(f"   Files scanned: {files_scanned}")
    print(f"   Files changed: {files_changed}")
    print(f"\n✨ Done! All react-router-dom imports have been replaced with react-router")
    
    if files_changed > 0:
        print("\n📝 Next steps:")
        print("   1. Review the changes")
        print("   2. Test your application")
        print("   3. Commit the changes")

if __name__ == '__main__':
    main()
