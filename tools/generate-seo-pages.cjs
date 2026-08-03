const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const siteUrl = 'https://www.vietfil.com';
const template = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

function loadWindowData(file, property) {
    const sandbox = { window: {} };
    vm.runInNewContext(fs.readFileSync(path.join(root, file), 'utf8'), sandbox, { filename: file });
    return sandbox.window[property];
}

const products = loadWindowData('products-data.js', 'products');
const news = loadWindowData('news-data.js', 'newsData');
const projects = loadWindowData('projects-data.js', 'projects');
const careers = loadWindowData('careers-data.js', 'careersData');
const newsEn = loadWindowData('news-en-data.js', 'newsTranslationsEn');
const careersEn = loadWindowData('careers-en-data.js', 'careersTranslationsEn');

const plain = value => String(value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);

function localPath(route, lang) {
    if (lang !== 'en') return route;
    return route === '/' ? '/en/' : `/en${route}`;
}

function makeRoute(route, lang, title, description, image = '/images/vaf-banner.webp', type = 'website', schema) {
    const pagePath = localPath(route, lang);
    const canonical = `${siteUrl}${pagePath}`;
    const viUrl = `${siteUrl}${route}`;
    const enUrl = `${siteUrl}${localPath(route, 'en')}`;
    const imageUrl = image.startsWith('http') ? image : `${siteUrl}/${image.replace(/^\//, '')}`;
    const jsonLd = schema || { '@context': 'https://schema.org', '@type': 'WebPage', name: title, description, url: canonical, inLanguage: lang };
    let html = template
        .replace(/<html lang="[^"]+">/, `<html lang="${lang}">`)
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
        .replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(description)}">`)
        .replace(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${canonical}">`)
        .replace(/<link rel="alternate" hreflang="vi" href="[^"]*">/, `<link rel="alternate" hreflang="vi" href="${viUrl}">`)
        .replace(/<link rel="alternate" hreflang="en" href="[^"]*">/, `<link rel="alternate" hreflang="en" href="${enUrl}">`)
        .replace(/<link rel="alternate" hreflang="x-default" href="[^"]*">/, `<link rel="alternate" hreflang="x-default" href="${viUrl}">`)
        .replace(/<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${type}">`)
        .replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${canonical}">`)
        .replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(title)}">`)
        .replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(description)}">`)
        .replace(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${imageUrl}">`)
        .replace(/(<script id="seo-structured-data" type="application\/ld\+json">)[\s\S]*?(<\/script>)/, `$1\n    ${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}\n    $2`);

    const relative = pagePath === '/en/' ? 'en/index' : (pagePath.replace(/^\//, '').replace(/\/$/, '') || 'index');
    const output = path.join(root, `${relative}.html`);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, html);
    return { loc: canonical, output };
}

const pages = [];
function bilingual(route, vi, en, image, type, schemas = {}) {
    pages.push(makeRoute(route, 'vi', vi.title, vi.description, image, type, schemas.vi));
    pages.push(makeRoute(route, 'en', en.title, en.description, image, type, schemas.en));
}

pages.push(makeRoute('/', 'en',
    'VAF - International Air Filters & Cleanroom Equipment Manufacturer',
    'VAF manufactures HEPA and ULPA air filters and cleanroom equipment for electronics, pharmaceutical, healthcare and commercial facilities.'));

bilingual('/about',
    { title: 'Về VAF - Hồ Sơ Năng Lực & Nhà Máy Sản Xuất', description: 'Tìm hiểu hành trình phát triển, năng lực nhà máy và tiêu chuẩn sản xuất lọc khí, thiết bị phòng sạch của VAF.' },
    { title: 'About VAF - Air Filter Manufacturing Capability', description: 'Discover VAF history, manufacturing capability and international standards for air filters and cleanroom equipment.' });
bilingual('/products',
    { title: 'Danh Mục Sản Phẩm Lọc Khí & Thiết Bị Phòng Sạch | VAF', description: 'Khám phá lọc thô, lọc tinh, lọc HEPA ULPA và thiết bị phòng sạch do VAF sản xuất theo tiêu chuẩn quốc tế.' },
    { title: 'Air Filters & Cleanroom Equipment | VAF', description: 'Explore pre-filters, fine filters, HEPA ULPA filters and cleanroom equipment manufactured by VAF.' });
bilingual('/projects',
    { title: 'Dự Án Tiêu Biểu & Khách Hàng | VAF', description: 'Các dự án lọc khí và phòng sạch VAF đã triển khai cho nhà máy điện tử, dược phẩm, thực phẩm và bệnh viện.' },
    { title: 'Featured Air Filtration & Cleanroom Projects | VAF', description: 'Air filtration and cleanroom projects delivered by VAF for electronics, pharmaceutical, food and healthcare facilities.' });
bilingual('/news',
    { title: 'Kiến Thức Lọc Khí, HEPA & Phòng Sạch | VAF', description: 'Kiến thức chuyên sâu về lọc khí, HEPA H13 H14, thiết bị và tiêu chuẩn phòng sạch từ đội ngũ kỹ thuật VAF.' },
    { title: 'Air Filtration, HEPA & Cleanroom Insights | VAF', description: 'Technical insights about air filtration, HEPA filters, cleanroom equipment and international standards from VAF.' });
bilingual('/contact',
    { title: 'Liên Hệ Tư Vấn & Báo Giá | VAF', description: 'Liên hệ VAF để được tư vấn lựa chọn lọc khí, thiết bị phòng sạch và nhận báo giá cho dự án của bạn.' },
    { title: 'Contact VAF for Consultation & Quotation', description: 'Contact VAF for air filter and cleanroom equipment consultation and a project quotation.' });
bilingual('/tuyen-dung',
    { title: 'Cơ Hội Nghề Nghiệp Tại VAF', description: 'Khám phá các vị trí tuyển dụng và cơ hội phát triển nghề nghiệp tại VAF - Viet Air Filter.' },
    { title: 'Careers at VAF - Viet Air Filter', description: 'Explore current vacancies and career development opportunities at VAF - Viet Air Filter.' });

for (const product of products) {
    const image = `/${product.img}`;
    const viTitle = product.name.vi || product.name;
    const enTitle = product.name.en || viTitle;
    bilingual(`/product/${product.id}`,
        { title: `${viTitle} | VAF`, description: plain(product.desc.vi || product.desc) },
        { title: `${enTitle} | VAF`, description: plain(product.desc.en || product.desc.vi || product.desc) }, image, 'product');
}

for (const article of news) {
    const translated = newsEn[article.id] || {};
    const route = `/news/${article.id}`;
    const image = `/${String(article.img).replace(/^\//, '')}`;
    const schemas = {};
    for (const lang of ['vi', 'en']) {
        const item = lang === 'en' ? { ...article, ...translated } : article;
        schemas[lang] = { '@context': 'https://schema.org', '@type': 'Article', headline: item.title, description: plain(item.desc), image: `${siteUrl}${image}`, mainEntityOfPage: `${siteUrl}${localPath(route, lang)}`, author: { '@type': 'Organization', name: 'VAF Technical Team' }, publisher: { '@type': 'Organization', name: 'VAF - Viet Air Filter', logo: { '@type': 'ImageObject', url: `${siteUrl}/images/VAF-LOGO.webp` } } };
    }
    bilingual(route,
        { title: `${article.title} | VAF`, description: plain(article.desc) },
        { title: `${translated.title || article.title} | VAF`, description: plain(translated.desc || article.desc) }, image, 'article', schemas);
}

for (const project of projects) {
    const description = plain(project.desc);
    bilingual(`/project/${project.id}`,
        { title: `${project.title} | Dự án VAF`, description },
        { title: `${project.title} | VAF Project`, description }, `/${project.img}`);
}

for (const job of careers) {
    const translated = careersEn[job.id] || {};
    const route = `/tuyen-dung/${job.id}`;
    bilingual(route,
        { title: `${job.title} | Tuyển dụng VAF`, description: plain(job.summary) },
        { title: `${translated.title || job.title} | VAF Careers`, description: plain(translated.summary || job.summary) });
}

const home = `${siteUrl}/`;
const sitemapEntries = [home, ...pages.map(page => page.loc)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(sitemapEntries)].map(url => `  <url><loc>${escapeHtml(url)}</loc></url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap);
console.log(`Generated ${pages.length + 1} indexable HTML pages and ${sitemapEntries.length} sitemap entries.`);
