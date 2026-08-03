import re

with open('index.html', 'r') as f:
    content = f.read()

# We replace ONLY the contents starting from <!-- Carlos --> up to the end of Viviana's div.
# Looking at the original:
#                     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
#                         <!-- Carlos --> ...
#                         <!-- Viviana --> ... </div>
#                     </div>

pattern = re.compile(
    r'(<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8)(">)\s*<!-- Carlos -->[\s\S]*?(<h4 class="text-xl text-white font-serif font-bold">Viviana Echeverría</h4>[\s\S]*?</div>\s*</div>\s*</div>)'
)

# wait, we can just replace the whole grid container and its contents with an empty container, but retaining the closing div!
# If we capture the opening div, and all its contents, we can just substitute it with our custom opening div and closing div.

def replacer(match):
    return match.group(1) + ' team-cards-container"></div>'

new_content = pattern.sub(replacer, content)

with open('index.html', 'w') as f:
    f.write(new_content)

print(f"Replaced {len(pattern.findall(content))} occurrences")
