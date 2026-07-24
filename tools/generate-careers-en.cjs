const fs = require('fs');
const vm = require('vm');
const source = fs.readFileSync('careers-data.js', 'utf8');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(source, sandbox);
const jobs = sandbox.window.careersData || [];
const cachePath = 'tools/.news-translation-cache.json';
const cache = fs.existsSync(cachePath) ? JSON.parse(fs.readFileSync(cachePath, 'utf8')) : {};

async function translate(value) {
    if (Array.isArray(value)) return Promise.all(value.map(translate));
    const text = String(value || '');
    if (!/[À-ỹ]/i.test(text)) return text;
    if (cache[text]) return cache[text];
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=vi&tl=en&dt=t&q=' + encodeURIComponent(text);
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Translation failed: HTTP ${response.status}`);
    const data = await response.json();
    const result = data[0].map(item => item[0]).join('');
    cache[text] = result;
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
    return result;
}

(async () => {
    const fields = ['title', 'department', 'type', 'location', 'experience', 'salary', 'summary', 'description', 'requirements', 'benefits'];
    const output = {};
    for (const job of jobs) {
        output[job.id] = {};
        for (const field of fields) output[job.id][field] = await translate(job[field]);
        process.stdout.write(`Translated ${job.id}\n`);
    }
    const header = `/*
 * ENGLISH RECRUITMENT CONTENT
 * Add the English version of every new job here under the SAME id.
 * Khi thêm việc làm mới, giữ cùng id và thêm toàn bộ bản tiếng Anh tại đây.
 */
`;
    fs.writeFileSync('careers-en-data.js', `${header}window.careersTranslationsEn = ${JSON.stringify(output, null, 2)};\n`);
})().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
