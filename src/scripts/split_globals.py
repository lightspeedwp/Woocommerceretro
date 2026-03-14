import re
import os

with open('/styles/globals.css', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the start of the actual CSS rules (after the imports)
# The last import is usually around line 308.
match = re.search(r'/\* ========================================\s*BASE RESETS\s*======================================== \*/', content)

if not match:
    print("Could not find start of THEME VARIABLES")
    exit(1)

imports_part = content[:match.start()]
rules_part = content[match.start():]

sections = re.split(r'(/\* ========================================\s*.*?\s*======================================== \*/)', rules_part)

files_created = []

# sections[0] is empty or whitespace before the first comment
current_comment = None
current_content = ""

for chunk in sections:
    if chunk.startswith('/* ==='):
        # Save previous section if exists
        if current_comment:
            # Extract name from comment
            name_match = re.search(r'/\* ========================================\s*(.*?)\s*======================================== \*/', current_comment, re.DOTALL)
            if name_match:
                name = name_match.group(1).strip().lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '')
                if name == 'theme-variables':
                    # Skip THEME VARIABLES since we decided to delete it
                    pass
                else:
                    filename = f"/src/styles/sections/legacy-{name}.css"
                    with open(filename, 'w', encoding='utf-8') as f:
                        f.write(current_comment + current_content)
                    files_created.append(f"legacy-{name}.css")
        current_comment = chunk
        current_content = ""
    else:
        current_content += chunk

# Save the last section
if current_comment:
    name_match = re.search(r'/\* ========================================\s*(.*?)\s*======================================== \*/', current_comment, re.DOTALL)
    if name_match:
        name = name_match.group(1).strip().lower().replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '')
        if name != 'theme-variables':
            filename = f"/src/styles/sections/legacy-{name}.css"
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(current_comment + current_content)
            files_created.append(f"legacy-{name}.css")

# Now create the new globals.css
new_globals = imports_part.strip() + "\n\n/* @IMPORT: Legacy extracted sections */\n"
for f in files_created:
    new_globals += f'@import "../src/styles/sections/{f}";\n'

with open('/styles/globals.css', 'w', encoding='utf-8') as f:
    f.write(new_globals + '\n')

print(f"Split into {len(files_created)} files.")
