const d = require("../lighthouse-desktop.json");
const items = d.audits["color-contrast"].details.items;
const set = new Map();
for (const i of items) {
  const expl = i.node?.explanation || "";
  const m = expl.match(
    /foreground color: (#[0-9a-f]+), background color: (#[0-9a-f]+).*contrast of ([0-9.]+)/i
  );
  const key = m
    ? `${m[1]} on ${m[2]} (ratio ${m[3]})`
    : (i.node?.snippet || "").match(/class="([^"]+)"/)?.[1] || "unknown";
  set.set(key, (set.get(key) || 0) + 1);
}
for (const [k, v] of set) console.log(v, k);
