const fs = require("fs");
const path = require("path");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts)$/.test(entry.name)) files.push(full);
  }
  return files;
}

const roots = ["app", "components"].map((d) => path.join(__dirname, "..", d));
const skip = new Set(["seo.ts", "sitemap.ts", "robots.ts"]);

// Match href="/path" or href: "/path" without trailing slash (not anchors, not external, not files)
const patterns = [
  [/(href:\s*")(\/[a-z0-9\-/_]+)(")/gi, (m, a, p, c) => {
    if (p.includes(".") || p.endsWith("/")) return m;
    return `${a}${p}/${c}`;
  }],
  [/(href=")(\/[a-z0-9\-/_]+)(")/gi, (m, a, p, c) => {
    if (p.includes(".") || p.endsWith("/")) return m;
    return `${a}${p}/${c}`;
  }],
  [/(href=\{`\/doctors\/\$\{doctor\.slug\}`\})/g, "href={`/doctors/${doctor.slug}/`}"],
];

let count = 0;
for (const root of roots) {
  for (const file of walk(root)) {
    if (skip.has(path.basename(file))) continue;
    let src = fs.readFileSync(file, "utf8");
    const original = src;
    for (const [pattern, replacer] of patterns) {
      src = src.replace(pattern, replacer);
    }
    if (src !== original) {
      fs.writeFileSync(file, src);
      count += 1;
      console.log(path.relative(path.join(__dirname, ".."), file));
    }
  }
}
console.log("updated", count);
