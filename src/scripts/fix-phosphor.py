import os
import re

def main():
    src_dir = '/src/app'
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if it has PhosphorIcons.*
                if 'PhosphorIcons.' in content and 'var P =' not in content:
                    # We need to inject var P = PhosphorIcons && (PhosphorIcons.default || PhosphorIcons) || {};
                    # and replace var X = PhosphorIcons.Y; with var X = P.Y || "span";
                    
                    # Find where import * as PhosphorIcons is
                    if "import * as PhosphorIcons from '@phosphor-icons/react';" in content or 'import * as PhosphorIcons from "@phosphor-icons/react";' in content:
                        
                        # Replace usages
                        new_content = re.sub(
                            r'var\s+([A-Za-z0-9_]+)\s*=\s*PhosphorIcons\.([A-Za-z0-9_]+);',
                            r'var \1 = P.\2 || "span";',
                            content
                        )
                        
                        if new_content != content:
                            new_content = new_content.replace(
                                "import * as PhosphorIcons from '@phosphor-icons/react';",
                                "import * as PhosphorIcons from '@phosphor-icons/react';\nvar P = PhosphorIcons && (PhosphorIcons.default || PhosphorIcons) || {};"
                            )
                            new_content = new_content.replace(
                                'import * as PhosphorIcons from "@phosphor-icons/react";',
                                'import * as PhosphorIcons from "@phosphor-icons/react";\nvar P = PhosphorIcons && (PhosphorIcons.default || PhosphorIcons) || {};'
                            )
                            with open(path, 'w', encoding='utf-8') as f:
                                f.write(new_content)
                            print(f"Updated {path}")

if __name__ == '__main__':
    main()
