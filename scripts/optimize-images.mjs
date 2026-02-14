import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, "..", "public", "images");

async function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = await fs.readdir(dirPath);

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      await getAllFiles(filePath, arrayOfFiles);
    } else {
      if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        arrayOfFiles.push(filePath);
      }
    }
  }

  return arrayOfFiles;
}

async function optimize() {
  console.log("Starting image optimization...");
  const files = await getAllFiles(IMAGES_DIR);
  console.log(`Found ${files.length} images to optimize.`);

  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const dirname = path.dirname(file);
    const outputPath = path.join(dirname, `${basename}_optimized.webp`);

    try {
      console.log(`Optimizing: ${file}`);
      await sharp(file)
        .resize(1200, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);

      // Optionally delete the original if it's not the optimized one already
      if (!file.endsWith("_optimized.webp")) {
        await fs.unlink(file);
        console.log(`Replaced original with: ${outputPath}`);
      }
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err);
    }
  }
  console.log("Optimization complete!");
}

optimize();
