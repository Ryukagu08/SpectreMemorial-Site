import os
import json

artwork_dir = "../assets/gallery/artwork/wallpaper"
output_dir = "../js/data"
output_json = os.path.join(output_dir, "artworks.js")

os.makedirs(artwork_dir, exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

artworks = []

# This is to preserve the existing alt text
try:
    with open(output_json, "r") as f:
        data = json.load(f)
        if data != {}:
            artworks = data
except FileNotFoundError or json.JSONDecodeError:
    artworks = {}

new_entries = 0

for filename in sorted(
    os.listdir(artwork_dir),
    key=lambda x: int(os.path.splitext(x)[0]) if x.split(".")[0].isdigit() else x,
):
    if filename.lower().endswith((".webp", ".jpg", ".png")):
        src = f"{artwork_dir}/{filename}".replace("\\", "/").removeprefix("../")
        if src not in artworks:
            alt = f"Art {os.path.splitext(filename)[0]}"
            artworks[src] = {"src": src, "alt": alt}
            new_entries += 1

with open(output_json, "w") as f:
    f.write(f"// This file is auto-generated. Do not edit manually.\n\n")
    f.write(f"const artworks = {json.dumps(artworks)};\n\n")
    f.write(f"export default artworks;\n")

if new_entries > 0:
    print(f"\033[0;92m Generated {output_json} with {new_entries} new entries\033[0m")
else:
    print(f"\033[0;93m No new entries\033[0m")
