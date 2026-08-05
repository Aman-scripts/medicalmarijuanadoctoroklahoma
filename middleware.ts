import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Paths that should permanently return HTTP 410 Gone. */
const GONE_PATHS = new Set(["/shipping-policy", "/shipping-policy/"]);

export function middleware(request: NextRequest) {
  if (!GONE_PATHS.has(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>410 Gone | Medical Marijuana Doctor Oklahoma</title>
  <style>
    body{font-family:system-ui,sans-serif;background:#F6F5F0;color:#0E3B2E;margin:0;min-height:100vh;display:grid;place-items:center;padding:2rem;text-align:center}
    a{color:#2F7A18}
  </style>
</head>
<body>
  <main>
    <p>410 Gone</p>
    <h1>This page has been permanently removed</h1>
    <p>The content at this URL is no longer available and will not return.</p>
    <p><a href="/">Return home</a> · <a href="/gone/">Learn more</a></p>
  </main>
</body>
</html>`;

  return new NextResponse(html, {
    status: 410,
    statusText: "Gone",
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
    },
  });
}

export const config = {
  matcher: ["/shipping-policy", "/shipping-policy/:path*"],
};
