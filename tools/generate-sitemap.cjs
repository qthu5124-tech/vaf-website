const fs = require('fs');
const vm = require('vm');

const SITE_URL = 'https://vietfil.com';
const DEFAULT_LASTMOD = '2026-07-30';

function loadBrowserData(file) {
    const window = {};
    const context = { window };
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
    return window;
}

function isoDateFromVietnamese(value) {
    const match = String(value || '').match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    return match ? `${match[3]}-${match[2]}-${match[1]}` : DEFAULT_LASTMOD;
}

function escapeXml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

const products = loadBrowserData('products-data.js').products || [];
const projects = loadBrowserData('projects-data.js').projects || [];
const news = loadBrowserData('news-data.js').newsData || [];
const newsEn = loadBrowserData('news-en-data.js').newsTranslationsEn || {};
const careers = loadBrowserData('careers-data.js').careersData || [];
const careersEn = loadBrowserData('careers-en-data.js').careersTranslationsEn || {};

const urls = [];
const seen = new Set();

function add(path, lastmod = DEFAULT_LASTMOD) {
    const normalized = path === '/' ? '/' : '/' + String(path).replace(/^\/+|\/+$/g, '');
    if (seen.has(normalized)) return;
    seen.add(normalized);
    urls.push({ loc: SITE_URL + normalized, lastmod });
}

['/', '/about', '/products', '/projects', '/news', '/contact', '/tuyen-dung'].forEach(path => add(path));
['/en/', '/en/about', '/en/products', '/en/news', '/en/contact', '/en/tuyen-dung'].forEach(path => add(path));

for (const product of products) {
    if (!product.id) continue;
    add(`/product/${product.id}`);
    if (product.name && typeof product.name === 'object' && product.name.en) add(`/en/product/${product.id}`);
}

for (const project of projects) {
    if (project.id) add(`/project/${project.id}`);
}

for (const article of news) {
    if (!article.id) continue;
    const lastmod = isoDateFromVietnamese(article.date);
    add(`/news/${article.id}`, lastmod);
    if (newsEn[article.id]) add(`/en/news/${article.id}`, lastmod);
}

for (const job of careers) {
    if (!job.id) continue;
    add(`/tuyen-dung/${job.id}`);
    if (careersEn[job.id]) add(`/en/tuyen-dung/${job.id}`);
}

const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({ loc, lastmod }) => `  <url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod></url>`),
    '</urlset>',
    ''
].join('\n');

fs.writeFileSync('sitemap.xml', xml, 'utf8');
console.log(`Generated sitemap.xml with ${urls.length} canonical URLs.`);
