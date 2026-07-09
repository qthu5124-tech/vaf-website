const fs = require('fs');
const path = require('path');

function getImageSize(file) {
    const buffer = fs.readFileSync(file);
    const ext = path.extname(file).toLowerCase();

    if (ext === '.png') {
        return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
    }

    if (ext === '.jpg' || ext === '.jpeg') {
        let offset = 2;
        while (offset < buffer.length) {
            if (buffer[offset] !== 0xff) break;
            const marker = buffer[offset + 1];
            const length = buffer.readUInt16BE(offset + 2);
            if (marker >= 0xc0 && marker <= 0xc3) {
                return {
                    height: buffer.readUInt16BE(offset + 5),
                    width: buffer.readUInt16BE(offset + 7)
                };
            }
            offset += 2 + length;
        }
    }

    if (ext === '.webp') {
        if (buffer.toString('ascii', 0, 4) !== 'RIFF' || buffer.toString('ascii', 8, 12) !== 'WEBP') {
            return null;
        }

        const type = buffer.toString('ascii', 12, 16);
        if (type === 'VP8X') {
            return {
                width: 1 + buffer.readUIntLE(24, 3),
                height: 1 + buffer.readUIntLE(27, 3)
            };
        }

        if (type === 'VP8 ') {
            const offset = 20;
            return {
                width: buffer.readUInt16LE(offset + 6) & 0x3fff,
                height: buffer.readUInt16LE(offset + 8) & 0x3fff
            };
        }

        if (type === 'VP8L') {
            const bits = buffer.readUInt32LE(21);
            return {
                width: (bits & 0x3fff) + 1,
                height: ((bits >> 14) & 0x3fff) + 1
            };
        }
    }

    return null;
}

const htmlFiles = [
    'index.html',
    ...fs.readdirSync('partials')
        .filter(file => file.endsWith('.html'))
        .map(file => path.join('partials', file))
];

for (const htmlFile of htmlFiles) {
    let html = fs.readFileSync(htmlFile, 'utf8');

    html = html.replace(/<img\b([^>]*?)>/g, (tag) => {
        if (/\bwidth=/.test(tag) && /\bheight=/.test(tag)) return tag;

        const match = tag.match(/\s(?:src|data-src)=["']([^"']+)["']/);
        if (!match) return tag;

        let src = match[1];
        if (src.startsWith('data:') || /^https?:/.test(src) || src.startsWith('//') || src.includes('${')) {
            return tag;
        }

        src = src.replace(/^\//, '').split('?')[0];
        const imagePath = path.join(process.cwd(), src);
        if (!fs.existsSync(imagePath)) return tag;

        const size = getImageSize(imagePath);
        if (!size) return tag;

        return tag.replace('<img', `<img width="${size.width}" height="${size.height}"`);
    });

    fs.writeFileSync(htmlFile, html, 'utf8');
}
