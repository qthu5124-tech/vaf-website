const http = require('http');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const root = __dirname;
const port = Number(process.env.PORT || 8000);
const types = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml; charset=utf-8',
    '.txt': 'text/plain; charset=utf-8'
};

http.createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(root, urlPath === '/' ? 'index.html' : urlPath);

    if (!filePath.startsWith(root) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(root, 'index.html');
    }

    const extension = path.extname(filePath);
    const contentType = types[extension] || 'application/octet-stream';
    const compressible = /^(text\/|application\/(javascript|json|xml))/.test(contentType);
    const acceptedEncoding = req.headers['accept-encoding'] || '';

    res.setHeader('Content-Type', contentType);
    res.setHeader('Vary', 'Accept-Encoding');
    res.setHeader('Cache-Control', filePath.endsWith('index.html')
        ? 'no-cache'
        : 'public, max-age=31536000, immutable');

    const stream = fs.createReadStream(filePath);
    if (compressible && (acceptedEncoding.includes('gzip') || acceptedEncoding.includes('br'))) {
        res.setHeader('Content-Encoding', 'gzip');
        stream.pipe(zlib.createGzip({ level: 4 })).pipe(res);
    } else {
        stream.pipe(res);
    }
}).listen(port, '127.0.0.1', () => {
    console.log(`VAF preview server: http://127.0.0.1:${port}`);
});
