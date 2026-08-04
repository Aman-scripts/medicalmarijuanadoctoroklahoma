const fs = require("fs");
const path = require("path");

const roots = [
  path.join(__dirname, "..", "app"),
  path.join(__dirname, "..", "components"),
];

const replacements = [
  // Muted body text on light backgrounds
  [/text-\[#0E3B2E\]\/60/g, "text-[#0E3B2E]/80"],
  [/text-\[#0E3B2E\]\/45/g, "text-[#0E3B2E]/75"],
  [/text-\[#0E3B2E\]\/40/g, "text-[#0E3B2E]/75"],
  // Small accent labels on light backgrounds (4C9A2A fails at 3.22:1)
  [/text-\[#4C9A2A\](?!\/)/g, "text-[#2F7A18]"],
  [/text-\[#4C9A2A\]\/50/g, "text-[#2F7A18]"],
  [/text-\[#4C9A2A\]\/30/g, "text-[#2F7A18]"],
  // Footer / dark-section muted whites
  [/text-white\/35/g, "text-white/70"],
  [/text-white\/45/g, "text-white/75"],
  [/text-white\/60/g, "text-white/80"],
  [/text-white\/65/g, "text-white/80"],
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts|jsx|js)$/.test(entry.name)) files.push(full);
  }
  return files;
}

let changedFiles = 0;
for (const root of roots) {
  for (const file of walk(root)) {
    let src = fs.readFileSync(file, "utf8");
    const original = src;
    for (const [pattern, next] of replacements) {
      src = src.replace(pattern, next);
    }
    if (src !== original) {
      fs.writeFileSync(file, src);
      changedFiles += 1;
      console.log("updated", path.relative(path.join(__dirname, ".."), file));
    }
  }
}
console.log("changed", changedFiles, "files");
