<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <style type="text/css">
          :root {
            color-scheme: light;
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 32px 20px 48px;
            font-family: Inter, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
            background: #ffffff;
            color: #1f2937;
            line-height: 1.5;
          }
          .wrap {
            max-width: 1100px;
            margin: 0 auto;
          }
          h1 {
            margin: 0 0 16px;
            font-size: 2rem;
            font-weight: 700;
            color: #111827;
          }
          .notice {
            margin: 0 0 28px;
            padding: 14px 16px;
            border-radius: 8px;
            background: #eaf6ea;
            color: #1f4d2a;
            font-size: 0.95rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.95rem;
          }
          thead th {
            text-align: left;
            padding: 12px 14px;
            background: #f3f4f6;
            color: #374151;
            font-weight: 600;
            border-bottom: 1px solid #e5e7eb;
          }
          tbody td {
            padding: 12px 14px;
            border-bottom: 1px solid #eef0f3;
            vertical-align: top;
          }
          tbody tr:hover td {
            background: #fafafa;
          }
          a {
            color: #1d4ed8;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .muted {
            color: #4b5563;
            white-space: nowrap;
          }
          @media (max-width: 720px) {
            body { padding: 20px 12px 32px; }
            h1 { font-size: 1.6rem; }
            thead { display: none; }
            table, tbody, tr, td { display: block; width: 100%; }
            tbody tr {
              margin-bottom: 12px;
              border: 1px solid #e5e7eb;
              border-radius: 10px;
              overflow: hidden;
            }
            tbody td {
              border-bottom: 1px solid #f3f4f6;
              padding: 10px 12px;
            }
            tbody td::before {
              content: attr(data-label);
              display: block;
              margin-bottom: 4px;
              font-size: 0.75rem;
              font-weight: 700;
              color: #6b7280;
              text-transform: uppercase;
              letter-spacing: 0.04em;
            }
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>XML Sitemap</h1>
          <p class="notice">
            This XML sitemap is generated for search engines following the sitemap.org protocol.
            It lists every page on this site along with when it was last updated.
          </p>
          <table id="sitemap">
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td data-label="URL">
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="muted" data-label="Last Modified">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                  <td class="muted" data-label="Change Frequency">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td class="muted" data-label="Priority">
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
