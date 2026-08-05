const fs = require("fs");
const path = require("path");

const map = [
  ["privacy-policy", "privacy", "Privacy Policy"],
  ["terms-of-use", "terms", "Terms of Use"],
  ["hipaa-compliance", "hipaa", "HIPAA Compliance"],
  ["consent-for-telehealth", "telehealth", "Consent for Telehealth"],
  ["refund-policy", "refund", "Refund Policy"],
  ["accessibility-statement", "accessibility", "Accessibility Statement"],
  ["editorial-policy", "editorial", "Editorial Policy"],
  ["disclaimer", "disclaimer", "Disclaimer"],
];

for (const [dir, key, label] of map) {
  const file = path.join(__dirname, "..", "app", dir, "page.tsx");
  let src = fs.readFileSync(file, "utf8");

  if (!src.includes('from "@/lib/seo"')) {
    src = src.replace(
      'import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";\n',
      `import { PageBreadcrumb } from "@/components/layout/page-breadcrumb";\nimport { JsonLd } from "@/components/seo/json-ld";\nimport { PageDates } from "@/components/seo/page-dates";\nimport { buildMetadata, pages, webPageSchema } from "@/lib/seo";\n`
    );
  }

  src = src.replace(
    /export const metadata: Metadata = \{[\s\S]*?\};\n/,
    `export const metadata: Metadata = buildMetadata(pages.${key});\n`
  );

  src = src.replace(
    /<div className="flex flex-col bg-\[#F6F5F0\]">\s*<SiteHeader \/>\s*<PageBreadcrumb page="[^"]*" \/>/,
    `<div className="flex flex-col bg-[#F6F5F0]">
      <JsonLd data={webPageSchema(pages.${key})} />
      <SiteHeader />
      <PageBreadcrumb page="${label}" currentPath={pages.${key}.path} />`
  );

  // Insert PageDates after h1 block closing of centered intro if not present
  if (!src.includes("<PageDates")) {
    src = src.replace(
      /(<\/h1>\n)/,
      `$1              <PageDates page={pages.${key}} />\n`
    );
  }

  fs.writeFileSync(file, src);
  console.log("patched", dir);
}
