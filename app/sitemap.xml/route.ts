import { buildSitemapXml, getSitemapEntries } from "@/lib/sitemap-entries";

export const dynamic = "force-static";

export function GET() {
  const xml = buildSitemapXml(getSitemapEntries());

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
