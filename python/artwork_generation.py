import os
import json

script_dir = os.path.dirname(os.path.abspath(__file__))

artwork_dir = os.path.join(script_dir, "../assets/gallery/artwork/wallpaper")
output_dir = os.path.join(script_dir, "../js/data")
output_json = os.path.join(output_dir, "artworks.js")

os.makedirs(artwork_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

artworks = {}

new_entries = 0

for filename in sorted(
    os.listdir(artwork_dir),
):
    if filename.lower().endswith((".webp", ".jpg", ".png")):
        full_path = os.path.join(artwork_dir, filename)
        src = (
            os.path.relpath(full_path, script_dir)
            .replace("\\", "/")
            .removeprefix("../")
        )

        alt = f"Art {os.path.splitext(filename)[0]}"
        artworks[src] = {"src": src, "alt": alt}
        new_entries += 1

with open(output_json, "w") as f:
    f.write(f"// This file is auto-generated. Do not edit manually.\n\n")
    f.write(f"const artworks = {json.dumps(artworks)};\n\n")
    f.write(f"export default artworks;\n")

print(
    f"\033[0;32m Generated {output_json.replace("\\", "/")} with \033[4;92m{new_entries}\033[0;32m new entries\033[0m"
)
