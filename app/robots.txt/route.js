import { NextResponse } from 'next/server';

export async function GET() {
  const robots = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${process.env.SITE_URL || 'https://amon-sharma.vercel.app'}/sitemap.xml

# Block specific paths if needed
# Disallow: /api/
# Disallow: /admin/`;

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
