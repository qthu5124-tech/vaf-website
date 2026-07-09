const fs = require('fs');
const { transform } = require('lightningcss');

const { code } = transform({
    filename: 'style.css',
    code: fs.readFileSync('style.css'),
    minify: true
});

fs.writeFileSync('style.min.css', code);
