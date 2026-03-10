import os
import re

def check_imports():
    src_dir = 'src/app'
    components_dir = os.path.join(src_dir, 'components')
    pages_dir = os.path.join(src_dir, 'pages')
    
    # We will just look for common mistakes like undefined PhosphorIcons properties.
    # Actually, we can use a simpler approach: let's grep for `LucideIcons.` to see which icons are used.
    
    lucide_uses = set()
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                    matches = re.findall(r'LucideIcons\.([A-Za-z0-9_]+)', content)
                    for match in matches:
                        lucide_uses.add(match)
                        
    print("Lucide Icons used:", lucide_uses)

if __name__ == '__main__':
    check_imports()