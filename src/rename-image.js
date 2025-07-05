// rename-image.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname workaround for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folderPath = path.join(__dirname, 'images/Digital'); // or your actual path

const files = await fs.promises.readdir(folderPath);

const imageFiles = files.filter(file =>
  /\.(jpe?g|png|gif|webp|bmp)$/i.test(file)
);

for (let i = 0; i < imageFiles.length; i++) {
  const file = imageFiles[i];
  const ext = path.extname(file);
  const newName = `img${i + 1}${ext}`;
  const oldPath = path.join(folderPath, file);
  const newPath = path.join(folderPath, newName);
  await fs.promises.rename(oldPath, newPath);
}

console.log('Renaming complete.');
