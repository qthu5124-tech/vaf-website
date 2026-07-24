const fs = require('fs');
const files = ['partials/careers.html', 'partials/career-detail.html'];
const cachePath = 'tools/.news-translation-cache.json';
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};
const values = new Set();

for (const file of files) {
    const html = fs.readFileSync(file, 'utf8');
    html.split(/(<[^>]+>)/g).forEach(part => {
        const text = part.trim();
        if (!part.startsWith('<') && /[À-ỹ]/i.test(text)) values.add(text);
    });
    for (const match of html.matchAll(/\b(?:placeholder|aria-label|alt)="([^"]*[À-ỹ][^"]*)"/gi)) values.add(match[1]);
}

async function translate(text) {
    if (cache[text]) return cache[text];
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q=' + encodeURIComponent(text);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    const result = data[0].map(item => item[0]).join('');
    cache[text] = result;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
    return result;
}

(async () => {
    const output = {};
    for (const text of values) output[text] = await translate(text);
    fs.writeFileSync('careers-ui-en-data.js', `/* English text for the static recruitment pages. */\nwindow.careersUiEn = ${JSON.stringify(output, null, 2)};\n`);
    process.stdout.write(`Translated ${values.size} recruitment UI strings.\n`);
})().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
