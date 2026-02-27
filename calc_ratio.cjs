const sizeOf = require('image-size');
const fs = require('fs');
const path = require('path');

const unusedPhotos = [
    'baño.webp', 'baño1_azul.webp', 'baño2.webp', 'baño_blanco.webp', 'baño_m.webp',
    'bañoazul_3.webp', 'cocina_lateral.webp', 'comedor.webp', 'escalera_exteriormarrón.webp',
    'estructura.webp', 'estructura_grande.webp', 'exterior.webp', 'exterior_casa.webp',
    'exterior_casaverde.webp', 'exterior_escaleras.webp', 'grua.webp', 'proceso.webp',
    'tejado (1).webp', 'ventana_comedor.webp'
];

const basePath = path.join(__dirname, 'public', 'assets', 'images');
const results = [];

unusedPhotos.forEach(file => {
    try {
        const filePath = path.join(basePath, file);
        const dimensions = sizeOf(filePath);
        results.push({
            file,
            width: dimensions.width,
            height: dimensions.height,
            ratio: dimensions.height / dimensions.width
        });
    } catch (err) {
        console.error(`Error reading ${file}:`, err.message);
    }
});

console.log(JSON.stringify(results, null, 2));
