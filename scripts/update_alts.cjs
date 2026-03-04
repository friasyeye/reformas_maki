const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const dirs = [
    path.join(projectRoot, 'src'),
    path.join(projectRoot, 'components'),
    path.join(projectRoot, 'pages')
];

const neighborhoods = ['Sants', 'Les Corts', 'Montjuïc', 'Eixample', 'Sarrià', 'Gràcia'];
const types = [
    'Reforma integral de piso',
    'Reforma de cocina rústica',
    'Reforma de baño moderno',
    'Rehabilitación de fachada',
    'Construcción de obra nueva',
    'Reforma de local comercial',
    'Diseño de interiores premium'
];

function generateAlt() {
    const t = types[Math.floor(Math.random() * types.length)];
    const n = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    return `${t} en el barrio de ${n}, Barcelona.`;
}

// Regex to find alt="something" and alt={'something'}
const regex = /alt=(["'])(.*?)\1|alt=\{`([^`]+)`\}/g;

function processContent(content) {
    let changed = false;
    const newContent = content.replace(regex, (match, quote, text1, text2) => {
        const text = text1 || text2;
        // Skip empty alts or simple ones like "Logo" or very short words.
        if (!text || text.length < 5 || text.toLowerCase().includes('logo') || text.toLowerCase().includes('icon')) {
            return match;
        }
        changed = true;
        if (text1) {
            return `alt=${quote}${generateAlt()}${quote}`;
        } else {
            return `alt={\`${generateAlt()}\`}`;
        }
    });

    // Also look for specific arrays like imageAlts: [...] in Lightbox instances or literal arrays
    // For specific project we might just leave the regex replacement do the bulk
    return { newContent, changed };
}

function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const { newContent, changed } = processContent(content);
    if (changed) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated alts in ${filePath}`);
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const p = path.join(dir, file);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (/\.(tsx|ts|jsx|js)$/i.test(p)) {
            processFile(p);
        }
    }
}

for (const dir of dirs) {
    walk(dir);
}
