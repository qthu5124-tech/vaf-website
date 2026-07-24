// 1. KHAI BÁO BIẾN NGÔN NGỮ TOÀN CỤC
const initialPathLang = location.pathname === '/en' || location.pathname.startsWith('/en/') ? 'en' : 'vi';
let currentLang = initialPathLang;

function stripLanguagePrefix(path = location.pathname) {
    const cleanPath = path.replace(/^\/en(?=\/|$)/, '');
    return cleanPath || '/';
}

function localizedPath(path, lang = currentLang) {
    const cleanPath = stripLanguagePrefix(path.startsWith('/') ? path : '/' + path);
    return lang === 'en' ? (cleanPath === '/' ? '/en/' : '/en' + cleanPath) : cleanPath;
}

function syncLanguageDocumentState() {
    document.documentElement.lang = currentLang;
    document.querySelectorAll('a[href^="/"]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('//') || /\.(?:pdf|docx?|xlsx?|zip)(?:[?#]|$)/i.test(href)) return;
        link.setAttribute('href', localizedPath(href));
    });
}

// 2. TỪ ĐIỂN UI (Giao diện)
let translations = window.translations || {
    vi: {
        cat_all: 'Tất cả sản phẩm',
        cat_pre: 'Lọc Thô',
        cat_fine: 'Lọc Tinh',
        cat_hepa: 'Lọc HEPA / ULPA',
        cat_equip: 'Thiết bị phòng sạch',
        btn_view_detail: 'Xem chi tiết',
        prod_custom_title: 'Sản xuất kích thước theo yêu cầu',
        prod_custom_desc: 'Ngoài quy cách chuẩn, VAF nhận sản xuất theo thực tế.',
        nav_contact: 'Liên hệ'
    },
    en: {}
};

function loadTranslationsScript() {
    if (window.translations) {
        translations = window.translations;
        return Promise.resolve(translations);
    }

    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/translations-data.min.js?v=20260724-2"]');
        if (existing) {
            existing.addEventListener('load', () => {
                translations = window.translations || translations;
                resolve(translations);
            }, { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = '/translations-data.min.js?v=20260724-2';
        script.onload = () => {
            translations = window.translations || translations;
            resolve(translations);
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function applyStaticTranslations(scope = document, lang = currentLang) {
    const elements = scope.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });
}

// 3. HÀM CHUYỂN NGÔN NGỮ (Logic mới)
async function setLang(lang) {
    if (!window.translations) await loadTranslationsScript();

    currentLang = lang;
    localStorage.setItem('vaf_lang', lang); 
    const nextUrl = localizedPath(stripLanguagePrefix(location.pathname), lang) + location.search + location.hash;
    history.replaceState({}, '', nextUrl);
    syncLanguageDocumentState();
    if (currentLang === 'en' && window.newsData) await loadNewsTranslations();

    // Đổi màu nút VN/EN
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    // Đồng bộ trạng thái cho cả bộ chuyển ngôn ngữ desktop và mobile.
    const activeLabel = lang === 'vi' ? 'VN' : 'EN';
    document.querySelectorAll('.lang-btn').forEach(button => {
        if (button.textContent.trim() !== activeLabel) return;
        button.classList.add('active');
        button.setAttribute('aria-pressed', 'true');
    });

    // Dịch text tĩnh
    applyStaticTranslations(document, lang);

    // Cập nhật lại Sidebar Menu sang ngôn ngữ mới ngay lập tức
    renderSidebarMenu();

    // Render lại dữ liệu đang xem
    const prodView = document.getElementById('view-products');
    const newsView = document.getElementById('view-news');
    const prodDetailView = document.getElementById('view-product-detail');
    const newsDetailView = document.getElementById('view-news-detail');
    const careersView = document.getElementById('view-careers');
    const careerDetailView = document.getElementById('view-career-detail');

    if (prodView && prodView.style.display !== 'none') {
        // Gắn cờ true để không bị nhảy trang (cuộn chuột) khi chỉ đổi ngôn ngữ
        filterProducts(window.currentFilterCat || 'all', true); 
    }
    if (newsView && newsView.style.display !== 'none') {
        renderNewsPage(window.currentNewsPage || 1); 
    }
    if (prodDetailView && prodDetailView.style.display !== 'none' && window.currentProductId) {
        executeProductDetail(window.currentProductId); 
    }
    if (newsDetailView && newsDetailView.style.display !== 'none' && window.currentNewsId) {
        executeNewsDetail(window.currentNewsId);
    }
    if ((careersView && careersView.style.display !== 'none') || (careerDetailView && careerDetailView.style.display !== 'none')) {
        await loadCareersModule();
        if (careersView && careersView.style.display !== 'none') window.VAFCareers.renderList();
        if (careerDetailView && careerDetailView.style.display !== 'none') window.VAFCareers.openDetail(stripLanguagePrefix(location.pathname).split('/')[2]);
    }
    setPageSeo(lastSeoOptions);
}

/* ================================================================
   FILE XỬ LÝ CHÍNH - VAF WEBSITE (MENU LỌC DANH MỤC)
================================================================ */

// --- 1. DỮ LIỆU DỰ ÁN (PROJECTS) ---


let projects = window.projects || [];
const viewPartials = {
    'view-about': '/partials/about.html',
    'view-news': '/partials/news.html',
    'view-products': '/partials/products.html',
    'view-product-detail': '/partials/product-detail.html',
    'view-projects': '/partials/projects.html',
    'view-projects-all': '/partials/projects-all.html',
    'view-project-detail': '/partials/project-detail.html',
    'view-news-detail': '/partials/news-detail.html',
    'view-contact': '/partials/contact.html',
    // Module Tuyển dụng: giữ partial tách biệt để chỉ tải khi người dùng truy cập.
    'view-careers': '/partials/careers.html?v=20260724-5',
    'view-career-detail': '/partials/career-detail.html?v=20260724-5'
};
const loadedViewPromises = {};

async function ensureView(viewId) {
    if (document.getElementById(viewId)) return document.getElementById(viewId);

    const partialUrl = viewPartials[viewId];
    if (!partialUrl) return null;
    if (!loadedViewPromises[viewId]) {
        loadedViewPromises[viewId] = fetch(partialUrl)
            .then(response => {
                if (!response.ok) throw new Error(`Cannot load ${partialUrl}`);
                return response.text();
            })
            .then(async html => {
                const host = document.getElementById('lazy-view-root');
                if (!host) throw new Error('Missing lazy view root');
                const template = document.createElement('template');
                template.innerHTML = html.trim();
                const fragment = template.content;
                host.appendChild(fragment);
                const view = document.getElementById(viewId);
                applyImageLoadingHints(view || host);
                hydrateDeferredImages(view || host);
                if (currentLang !== 'vi') {
                    if (!window.translations) await loadTranslationsScript();
                    applyStaticTranslations(view || host, currentLang);
                }
                if (viewId === 'view-contact') {
                    await loadContactFormScript();
                    window.bindContactForm?.();
                }
                return view;
            });
    }
    return loadedViewPromises[viewId];
}

// --- 2. HÀM TIỆN ÍCH ---
function cleanText(text) { return text ? text.replace(/<[^>]*>?/gm, '') : ''; }

function resolveAssetPath(path) {
    if (!path || /^(https?:)?\/\//.test(path) || path.startsWith('/')) return path;
    return '/' + path;
}

function resolveNewsContentAssets(html) {
    if (!html) return '';
    return html
        .replace(/src="images\//g, 'src="/images/')
        .replace(/src='images\//g, "src='/images/");
}

function applyImageLoadingHints(scope = document) {
    scope.querySelectorAll('img').forEach(img => {
        img.decoding = 'async';
        if (img.classList.contains('img-logo')) {
            img.loading = 'eager';
            img.fetchPriority = 'high';
            return;
        }
        if (!img.hasAttribute('loading')) img.loading = 'lazy';
        if ((!img.hasAttribute('width') || !img.hasAttribute('height')) && img.complete && img.naturalWidth && img.naturalHeight) {
            img.width = img.naturalWidth;
            img.height = img.naturalHeight;
        } else if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
            img.addEventListener('load', () => {
                if (img.naturalWidth && img.naturalHeight) {
                    img.width = img.naturalWidth;
                    img.height = img.naturalHeight;
                }
            }, { once: true });
        }
    });
}

const SITE_URL = 'https://vietfil.com';
const DEFAULT_SEO = {
    title: 'VAF - Nhà Sản Xuất Lọc Khí & Thiết Bị Phòng Sạch Chuẩn Quốc Tế',
    description: 'Viet Air Filter sản xuất lọc khí HEPA, ULPA và thiết bị phòng sạch chuẩn ISO 16890, EN 1822.',
    path: '/',
    image: '/images/vaf-banner.webp',
    type: 'website'
};
let lastSeoOptions = {};

function setMeta(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute(attribute, value);
}

function setPageSeo(options = {}) {
    lastSeoOptions = options;
    const seo = { ...DEFAULT_SEO, ...options };
    const localizedSeoPath = localizedPath(seo.path);
    const url = SITE_URL + localizedSeoPath;
    const image = seo.image.startsWith('http') ? seo.image : SITE_URL + resolveAssetPath(seo.image);
    document.title = seo.title;
    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('link[rel="canonical"]', 'href', url);
    setMeta('link[rel="alternate"][hreflang="vi"]', 'href', SITE_URL + stripLanguagePrefix(seo.path));
    setMeta('link[rel="alternate"][hreflang="en"]', 'href', SITE_URL + localizedPath(seo.path, 'en'));
    setMeta('link[rel="alternate"][hreflang="x-default"]', 'href', SITE_URL + stripLanguagePrefix(seo.path));
    setMeta('meta[property="og:type"]', 'content', seo.type);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    let structuredData = seo.structuredData;
    if (!structuredData) {
        structuredData = { '@context': 'https://schema.org', '@type': 'WebPage', name: seo.title, description: seo.description, url };
    }
    document.getElementById('seo-structured-data').textContent = JSON.stringify(structuredData);
}

function parseVietnameseDate(date) {
    const parts = String(date || '').split('/');
    return parts.length === 3 ? `${parts[2]}-${parts[1]}-${parts[0]}` : undefined;
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isCompactViewport = () => window.matchMedia('(max-width: 767px)').matches;
const scrollBehavior = () => (prefersReducedMotion() || isCompactViewport()) ? 'auto' : 'smooth';

function scrollToTop() {
    if (window.scrollY > 0) window.scrollTo({ top: 0, behavior: scrollBehavior() });
}

function scrollToY(top) {
    window.scrollTo({ top, behavior: scrollBehavior() });
}

function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
        const offset = 80;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        scrollToY(top);
    }
}

function switchView(viewId) {
    const target = document.getElementById(viewId);
    if(!target) return;
    const careerHero = document.getElementById('career-route-hero');
    if (careerHero) careerHero.style.display = viewId === 'view-careers' ? 'block' : 'none';
    document.querySelectorAll('.page-section').forEach(el => {
        el.classList.remove('active');
        if(el.id !== viewId) el.style.display = 'none';
    });
    target.style.display = 'block';
    setTimeout(() => target.classList.add('active'), 10);
}

// --- 3. LOGIC SẢN PHẨM & MENU ---

function loadProductsScript() {
    if (window.products) return Promise.resolve(window.products);

    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/products-data.min.js"]');
        if (existing) {
            existing.addEventListener('load', () => resolve(window.products || []), { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = '/products-data.min.js';
        script.onload = () => resolve(window.products || []);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function hydrateDeferredImages(scope = document) {
    const images = [...scope.querySelectorAll('img[data-src]')];
    if (!images.length) return;

    const loadImage = img => {
        if (!img.dataset.src) return;
        img.closest('picture')?.querySelectorAll('source[data-srcset]').forEach(source => {
            source.srcset = source.dataset.srcset;
            source.removeAttribute('data-srcset');
        });
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    };

    if (!('IntersectionObserver' in window)) {
        images.forEach(loadImage);
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            loadImage(entry.target);
        });
    }, { rootMargin: '120px 0px' });

    images.forEach(img => observer.observe(img));
}

function loadDeferredImagesNow(scope = document) {
    scope.querySelectorAll('img[data-src]').forEach(img => {
        img.closest('picture')?.querySelectorAll('source[data-srcset]').forEach(source => {
            source.srcset = source.dataset.srcset;
            source.removeAttribute('data-srcset');
        });
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
}

function loadNewsTranslations() {
    if (currentLang !== 'en' || window.newsTranslationsEn) return Promise.resolve();
    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/news-en-data.min.js"]');
        if (existing) {
            existing.addEventListener('load', resolve, { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }
        const script = document.createElement('script');
        script.src = '/news-en-data.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function localizedNews(article) {
    if (currentLang !== 'en') return article;
    return { ...article, ...(window.newsTranslationsEn?.[article.id] || {}) };
}

function loadNewsScript() {
    if (window.newsData) return loadNewsTranslations().then(() => window.newsData);

    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/news-data.min.js"]');
        if (existing) {
            existing.addEventListener('load', () => loadNewsTranslations().then(() => resolve(window.newsData || [])), { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = '/news-data.min.js';
        script.onload = () => loadNewsTranslations().then(() => resolve(window.newsData || []));
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function loadProjectsScript() {
    if (window.projects) {
        projects = window.projects;
        return Promise.resolve(projects);
    }

    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/projects-data.min.js"]');
        if (existing) {
            existing.addEventListener('load', () => {
                projects = window.projects || [];
                resolve(projects);
            }, { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = '/projects-data.min.js';
        script.onload = () => {
            projects = window.projects || [];
            resolve(projects);
        };
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function loadContactFormScript() {
    if (window.bindContactForm) return Promise.resolve();

    return new Promise((resolve, reject) => {
        const existing = document.querySelector('script[src="/contact-form.min.js"]');
        if (existing) {
            existing.addEventListener('load', resolve, { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = '/contact-form.min.js';
        script.defer = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Render Menu Danh Mục (Sidebar)
function renderSidebarMenu() {
    const container = document.getElementById('product-filters');
    if (!container) return;

    const lang = currentLang || 'vi';
    const t = translations[lang];

    // Bộ phiên dịch danh mục từ tiếng Việt gốc sang ngôn ngữ hiện tại
    const catMap = {
        'Lọc Thô': t['cat_pre'] || 'Lọc Thô',
        'Lọc Tinh': t['cat_fine'] || 'Lọc Tinh',
        'Phòng Sạch': t['cat_hepa'] || 'Lọc HEPA / ULPA',
        'Thiết Bị': t['cat_equip'] || 'Thiết bị phòng sạch'
    };

    // Icon tương ứng cho từng danh mục
    const iconsMap = {
        'Lọc Thô': 'fa-wind',
        'Lọc Tinh': 'fa-layer-group',
        'Phòng Sạch': 'fa-virus-slash',
        'Thiết Bị': 'fa-box-open'
    };

    const categories = [...new Set((window.products || []).map(p => p.cat))];
    const currentCat = window.currentFilterCat || 'all';

    // 1. Nút "Tất cả sản phẩm"
    let html = `
        <button onclick="filterProducts('all')" class="category-btn ${currentCat === 'all' ? 'active bg-primary text-white' : 'bg-white text-slate-600'} w-full text-left font-bold py-3 px-4 rounded-lg mb-2 flex justify-between items-center transition border border-gray-100 hover:border-primary hover:text-primary">
            <span>${t['cat_all'] || 'Tất cả sản phẩm'}</span>
            <i class="fas fa-th-large text-xs"></i>
        </button>
    `;

    // 2. Các nút danh mục con
    categories.forEach(cat => {
        const isActive = (currentCat === cat);
        const translatedName = catMap[cat] || cat; // Lấy tên đã dịch
        const icon = iconsMap[cat] || 'fa-chevron-right'; // Lấy icon chuẩn
        
        html += `
            <button onclick="filterProducts('${cat}')" class="category-btn ${isActive ? 'active bg-primary text-white' : 'bg-white text-slate-600'} w-full text-left font-bold py-3 px-4 rounded-lg mb-2 flex justify-between items-center transition border border-gray-100 hover:border-primary hover:text-primary">
                <span>${translatedName}</span>
                <i class="fas ${icon} text-xs"></i>
            </button>
        `;
    });

    container.innerHTML = html;
}

// Lọc và Hiển thị Sản phẩm (Grid View)
// Lọc và Hiển thị Sản phẩm (Grid View)
// Lọc và Hiển thị Sản phẩm (Grid View) - ĐÃ SỬA LỖI SONG NGỮ
async function filterProducts(cat, noScroll = false) {

    await loadProductsScript();
    await ensureView('view-products');

    const products = window.products || [];

    window.currentFilterCat = cat;

    switchView('view-products');

    renderSidebarMenu();

    const list = cat === 'all'
        ? products
        : products.filter(p => p.cat === cat);
    const grid = document.getElementById('products-grid');
    
    if (grid) {
        if (list.length === 0) {
            grid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400">Không tìm thấy sản phẩm.</div>';
        } else {
            const lang = currentLang || 'vi'; 
            grid.innerHTML = list.map(p => {
                const pName = (typeof p.name === 'object') ? p.name[lang] : p.name;
                const pDesc = (typeof p.desc === 'object') ? p.desc[lang] : p.desc;
                
                // Dịch thẻ Tag góc trái ảnh
                const catMap = {
                    'Lọc Thô': translations[lang]['cat_pre'] || 'Lọc Thô',
                    'Lọc Tinh': translations[lang]['cat_fine'] || 'Lọc Tinh',
                    'Phòng Sạch': translations[lang]['cat_hepa'] || 'HEPA',
                    'Thiết Bị': translations[lang]['cat_equip'] || 'Thiết Bị'
                };
                const translatedCat = catMap[p.cat] || p.cat;
                
                // Dịch chữ Xem chi tiết
                const txtViewDetail = translations[lang]['btn_view_detail'] || 'Xem chi tiết';

                return `
                <div class="product-card bg-white border rounded-lg overflow-hidden cursor-pointer h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group" onclick="openProductDetail('${p.id}')">
                    
                    <div class="relative w-full aspect-[2400/1792] overflow-hidden bg-white">
                        <img src="${p.img}" width="2400" height="1792" loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover" alt="${pName}" onerror="this.src='https://placehold.co/2400x1792?text=VAF+Product'">
                        <div class="absolute top-2 left-2">
                            <span class="text-[10px] font-bold text-white bg-primary/90 px-2 py-1 rounded shadow uppercase tracking-wide backdrop-blur-sm">${translatedCat}</span>
                        </div>
                    </div>

                    <div class="p-5 flex-grow flex flex-col">
                        <h3 class="font-bold text-lg text-secondary mb-2 leading-snug group-hover:text-primary transition">${pName}</h3>
                        <p class="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-4">${pDesc}</p>
                        <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center text-xs font-bold text-gray-400 group-hover:text-primary transition">
                            <span>${txtViewDetail}</span>
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            `}).join('');
        }
        applyImageLoadingHints(grid);
    }

    // Nếu người dùng chủ động bấm thì cuộn chuột lên đầu lưới, nếu do hệ thống auto-đổi ngôn ngữ thì giữ yên
    if (!noScroll) {
        const section = document.getElementById('view-products');
        if(section) {
            const y = section.getBoundingClientRect().top + window.pageYOffset - 100;
            scrollToY(y);
        }
    }
}
// --- CHI TIẾT SẢN PHẨM (FINAL VERSION - FIX LỖI) ---
function openProductDetail(id) {

    history.pushState(
        {},
        "",
        localizedPath("/product/" + id)
    );

    handleRouting();
}

async function executeProductDetail(id) {
    await loadProductsScript();
    await ensureView('view-product-detail');
    window.currentProductId = id;
    const p = (window.products || []).find(x => x.id === id);
    if (!p) {
        history.replaceState({}, "", localizedPath("/products"));
        await ensureView('view-products');

        switchView("view-products");

        return;
    }

    const lang = currentLang;
    const pName = (typeof p.name === 'object') ? p.name[lang] : p.name;
    const pDesc = (typeof p.desc === 'object') ? p.desc[lang] : p.desc;

    setPageSeo({
        title: pName + ' | VAF',
        description: cleanText(pDesc),
        path: '/product/' + p.id,
        image: resolveAssetPath(p.img),
        type: 'product'
    });
    const imgEl = document.getElementById('pd-img');
    imgEl.src = "/" + p.img;
    imgEl.alt = pName;
    imgEl.width = 2400;
    imgEl.height = 1792;
    imgEl.onerror = function () { this.src = 'https://placehold.co/800x600?text=VAF+Product'; };

    document.getElementById('pd-cat').innerText = p.cat;
    const catTag = document.getElementById('pd-cat-tag');
    if (catTag) catTag.innerText = p.cat;

    document.getElementById('pd-name').innerText = pName;
    document.getElementById('pd-name-breadcrumb').innerText = pName;
    document.getElementById('pd-desc').innerText = pDesc;

    if (p.specs && Array.isArray(p.specs)) {
        document.getElementById('pd-specs').innerHTML = p.specs.map(s => {
            if (!s || !Array.isArray(s)) return '';
            const label = (typeof s[0] === 'object') ? s[0][lang] : s[0];
            const value = (typeof s[1] === 'object') ? s[1][lang] : s[1];
            return `
            <tr class="border-b border-gray-100 last:border-0">
                <td class="py-2 pr-4 font-bold text-slate-800 w-[40%] align-top">${label}</td>
                <td class="py-2 text-slate-600 align-top">${value}</td>
            </tr>`;
        }).join('');
    }

    if (p.apps) {
        let appList = Array.isArray(p.apps) ? p.apps : (p.apps[lang] || []);
        document.getElementById('pd-apps').innerHTML = appList.map(app => `
            <li class="marker:text-primary">${app}</li>
        `).join('');
    }

    document.getElementById('pd-table-container').innerHTML = p.table || '<div class="p-4 text-gray-400 italic text-center">Liên hệ để nhận thông số chi tiết.</div>';

    const drawingWrapper = document.getElementById('pd-drawing-wrapper');
    const drawingImg = document.getElementById('pd-drawing-img');

    if (!document.getElementById('custom-size-banner')) {
        const bannerDiv = document.createElement('div');
        bannerDiv.id = 'custom-size-banner';
        bannerDiv.className = 'custom-size-banner mt-8';
        const txtTitle = translations[lang]['prod_custom_title'] || 'Sản xuất kích thước theo yêu cầu';
        const txtDesc = translations[lang]['prod_custom_desc'] || 'Ngoài quy cách chuẩn, VAF nhận sản xuất theo thực tế.';
        const txtBtn = translations[lang]['nav_contact'] || 'Liên hệ';

        bannerDiv.innerHTML = `
            <div class="z-10 relative">
                <h4 class="text-xl font-bold mb-2 flex items-center gap-2 text-white uppercase tracking-wide">
                    <i class="fas fa-ruler-combined text-primary"></i> ${txtTitle}
                </h4>
                <p class="text-gray-300 text-sm mb-4 max-w-3xl">${txtDesc}</p>
                <button onclick="navigate('contact')" class="bg-white text-secondary hover:bg-primary hover:text-white px-6 py-2 rounded font-bold text-sm transition shadow-lg uppercase">
                    ${txtBtn}
                </button>
            </div>
            <i class="fas fa-drafting-compass big-icon"></i>
        `;
        if (drawingWrapper && drawingWrapper.parentNode) drawingWrapper.parentNode.insertBefore(bannerDiv, drawingWrapper);
    }

    if (p.drawing && drawingWrapper && drawingImg) {
        drawingImg.src = p.drawing;
        drawingImg.alt = `${pName} technical drawing`;
        drawingWrapper.classList.remove('hidden');
    } else if (drawingWrapper) {
        drawingWrapper.classList.add('hidden');
    }

    switchView('view-product-detail');
    scrollToTop();
}

/// --- 4. HỆ THỐNG ĐỊNH TUYẾN (ROUTING) TẠO URL RIÊNG ---
function navigate(target) {

    let url = "/";

    switch (target) {

        case "home":
            url = "/";
            break;

        case "about":
            url = "/about";
            break;

        case "products":
            url = "/products";
            break;

        case "projects":
            url = "/projects";
            break;

        case "news":
            url = "/news";
            break;

        case "contact":
            url = "/contact";
            break;

        case "tuyen-dung":
            url = "/tuyen-dung";
            break;

        default:
            url = "/" + target;
            break;
    }

    history.pushState({}, "", localizedPath(url));

    handleRouting();
}

function handleNav(target) {
    navigate(target);
}

// Lắng nghe sự kiện khi URL thay đổi (Bấm nút Back/Forward trình duyệt)
window.addEventListener('popstate', handleRouting);

async function handleRouting() {
    const hasEnglishPrefix = location.pathname === '/en' || location.pathname.startsWith('/en/');
    const routeLang = hasEnglishPrefix ? 'en' : 'vi';
    if (routeLang === 'en' && !window.translations) await loadTranslationsScript();
    if (currentLang !== routeLang) {
        currentLang = routeLang;
        localStorage.setItem('vaf_lang', routeLang);
    }
    applyStaticTranslations(document, routeLang);
    syncLanguageDocumentState();
    const path = stripLanguagePrefix(location.pathname);

    let hash = "";

    if (path === "/")
        hash = "home";
    else
        hash = path.substring(1);

    // Nếu không có hash (mới vào web), mặc định là home
    if (!hash) {
        history.replaceState({}, "", localizedPath("/"));
        hash = "home";
    }

    const parts = hash.split("/");

    const page = parts[0];
    const param = parts[1];
    

    // 1. Ẩn menu mobile nếu đang mở
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');

    // 2. Active màu đỏ cho menu trên thanh điều hướng
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
let activeTarget = page;

if (page === "product") activeTarget = "products";
if (page === "project") activeTarget = "projects";
if (page === "tuyen-dung") activeTarget = "tuyen-dung";

    const activeLink = document.querySelector(`.nav-link[data-target="${activeTarget}"]`);
    if (activeLink) activeLink.classList.add('active');

    // 3. Xử lý hiển thị trang tương ứng
    if (page === 'home') {
        setPageSeo();
        switchView('view-home');
        hydrateDeferredImages(document.getElementById('view-home') || document);
        scrollToTop();
    }
    else if (page === 'about') {
        document.title = 'Về VAF - Hồ Sơ Năng Lực & Nhà Máy Sản Xuất';
        await ensureView('view-about');
        switchView('view-about');
        scrollToTop();
        setTimeout(() => runCounterAnimation(), 500);
    }
    else if (page === 'products') {
        document.title = 'Danh Mục Sản Phẩm Lọc Khí - VAF';
        await ensureView('view-products');
        switchView('view-products');
        if (!window.currentFilterCat) await filterProducts('all', true);
        scrollToTop();
    }
    else if (page === 'product' && param) {
        await executeProductDetail(param);
    }
    else if (page === 'projects') {

        document.title = 'Dự Án Tiêu Biểu & Khách Hàng - VAF';
        await ensureView('view-projects');
        switchView('view-projects');
        await filterProjects('all');
        scrollToTop();
    }
    else if (page === 'projects-all') {

        document.title = 'Tất Cả Dự Án - VAF';
        await ensureView('view-projects-all');
        switchView('view-projects-all');

        await renderAllProjects(1);

        scrollToTop();
    }
    else if (page === 'project' && param) {
    await executeProjectDetail(param);
}
    else if (page === "news" && param) {
    await executeNewsDetail(param);
}
else if (page === "news") {
    setPageSeo({ title: 'Kiến Thức Lọc Khí, HEPA & Phòng Sạch | VAF', description: 'Tổng hợp kiến thức chuyên sâu về lọc khí, lọc HEPA H13 H14, thiết bị và tiêu chuẩn phòng sạch từ đội ngũ kỹ thuật VAF.', path: '/news' });
    await ensureView('view-news');
    switchView('view-news');
    await loadNewsScript();
    renderNewsPage();
    renderSidebarNews();
    scrollToTop();
}
    else if (page === "news-detail" && param) {
        await executeNewsDetail(param);
    }
    else if (page === 'contact') {
        document.title = 'Liên Hệ Tư Vấn & Báo Giá - VAF';
        await ensureView('view-contact');
        switchView('view-contact');
        scrollToTop();
    }
    else if (page === 'tuyen-dung' && param) {
        await ensureView('view-career-detail');
        switchView('view-career-detail');
        await loadCareersModule();
        await window.VAFCareers.openDetail(param);
        scrollToTop();
    }
    else if (page === 'tuyen-dung') {
        await ensureView('view-careers');
        switchView('view-careers');
        await loadCareersModule();
        await window.VAFCareers.renderList();
        scrollToTop();
    }
// Render Dự án & Tin tức (Giữ nguyên)

}

// Nạp dữ liệu và logic tuyển dụng theo nhu cầu, không làm nặng các trang hiện hữu.
function loadCareersModule() {
    const loadScript = src => new Promise((resolve, reject) => {
        const old = document.querySelector(`script[src="${src}"]`);
        if (old) {
            old.addEventListener('load', resolve, { once: true });
            old.addEventListener('error', reject, { once: true });
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
    if (window.VAFCareers) {
        if (currentLang !== 'en') return Promise.resolve(window.VAFCareers);
        const extras = [];
        if (!window.careersTranslationsEn) extras.push(loadScript('/careers-en-data.min.js?v=20260724-5'));
        if (!window.careersUiEn) extras.push(loadScript('/careers-ui-en-data.min.js?v=20260724-5'));
        return Promise.all(extras).then(() => window.VAFCareers);
    }
    return loadScript('/careers-data.min.js?v=20260724-5')
        .then(() => currentLang === 'en' ? loadScript('/careers-en-data.min.js?v=20260724-5') : null)
        .then(() => currentLang === 'en' ? loadScript('/careers-ui-en-data.min.js?v=20260724-5') : null)
        .then(() => loadScript('/careers.min.js?v=20260724-5'))
        .then(() => window.VAFCareers);
}
// Render Dự án & Tin tức (Giữ nguyên)
// --- BỘ LỌC DỰ ÁN ---
async function renderProjectFilters(activeCat = 'all') {
    await loadProjectsScript();
    const filterContainer = document.getElementById('project-filters');
    if (!filterContainer) return;

    // Tự động gom các ngành nghề đang có trong mảng projects
    const categories = [...new Set(projects.map(p => p.cat))];

    // Nút "Tất cả"
    let html = `<button onclick="filterProjects('all')" class="px-6 py-2 rounded-full font-bold text-sm transition shadow-sm ${activeCat === 'all' ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border border-gray-200 hover:text-primary hover:border-primary'}">Tất cả</button>`;

    // Các nút ngành nghề khác
    categories.forEach(cat => {
        html += `<button onclick="filterProjects('${cat}')" class="px-6 py-2 rounded-full font-bold text-sm transition shadow-sm ${activeCat === cat ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border border-gray-200 hover:text-primary hover:border-primary'}">${cat}</button>`;
    });

    filterContainer.innerHTML = html;
}

const projectsPerPage = 9;
let currentPage = 1;

async function renderAllProjects(page = 1) {
    await loadProjectsScript();
    await ensureView('view-projects-all');

    const grid =
        document.getElementById('all-projects-grid');

    if (!grid) {
        console.error('Không tìm thấy all-projects-grid');
        return;
    }

    const projectsPerPage = 9;

    currentPage = page;

    const start = (page - 1) * projectsPerPage;
    const end = start + projectsPerPage;

    const paginatedProjects =
        projects.slice(start, end);

    grid.innerHTML = `
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${paginatedProjects.map(p => `
                <div class="bg-white rounded-xl border p-5">

                    <h3 class="font-bold text-lg text-secondary">
                        ${p.title}
                    </h3>

                    <div class="text-sm text-gray-500 mt-2">
                        ${p.client}
                    </div>

                    <div class="text-sm text-gray-400">
                        ${p.loc} • ${p.year}
                    </div>

                </div>
            `).join('')}
        </div>
    `;

    renderPagination();
}

// --- HIỂN THỊ DỰ ÁN ---
async function filterProjects(cat) {
    await loadProjectsScript();
    await ensureView('view-projects');
    renderProjectFilters(cat);
    const grid = document.getElementById('projects-grid');
    if (!grid) return;
        
    const featuredProjects = projects.filter(p => p.featured);

    const filteredProjects =
        cat === 'all'
            ? featuredProjects
            : projects.filter(p => p.cat === cat);
   

    

    if (filteredProjects.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-10 text-gray-400">Chưa có dự án nào trong danh mục này.</div>';
        return;
    }

    grid.innerHTML = filteredProjects.map(p => `
        <div class="product-card bg-white border rounded-xl overflow-hidden cursor-pointer h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group" onclick="openProjectDetail('${p.id}')">
            <div class="h-56 bg-gray-100 relative overflow-hidden">
                <img src="${p.img}" width="800" height="600" alt="${p.title}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-110 transition duration-700">
                <div class="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide shadow">${p.cat}</div>
            </div>
            <div class="p-5">
                <h3 class="font-bold text-lg text-secondary mb-2 group-hover:text-primary transition leading-snug line-clamp-2">${p.title}</h3>
                <p class="text-sm text-gray-500 mb-2 leading-5">${p.desc}</p>
               <div class="mt-2 pt-2 border-t border-gray-100 text-xs text-slate-500 space-y-0">
    <p><strong>Khách hàng:</strong> ${p.client}</p>
    <p><strong>Địa điểm:</strong> ${p.loc}</p>
    <p><strong>Năm:</strong> ${p.year}</p>
</div>
            </div>
        </div>`).join('');
    applyImageLoadingHints(grid);
}

async function showAllProjects() {
    await loadProjectsScript();

    const grid = document.getElementById('projects-grid');

    grid.innerHTML = projects.map(p => `
        <div class="project-row border-b py-3">

            <div class="font-bold text-secondary">
                ${p.title}
            </div>

            <div class="text-sm text-gray-500">
                ${p.client} • ${p.loc} • ${p.year}
            </div>

        </div>
    `).join('');

}


function renderHomeNews() {
    const container = document.getElementById('home-news-slider-content');
    const news = window.newsData || [];
    if (!container || !news.length) return;
    container.innerHTML = news.map(item => {
        const n = localizedNews(item);
        return `
        <div class="swiper-slide h-auto"><article class="bg-white h-full rounded-xl overflow-hidden border hover:shadow-lg transition flex flex-col"><a href="${localizedPath('/news/' + n.id)}" onclick="openNewsDetail('${n.id}'); return false;" class="h-full flex flex-col">
            <div class="h-48 relative overflow-hidden"><img src="${resolveAssetPath(n.img)}?w=600" width="600" height="400" alt="${n.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-500 hover:scale-110"></div>
            <div class="p-5 flex-grow flex flex-col"><h3 class="font-bold text-lg mb-2 text-secondary leading-tight line-clamp-2">${n.title}</h3></div>
        </a></article></div>`;
    }).join('');
    applyImageLoadingHints(container);
    if (window.homeNewsSwiper) window.homeNewsSwiper.update();
}

// --- CẤU HÌNH PHÂN TRANG ---
const NEWS_PER_PAGE = 6; // Số bài viết mỗi trang
let currentNewsPage = 1; // Trang hiện tại

// 1. Hàm Render Tin Tức có Phân Trang
function renderNewsPage(page = 1) {
    const container = document.getElementById('news-page-grid');
    const paginationContainer = document.getElementById('news-pagination');
    const news = window.newsData || [];
    
    if (!container || !news.length) return;

    // Tính toán cắt mảng dữ liệu
    const totalItems = news.length;
    const totalPages = Math.ceil(totalItems / NEWS_PER_PAGE);
    
    // Đảm bảo trang hợp lệ
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentNewsPage = page;

    // Vị trí bắt đầu và kết thúc
    const start = (page - 1) * NEWS_PER_PAGE;
    const end = start + NEWS_PER_PAGE;
    const itemsToShow = news.slice(start, end);

    // A. Render Bài viết
    container.innerHTML = itemsToShow.map(item => {
        const n = localizedNews(item);
        return `
        <article class="news-grid-card group h-full flex flex-col"><a href="${localizedPath('/news/' + n.id)}" onclick="openNewsDetail('${n.id}'); return false;" class="h-full flex flex-col">
            <div class="h-56 relative overflow-hidden">
                <img src="${resolveAssetPath(n.img)}?w=800" width="800" height="500" alt="${n.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" onerror="this.src='https://placehold.co/600x400?text=VAF+News'">
                <div class="absolute top-4 left-4">
                    <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">${n.cat}</span>
                </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
                <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span><i class="far fa-calendar-alt mr-1"></i> ${n.date}</span>
                </div>
                <h3 class="font-bold text-xl text-secondary mb-3 leading-snug group-hover:text-primary transition line-clamp-2">
                    ${n.title}
                </h3>
                <p class="text-gray-500 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                    ${cleanText(n.desc)}
                </p>
                <div class="pt-4 border-t border-gray-100 mt-auto flex justify-between items-center">
                    <span class="text-primary font-bold text-sm group-hover:underline">${currentLang === 'en' ? 'Read more' : 'Đọc tiếp'}</span>
                    <i class="fas fa-long-arrow-alt-right text-primary transform group-hover:translate-x-2 transition"></i>
                </div>
            </div>
        </a></article>
    `;
    }).join('');
    applyImageLoadingHints(container);

    // B. Render Nút Phân Trang
    renderPaginationControls(totalPages, page);
}

// --- HÀM RENDER SIDEBAR TIN TỨC (CỘT PHẢI) ---
function renderSidebarNews() {
    const container = document.getElementById('sidebar-featured');
    const news = window.newsData || [];
    if (!container || !news.length) return;

    // Lấy 5 bài viết bất kỳ (hoặc lấy 5 bài đầu tiên làm tin nổi bật)
    // Ở đây mình lấy 5 bài đầu tiên cho đơn giản
    const featuredNews = news.slice(0, 5); 

    container.innerHTML = featuredNews.map(item => {
        const n = localizedNews(item);
        return `
        <a href="${localizedPath('/news/' + n.id)}" class="flex gap-4 group border-b border-gray-100 pb-4 last:border-0 last:pb-0" onclick="openNewsDetail('${n.id}'); return false;">
            <div class="w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden relative">
                <img src="${resolveAssetPath(n.img)}?w=200" width="200" height="150" alt="${n.title}" loading="lazy" decoding="async" class="w-full h-full object-cover transition duration-500 group-hover:scale-110" onerror="this.src='https://placehold.co/200?text=News'">
            </div>
            
            <div class="flex-grow flex flex-col justify-between">
                <div>
                    <span class="text-[10px] font-bold text-primary uppercase tracking-wide mb-1 block">${n.cat}</span>
                    <h4 class="text-sm font-bold text-slate-700 leading-snug group-hover:text-primary transition line-clamp-2">
                        ${n.title}
                    </h4>
                </div>
                <div class="text-[11px] text-gray-400 mt-1">
                    <i class="far fa-clock mr-1"></i> ${n.date}
                </div>
            </div>
        </a>
    `;
    }).join('');
    applyImageLoadingHints(container);
}

// 2. Hàm tạo nút bấm (1, 2, 3, Next, Prev)
function renderPaginationControls(totalPages, currentPage) {
    const container = document.getElementById('news-pagination');
    if (!container) return;
    
    if (totalPages <= 1) {
        container.innerHTML = ''; // Ít bài quá thì ẩn phân trang
        return;
    }

    let html = '';

    // Nút Previous
    html += `<button onclick="renderNewsPage(${currentPage - 1})" aria-label="Trang tin tức trước" class="w-10 h-10 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition flex items-center justify-center ${currentPage === 1 ? 'opacity-50 pointer-events-none' : ''}"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>`;

    // Các nút số trang
    for (let i = 1; i <= totalPages; i++) {
        const activeClass = i === currentPage ? 'bg-primary text-white border-primary' : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100';
        html += `<button onclick="renderNewsPage(${i})" aria-label="Trang tin tức ${i}" class="w-10 h-10 rounded-full border font-bold transition flex items-center justify-center ${activeClass}">${i}</button>`;
    }

    // Nút Next
    html += `<button onclick="renderNewsPage(${currentPage + 1})" aria-label="Trang tin tức tiếp theo" class="w-10 h-10 rounded-full border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition flex items-center justify-center ${currentPage === totalPages ? 'opacity-50 pointer-events-none' : ''}"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>`;

    container.innerHTML = html;
    
    // Cuộn lên đầu danh sách tin tức mỗi khi chuyển trang
    const newsSection = document.getElementById('news-page-grid');
    if(newsSection && currentPage !== 1) { // Chỉ cuộn nếu không phải lần load đầu
         const y = newsSection.getBoundingClientRect().top + window.pageYOffset - 150;
         scrollToY(y);
    }
}

function openNewsDetail(id) {
    history.pushState(
        {},
        "",
        localizedPath("/news/" + id)
    );

    handleRouting();
}

async function executeNewsDetail(id) {
    await loadNewsScript();
    await ensureView('view-news-detail');
    const legacyNewsSlugs = {
        'seo-1': 'cong-nghe-mini-pleat-loc-khi',
        'seo-2': 'so-sanh-loc-hepa-h13-va-h14',
        'seo-3': 'air-shower-buong-tam-khi-phong-sach',
        'seo-4': 'khi-nao-can-thay-loc-khi',
        'seo-5': 'fan-filter-unit-ffu-phong-sach',
        'seo-6': 'tieu-chuan-phong-sach-iso-14644-1',
        'seo-7': 'quy-trinh-leak-test-loc-hepa',
        'seo-8': 'ap-luc-duong-ap-luc-am-phong-sach-benh-vien',
        'seo-9': 'loc-khi-chiu-nhiet-lo-say'
    };
    if (legacyNewsSlugs[id]) {
        id = legacyNewsSlugs[id];
        history.replaceState({}, '', localizedPath('/news/' + id));
    }
    const article = (window.newsData || []).find(x => x.id === id);
    if (!article) {
        history.replaceState({}, "", localizedPath("/news"));
        await ensureView('view-news');

        switchView("view-news");

        return;
    }
    const n = localizedNews(article);
    window.currentNewsId = id;

    const canonicalPath = '/news/' + n.id;
    const published = parseVietnameseDate(n.date);
    setPageSeo({
        title: n.title + ' | VAF',
        description: cleanText(n.desc),
        path: canonicalPath,
        image: resolveAssetPath(n.img),
        type: 'article',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: n.title,
            description: cleanText(n.desc),
            image: SITE_URL + resolveAssetPath(n.img),
            datePublished: published,
            dateModified: published,
            mainEntityOfPage: SITE_URL + localizedPath(canonicalPath),
            author: { '@type': 'Organization', name: n.author || 'VAF Technical Team', url: SITE_URL },
            publisher: { '@type': 'Organization', name: 'VAF - Viet Air Filter', logo: { '@type': 'ImageObject', url: SITE_URL + '/images/VAF-LOGO.webp' } }
        }
    });
    document.getElementById('nd-cat').innerText = n.cat;
    document.getElementById('nd-date').innerText = n.date;
    document.getElementById('nd-title').innerText = n.title;
    document.getElementById('nd-desc').innerText = cleanText(n.desc);
    const newsImage = document.getElementById("nd-img");
    newsImage.src = resolveAssetPath(n.img);
    newsImage.alt = n.title;
    newsImage.width = 1200;
    newsImage.height = 800;
    const newsContent = document.getElementById('nd-content');
    newsContent.innerHTML = resolveNewsContentAssets(n.content);
    syncLanguageDocumentState();
    applyImageLoadingHints(newsContent);
    switchView('view-news-detail');
    scrollToTop();
}

function openProjectDetail(id) {
    history.pushState(
        {},
        "",
        localizedPath("/project/" + id)
    );

    handleRouting();
}

async function executeProjectDetail(id) {
    await loadProjectsScript();
    await ensureView('view-project-detail');
    const p = projects.find(x => x.id === id);
    if (!p) {
        history.replaceState({}, "", "/projects");
        await ensureView('view-projects');

        switchView("view-projects");

        return;
    }

    document.title = "Dự Án: " + p.title + " | VAF";
    document.getElementById('pjd-title').innerText = p.title;
    document.getElementById('pjd-desc').innerText = p.desc;
    const projectImage = document.getElementById('pjd-img');
    projectImage.src = p.img;
    projectImage.alt = p.title;
    projectImage.width = 1200;
    projectImage.height = 800;
    document.getElementById('pjd-client').innerText = p.client;
    document.getElementById('pjd-loc').innerText = p.loc;
    document.getElementById('pjd-scale').innerText = p.scale;
    document.getElementById('pjd-scope').innerHTML = p.scope.map(s => `<li>${s}</li>`).join('');
    switchView('view-project-detail');
        scrollToTop();
}

// --- 5. KHỞI TẠO ---
document.addEventListener('DOMContentLoaded', () => {
    try {
        handleRouting();
    } catch (e) { console.error(e); }

    const prepareBelowFoldImages = () => applyImageLoadingHints();
    if ('requestIdleCallback' in window) requestIdleCallback(prepareBelowFoldImages, { timeout: 2000 });
    else setTimeout(prepareBelowFoldImages, 1200);

    hydrateDeferredImages();
    lazyInitSwipers();
});    

function runWhenNearViewport(element, callback) {
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
        callback();
        return;
    }

    const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        observer.disconnect();
        callback();
    }, { rootMargin: '0px' });

    observer.observe(element);
}

let swiperAssetPromise;
function loadSwiperAssets() {
    if (window.Swiper) return Promise.resolve();
    if (swiperAssetPromise) return swiperAssetPromise;

    swiperAssetPromise = new Promise((resolve, reject) => {
        if (!document.querySelector('link[data-swiper-css]')) {
            const css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
            css.dataset.swiperCss = 'true';
            document.head.appendChild(css);
        }

        const existingScript = document.querySelector('script[data-swiper-js]');
        if (existingScript) {
            existingScript.addEventListener('load', resolve, { once: true });
            existingScript.addEventListener('error', reject, { once: true });
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
        script.async = true;
        script.dataset.swiperJs = 'true';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    return swiperAssetPromise;
}

function lazyInitSwipers() {
    const swiperEl = document.querySelector('.news-swiper-home');
    runWhenNearViewport(swiperEl, async () => {
        if (window.homeNewsSwiper) return;
        await loadNewsScript();
        renderHomeNews();
        await loadSwiperAssets();
        window.homeNewsSwiper = new Swiper('.news-swiper-home', {
            slidesPerView: 1, spaceBetween: 24, loop: false,
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.home-slider-next', prevEl: '.home-slider-prev' },
            breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
        });
    });

    // KHỞI TẠO SLIDER ĐỐI TÁC KHI GẦN TỚI SECTION ĐỂ GIẢM MAIN THREAD BAN ĐẦU
    const partnerSwiperEl = document.querySelector('.partner-swiper');
    runWhenNearViewport(partnerSwiperEl, async () => {
        if (window.partnerSwiper) return;
        await loadSwiperAssets();
        window.partnerSwiper = new Swiper('.partner-swiper', {
            // Số lượng logo hiển thị
            slidesPerView: 2, 
            spaceBetween: 30,
            
            // QUAN TRỌNG: Vòng lặp vô tận
            loop: true,
            
            // Giữ vòng lặp nhẹ hơn để mobile không phải clone quá nhiều logo lúc đầu.
            loopAdditionalSlides: 8, 
            
            // Tốc độ trượt: 600ms (Trượt dứt khoát, không lề mề)
            speed: 600, 

            // Cấu hình tự động chạy
            autoplay: {
                delay: 1000,                 // Nghỉ 1 giây rồi trượt tiếp
                disableOnInteraction: false, // Tương tác xong vẫn chạy
                pauseOnMouseEnter: true,     // Rê chuột vào thì DỪNG lại
            },
            
            // Mũi tên điều hướng
            navigation: {
                nextEl: '.partner-next',
                prevEl: '.partner-prev',
            },
            
            // Responsive
            breakpoints: {
                640: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: 5, // PC hiện 5 logo
                    spaceBetween: 60,
                },
            }
        });
    });
}

// Mobile menu & Scroll effect
document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
let navScrollTicking = false;
window.addEventListener('scroll', () => {
    if (navScrollTicking) return;
    navScrollTicking = true;
    requestAnimationFrame(() => {
        const nav = document.getElementById('main-nav');
        if (nav) nav.classList.toggle('py-0', window.scrollY > 10);
        navScrollTicking = false;
    });
}, { passive: true });
// --- HÀM ĐỔI NGÔN NGỮ ---


/* ================================================================
   ANIMATION ĐẾM SỐ CHO TRANG GIỚI THIỆU
================================================================ */
function runCounterAnimation() {
    const counters = document.querySelectorAll('.count-up');
    const speed = 200; // Tốc độ đếm (càng nhỏ càng nhanh)

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Tính bước nhảy
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 20); // Gọi lại hàm sau 20ms
            } else {
                counter.innerText = target; // Đảm bảo số cuối cùng chính xác
            }
        };
        updateCount();
    });
}

