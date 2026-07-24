const fs = require('fs');
const terser = require('terser');

async function minifyFile(input, output) {
    const result = await terser.minify(fs.readFileSync(input, 'utf8'), {
        compress: {
            passes: 2
        },
        mangle: true,
        format: {
            comments: false
        }
    });

    if (result.error) throw result.error;
    fs.writeFileSync(output, result.code);
}

(async () => {
    await minifyFile('script.js', 'script.min.js');
    await minifyFile('contact-form.js', 'contact-form.min.js');
    await minifyFile('products-data.js', 'products-data.min.js');
    await minifyFile('news-data.js', 'news-data.min.js');
    await minifyFile('news-en-data.js', 'news-en-data.min.js');
    await minifyFile('projects-data.js', 'projects-data.min.js');
    await minifyFile('translations-data.js', 'translations-data.min.js');
    await minifyFile('careers-data.js', 'careers-data.min.js');
    await minifyFile('careers-en-data.js', 'careers-en-data.min.js');
    await minifyFile('careers-ui-en-data.js', 'careers-ui-en-data.min.js');
    await minifyFile('careers.js', 'careers.min.js');
})();
