const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const srcDir = path.join(projectRoot, 'src');
const componentsDir = path.join(projectRoot, 'components');
const pagesDir = path.join(projectRoot, 'pages');
const imgDir = path.join(projectRoot, 'public/assets/images');

const neighborhoods = ['sants', 'les-corts', 'montjuic', 'eixample', 'sarria', 'gracia'];
const reformTypes = ['reforma-integral', 'reformas-barcelona', 'empresa-reformas'];

function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function processName(name) {
    let clean = removeAccents(name).toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
    const hood = neighborhoods[Math.floor(Math.random() * neighborhoods.length)];
    const type = reformTypes[Math.floor(Math.random() * reformTypes.length)];
    return `${type}-${clean}-${hood}`;
}

const files = fs.readdirSync(imgDir).filter(f => /\.(png|jpe?g|webp)$/i.test(f));

const mapping = {};
for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    if (basename.startsWith('reforma-integral') || basename.startsWith('reformas-barcelona') || basename.startsWith('empresa-reformas')) {
        continue; // Already processed
    }
    const newName = processName(basename) + ext;
    mapping[file] = newName;
}

console.log('Renaming files mapping:');
console.log(JSON.stringify(mapping, null, 2));

// Rename files
for (const [oldName, newName] of Object.entries(mapping)) {
    fs.renameSync(path.join(imgDir, oldName), path.join(imgDir, newName));
}

// Update references recursively
function updateFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    let newContent = content;
    for (const [oldName, newName] of Object.entries(mapping)) {
        const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`(?<=['"\`\\/\\\\])${escaped}(?=['"\`])`, 'g');
        newContent = newContent.replace(regex, newName);
    }
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Updated ${filePath}`);
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const p = path.join(dir, file);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (/\.(tsx|ts|html|jsx|js|css|json)$/i.test(p)) {
            updateFile(p);
        }
    }
}

walk(srcDir);
walk(componentsDir);
walk(pagesDir);
// Also update other possible files
const rootFiles = ['App.tsx', 'index.tsx', 'index.html', 'constants.ts'];
for (const rf of rootFiles) {
    const p = path.join(projectRoot, rf);
    if (fs.existsSync(p)) {
        updateFile(p);
    }
}
