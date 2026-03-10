import os
import re

directory = 'src/app'
lucide_imports = set()

for root, _, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.ts'):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                content = f.read()
                
                if 'lucide-react' in content:
                    # Look for var X = LucideIcons.X;
                    matches = re.findall(r'var\s+([A-Za-z0-9_]+)\s*=\s*LucideIcons\.([A-Za-z0-9_]+);', content)
                    for match in matches:
                        lucide_imports.add(match[1])

print(sorted(list(lucide_imports)))