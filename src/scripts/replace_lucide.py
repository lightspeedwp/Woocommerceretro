import os
import re
import glob

def run():
    src_dir = '/src/app'
    files = glob.glob(src_dir + '/**/*.tsx', recursive=True) + glob.glob(src_dir + '/**/*.ts', recursive=True)
    
    count = 0
    for file in files:
        with open(file, 'r') as f:
            content = f.read()
            
        if 'lucide-react' in content or 'LucideIcons' in content:
            # Replace import
            content = re.sub(r'import\s+\*\s+as\s+LucideIcons\s+from\s+[\'"]lucide-react[\'"];?', "import * as PhosphorIcons from '@phosphor-icons/react';", content)
            
            # Replace usage
            content = content.replace('LucideIcons.', 'PhosphorIcons.')
            
            with open(file, 'w') as f:
                f.write(content)
            count += 1
            print(f"Updated {file}")
            
    print(f"Total files updated: {count}")

if __name__ == '__main__':
    run()
