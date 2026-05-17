export async function GET() {
  const pages = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/services',
    '/services/ground-handling',
    '/services/passenger-services',
    '/services/fuel-services',
    '/services/cargo-logistics',
    '/services/ticket-consolidation',
    '/services/corporate-travel',
    '/airports/skp',
    '/airports/ohd',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (path) => `  <url>
    <loc>https://aam.com.mk${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
