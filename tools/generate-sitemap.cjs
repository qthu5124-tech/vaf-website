const fs = require('fs');
const vm = require('vm');

const SITE_URL = 'https://www.vietfil.com';
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
const seoPages = new Map();

function add(path, lastmod = DEFAULT_LASTMOD, seo = {}) {
    const normalized = path === '/' ? '/' : '/' + String(path).replace(/^\/+|\/+$/g, '');
    if (seen.has(normalized)) return;
    seen.add(normalized);
    urls.push({ loc: SITE_URL + normalized, lastmod });
    seoPages.set(normalized, seo);
}

add('/', DEFAULT_LASTMOD, { title: 'VAF - Nhà Sản Xuất Lọc Khí & Thiết Bị Phòng Sạch', description: 'VAF sản xuất lọc khí HEPA, ULPA, lọc túi và thiết bị phòng sạch đạt tiêu chuẩn quốc tế.', language: 'vi', alternate: '/en' });
add('/about', DEFAULT_LASTMOD, { title: 'Về VAF | Nhà Máy Sản Xuất Lọc Khí', description: 'Tìm hiểu VAF, năng lực nhà máy sản xuất lọc khí, hệ thống quản lý chất lượng và giải pháp phòng sạch.', language: 'vi', alternate: '/en/about' });
add('/products', DEFAULT_LASTMOD, { title: 'Sản Phẩm Lọc Khí & Thiết Bị Phòng Sạch | VAF', description: 'Danh mục lọc thô, lọc túi, HEPA, ULPA, FFU, Air Shower và thiết bị phòng sạch do VAF sản xuất.', language: 'vi', alternate: '/en/products' });
add('/projects', DEFAULT_LASTMOD, { title: 'Dự Án Lọc Khí & Phòng Sạch Tiêu Biểu | VAF', description: 'Các dự án lọc khí, HEPA, ULPA và thiết bị phòng sạch của VAF cho điện tử, bệnh viện và công nghiệp.', language: 'vi' });
add('/news', DEFAULT_LASTMOD, { title: 'Kiến Thức Lọc Khí, HEPA & Phòng Sạch | VAF', description: 'Kiến thức chuyên sâu về lọc khí, HEPA H13 H14, thiết bị và tiêu chuẩn phòng sạch từ đội ngũ kỹ thuật VAF.', language: 'vi', alternate: '/en/news' });
add('/contact', DEFAULT_LASTMOD, { title: 'Liên Hệ Tư Vấn & Báo Giá Lọc Khí | VAF', description: 'Liên hệ VAF để được tư vấn và báo giá lọc khí, HEPA, HVAC cùng thiết bị phòng sạch theo yêu cầu.', language: 'vi', alternate: '/en/contact' });
add('/tuyen-dung', DEFAULT_LASTMOD, { title: 'Tuyển Dụng VAF | Cơ Hội Nghề Nghiệp HVAC', description: 'Cơ hội việc làm tại VAF trong lĩnh vực lọc khí, HVAC, sản xuất và công nghệ phòng sạch.', language: 'vi', alternate: '/en/tuyen-dung' });

add('/loc-khi-cong-nghiep', '2026-08-20', {
    title: 'Lọc Khí Công Nghiệp Cho Nhà Máy & Phòng Sạch | VAF',
    description: 'VAF sản xuất và tư vấn lọc khí công nghiệp: lọc thô, lọc tinh, HEPA ULPA và carbon cho AHU, FFU, nhà máy và phòng sạch.',
    image: 'images/anh-tulieu/industrial-air-filtration-hero-ai.jpg',
    language: 'vi',
    type: 'Service'
});

add('/en', DEFAULT_LASTMOD, { title: 'VAF | Air Filters & Cleanroom Equipment Manufacturer', description: 'VAF manufactures pre-filters, bag filters, HEPA and ULPA filters, FFU and cleanroom equipment.', language: 'en', alternate: '/' });
add('/en/about', DEFAULT_LASTMOD, { title: 'About VAF | Air Filter Manufacturer', description: 'Learn about VAF, our air filter manufacturing facilities, quality systems and cleanroom solutions.', language: 'en', alternate: '/about' });
add('/en/products', DEFAULT_LASTMOD, { title: 'Air Filters & Cleanroom Equipment | VAF', description: 'Explore VAF pre-filters, bag filters, HEPA and ULPA filters, FFU, air showers and cleanroom equipment.', language: 'en', alternate: '/products' });
add('/en/news', DEFAULT_LASTMOD, { title: 'Air Filtration, HEPA & Cleanroom Knowledge | VAF', description: 'Technical knowledge about air filters, HEPA, cleanroom equipment and standards from the VAF technical team.', language: 'en', alternate: '/news' });
add('/en/contact', DEFAULT_LASTMOD, { title: 'Contact VAF | Air Filter Consultation', description: 'Contact VAF for air filter, HVAC and cleanroom equipment consultation and quotations.', language: 'en', alternate: '/contact' });
add('/en/tuyen-dung', DEFAULT_LASTMOD, { title: 'VAF Careers | Air Filtration & HVAC Opportunities', description: 'Explore careers at VAF in air filtration, HVAC, manufacturing and cleanroom technology.', language: 'en', alternate: '/tuyen-dung' });

for (const product of products) {
    if (!product.id) continue;
    const viName = typeof product.name === 'object' ? product.name.vi : product.name;
    const viDesc = typeof product.desc === 'object' ? product.desc.vi : product.desc;
    add(`/product/${product.id}`, DEFAULT_LASTMOD, { title: `${viName} | VAF`, description: viDesc, image: product.img, language: 'vi', alternate: `/en/product/${product.id}`, type: 'Product' });
    if (product.name && typeof product.name === 'object' && product.name.en) {
        add(`/en/product/${product.id}`, DEFAULT_LASTMOD, { title: `${product.name.en} | VAF`, description: product.desc.en, image: product.img, language: 'en', alternate: `/product/${product.id}`, type: 'Product' });
    }
}

for (const project of projects) {
    if (project.id) add(`/project/${project.id}`, DEFAULT_LASTMOD, { title: `${project.title} | Dự Án VAF`, description: project.desc, image: project.img, language: 'vi', type: 'Article' });
}

for (const article of news) {
    if (!article.id) continue;
    const lastmod = isoDateFromVietnamese(article.date);
    add(`/news/${article.id}`, lastmod, { title: `${article.seoTitle || article.title} | VAF`, description: article.desc, image: article.img, language: 'vi', alternate: newsEn[article.id] ? `/en/news/${article.id}` : null, type: 'Article' });
    if (newsEn[article.id]) add(`/en/news/${article.id}`, lastmod, { title: `${newsEn[article.id].title} | VAF`, description: newsEn[article.id].desc, image: article.img, language: 'en', alternate: `/news/${article.id}`, type: 'Article' });
}

for (const job of careers) {
    if (!job.id) continue;
    const jobLastmod = job.datePosted || DEFAULT_LASTMOD;
    add(`/tuyen-dung/${job.id}`, jobLastmod, { title: `${job.title} | Tuyển Dụng VAF`, description: job.summary, language: 'vi', alternate: careersEn[job.id] ? `/en/tuyen-dung/${job.id}` : null, type: job.isMultiPosition ? 'CollectionPage' : 'JobPosting', job });
    if (careersEn[job.id]) {
        const translatedJob = { ...job, ...careersEn[job.id] };
        add(`/en/tuyen-dung/${job.id}`, jobLastmod, { title: `${translatedJob.title} | VAF Careers`, description: translatedJob.summary, language: 'en', alternate: `/tuyen-dung/${job.id}`, type: translatedJob.isMultiPosition ? 'CollectionPage' : 'JobPosting', job: translatedJob });
    }
}

const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(({ loc, lastmod }) => `  <url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod></url>`),
    '</urlset>',
    ''
].join('\n');

fs.writeFileSync('sitemap.xml', xml, 'utf8');

function replaceMeta(html, selectorPattern, replacement) {
    return html.replace(selectorPattern, replacement);
}

function renderSeoHtml(path, seo) {
    const canonical = SITE_URL + path;
    const title = escapeXml(seo.title || 'VAF - Viet Air Filter');
    const description = escapeXml(seo.description || '');
    const image = SITE_URL + '/' + String(seo.image || 'images/vaf-banner.webp').replace(/^\/+/, '');
    const type = seo.type || 'WebPage';
    let schema = {
        '@context': 'https://schema.org',
        '@type': type,
        name: seo.title,
        headline: type === 'Article' ? seo.title : undefined,
        description: seo.description,
        url: canonical,
        image,
        publisher: type === 'Article' ? { '@type': 'Organization', name: 'VAF - Viet Air Filter', url: SITE_URL } : undefined
    };
    Object.keys(schema).forEach(key => schema[key] === undefined && delete schema[key]);
    if (type === 'JobPosting' && seo.job) {
        const job = seo.job;
        schema = {
            '@context': 'https://schema.org',
            '@type': 'JobPosting',
            title: job.title,
            description: [job.summary, ...(job.description || []), ...(job.requirements || []), ...(job.benefits || [])].join(' '),
            identifier: { '@type': 'PropertyValue', name: 'VAF - Viet Air Filter', value: job.id },
            datePosted: job.datePosted || DEFAULT_LASTMOD,
            ...(job.deadline ? { validThrough: `${job.deadline}T23:59:59+07:00` } : {}),
            employmentType: 'FULL_TIME',
            workHours: job.workingHours,
            directApply: true,
            hiringOrganization: {
                '@type': 'Organization',
                name: 'Công ty Cổ phần Sản xuất Lọc khí Việt (VAF)',
                sameAs: SITE_URL,
                logo: `${SITE_URL}/images/logo.png`
            },
            jobLocation: {
                '@type': 'Place',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Lô C3.4, Đường N14, Khu công nghiệp Đồng An 2',
                    addressLocality: 'Phường Hòa Phú',
                    addressRegion: 'Thành phố Hồ Chí Minh',
                    addressCountry: 'VN'
                }
            },
            url: canonical
        };
    }
    if (type === 'CollectionPage' && seo.job) {
        const job = seo.job;
        schema = {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: job.title,
            description: job.summary,
            url: canonical,
            datePublished: job.datePosted || DEFAULT_LASTMOD,
            about: {
                '@type': 'ItemList',
                itemListElement: (job.roleTitles || []).map((title, index) => ({
                    '@type': 'ListItem',
                    position: index + 1,
                    item: { '@type': 'Occupation', name: title, occupationLocation: { '@type': 'City', name: job.location } }
                }))
            },
            publisher: { '@type': 'Organization', name: 'VAF - Viet Air Filter', url: SITE_URL }
        };
    }

    let html = fs.readFileSync('index.html', 'utf8');
    if (path === '/loc-khi-cong-nghiep') {
        const landingPage = fs.readFileSync('partials/industrial-air-filtration.html', 'utf8')
            .replace('class="page-section bg-white"', 'class="page-section active bg-white"');
        const homeStart = html.indexOf('<div id="view-home"');
        const lazyRoot = '<div id="lazy-view-root"></div>';
        const lazyStart = html.indexOf(lazyRoot);
        if (homeStart !== -1 && lazyStart !== -1) {
            html = html.slice(0, homeStart) + `<div id="lazy-view-root">${landingPage}</div>` + html.slice(lazyStart + lazyRoot.length);
        }
        // The shared shell contains a hidden careers hero. It must not introduce
        // a second H1 into the server-rendered landing page document outline.
        html = html.replace(/<h1([^>]*)>([\s\S]*?)<\/h1>/, '<div$1>$2</div>');
    }
    html = html.replace('<html lang="vi">', `<html lang="${seo.language || 'vi'}">`);
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
    html = replaceMeta(html, /<meta name="description" content="[^"]*">/, `<meta name="description" content="${description}">`);
    html = replaceMeta(html, /<meta name="robots" content="[^"]*">/, '<meta name="robots" content="index, follow">');
    html = replaceMeta(html, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${escapeXml(canonical)}">`);
    html = replaceMeta(html, /<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${type === 'Article' ? 'article' : type === 'Product' ? 'product' : 'website'}">`);
    html = replaceMeta(html, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapeXml(canonical)}">`);
    html = replaceMeta(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`);
    html = replaceMeta(html, /<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${description}">`);
    html = replaceMeta(html, /<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${escapeXml(image)}">`);
    html = html.replace(/<script id="seo-structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/, `<script id="seo-structured-data" type="application/ld+json">${JSON.stringify(schema)}</script>`);

    const viPath = seo.language === 'en' ? seo.alternate : path;
    const enPath = seo.language === 'en' ? path : seo.alternate;
    html = replaceMeta(html, /<link rel="alternate" hreflang="vi" href="[^"]*">/, viPath ? `<link rel="alternate" hreflang="vi" href="${escapeXml(SITE_URL + viPath)}">` : '');
    html = replaceMeta(html, /<link rel="alternate" hreflang="en" href="[^"]*">/, enPath ? `<link rel="alternate" hreflang="en" href="${escapeXml(SITE_URL + enPath)}">` : '');
    html = replaceMeta(html, /<link rel="alternate" hreflang="x-default" href="[^"]*">/, `<link rel="alternate" hreflang="x-default" href="${escapeXml(SITE_URL + (viPath || path))}">`);
    return html;
}

for (const [path, seo] of seoPages) {
    if (path === '/') continue;
    const output = path.replace(/^\//, '') + '.html';
    fs.mkdirSync(require('path').dirname(output), { recursive: true });
    fs.writeFileSync(output, renderSeoHtml(path, seo), 'utf8');
}

console.log(`Generated sitemap.xml with ${urls.length} canonical URLs.`);
console.log(`Generated ${seoPages.size - 1} route-specific SEO HTML files.`);
