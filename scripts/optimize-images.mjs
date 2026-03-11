import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGES_DIR = path.join(__dirname, '../public/images');

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function optimizeImages() {
  console.log('--- Starting Image Optimization ---');
  
  try {
    const allFiles = await getFiles(IMAGES_DIR);
    const imageFiles = allFiles.filter(file => 
      /\.(png|jpg|jpeg)$/i.test(file) && !file.toLowerCase().includes('_optimized')
    );

    console.log(`Found ${imageFiles.length} images to optimize.`);

    for (const file of imageFiles) {
      const relativePath = path.relative(IMAGES_DIR, file);
      const fileName = path.basename(file, path.extname(file));
      const directory = path.dirname(file);
      const targetPath = path.join(directory, `${fileName}.webp`);

      console.log(`Optimizing: ${relativePath} -> ${fileName}.webp`);

      await sharp(file)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(targetPath);
        
      console.log(`✓ Done: ${targetPath}`);
    }

    console.log('--- Optimization Complete ---');
  } catch (error) {
    console.error('Error during optimization:', error);
  }
}

optimizeImages();
