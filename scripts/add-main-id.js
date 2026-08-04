const fs = require("fs");
const path = require("path");

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (/\.tsx$/.test(entry.name)) files.push(full);
  }
  return files;
}

let n = 0;
for (const file of walk(path.join(__dirname, "..", "app"))) {
  let src = fs.readFileSync(file, "utf8");
  if (src.includes("<main>") && !src.includes('id="main-content"')) {
    src = src.replace("<main>", '<main id="main-content">');
    fs.writeFileSync(file, src);
    n += 1;
    console.log(path.relative(path.join(__dirname, ".."), file));
  }
}
console.log("done", n);
