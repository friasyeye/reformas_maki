import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'src/assets/raw';
const outputDir = 'public/assets/images';

// Configuración de tamaños y calidad
const SIZES = [
    { name: 'desktop', width: 1200 },
    { name: 'mobile', width: 600 }
];
const QUALITY = 75;

async function optimizeImages() {
    try {
        // Asegurar que el directorio de entrada existe para no romper el script
        if (!fs.existsSync(inputDir)) {
            console.log(`Directorio de entrada no encontrado: ${inputDir}. Creándolo...`);
            fs.mkdirSync(inputDir, { recursive: true });
            return;
        }

        // Asegurar que el directorio de salida existe
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        const files = fs.readdirSync(inputDir);
        const imageFiles = files.filter(file =>
            /\.(jpg|jpeg|png|webp|avif)$/i.test(file)
        );

        if (imageFiles.length === 0) {
            console.log('No se encontraron imágenes para optimizar.');
            return;
        }

        console.log(`Optimizando ${imageFiles.length} imágenes...`);

        const promises = imageFiles.map(async (file) => {
            const inputPath = path.join(inputDir, file);
            const filename = path.parse(file).name;

            return Promise.all(SIZES.map(async (size) => {
                const outputFilename = `${filename}-${size.name}.webp`;
                const outputPath = path.join(outputDir, outputFilename);

                await sharp(inputPath)
                    .resize({ width: size.width, withoutEnlargement: true })
                    .webp({ quality: QUALITY })
                    .toFile(outputPath);

                console.log(`✅ ${outputFilename} generado.`);
            }));
        });

        await Promise.all(promises);
        console.log('🚀 Optimización de imágenes completada con éxito.');
    } catch (error) {
        console.error('❌ Error optimizando imágenes:', error);
        // No salimos con error para no bloquear el build si algo falla en una imagen
    }
}

optimizeImages();
