import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
const today = new Date().toISOString().split('T')[0];

function generateSitemap() {
    try {
        let content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://reformasmaki.cat/</loc>
    <lastmod>${today}</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>`;

        fs.writeFileSync(sitemapPath, content, 'utf8');
        console.log(`✅ Sitemap updated with date: ${today}`);
    } catch (error) {
        console.error('❌ Error generating sitemap:', error);
        process.exit(1);
    }
}

generateSitemap();
