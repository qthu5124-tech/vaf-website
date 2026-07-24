const fs = require('fs');
const vm = require('vm');

const source = fs.readFileSync('news-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);
const articles = sandbox.window.newsData || [];
const cachePath = 'tools/.news-translation-cache.json';
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function translateText(text) {
    const trimmed = String(text || '').trim();
    if (!trimmed || !/[À-ỹ]/i.test(trimmed)) return text;
    if (cache[trimmed]) return text.replace(trimmed, cache[trimmed]);

    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q=' + encodeURIComponent(trimmed);
    for (let attempt = 0; attempt < 4; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            const translated = data[0].map(item => item[0]).join('');
            cache[trimmed] = translated;
            fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
            return text.replace(trimmed, translated);
        } catch (error) {
            if (attempt === 3) throw error;
            await sleep(800 * (attempt + 1));
        }
    }
}

async function translateHtml(html) {
    const parts = String(html || '').split(/(<[^>]+>)/g);
    const textIndexes = parts.map((part, index) => !part.startsWith('<') && /[À-ỹ]/i.test(part) ? index : -1).filter(index => index >= 0);
    let done = 0;
    const workers = Array.from({ length: 6 }, async () => {
        while (textIndexes.length) {
            const index = textIndexes.shift();
            parts[index] = await translateText(parts[index]);
            done++;
            if (done % 25 === 0) process.stdout.write(`Translated ${done} HTML segments\n`);
        }
    });
    await Promise.all(workers);
    return parts.join('');
}

(async () => {
    const output = {};
    for (const [index, article] of articles.entries()) {
        process.stdout.write(`[${index + 1}/${articles.length}] ${article.id}\n`);
        output[article.id] = {
            title: await translateText(article.title),
            cat: await translateText(article.cat),
            desc: await translateText(article.desc),
            content: await translateHtml(article.content)
        };
    }
    const header = `/*
 * ENGLISH ARTICLE CONTENT
 * -----------------------
 * When adding a new article in news-data.js, add the English version here
 * under the SAME id. Required fields: title, cat, desc, content.
 * Giữ id giống hệt bài tiếng Việt; nhập bản Anh ở 4 trường bên dưới.
 * File này được website dùng khi URL bắt đầu bằng /en/.
 */
`;
    fs.writeFileSync('news-en-data.js', `${header}window.newsTranslationsEn = ${JSON.stringify(output, null, 2)};\n`);
    process.stdout.write(`Created news-en-data.js with ${articles.length} articles.\n`);
})().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
