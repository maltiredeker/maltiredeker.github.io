const fs = await import('fs/promises');
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const folderPath = path.join(__dirname, '../public/images/Traditional');

const files = await fs.readdir(folderPath);
const imageFiles = files.filter(file =>
  /\.(jpe?g|png|gif|webp|bmp)$/i.test(file)
);

// Phase 1: Rename to temp names
for (let i = 0; i < imageFiles.length; i++) {
  const oldPath = path.join(folderPath, imageFiles[i]);
  const tempPath = path.join(folderPath, `temp_${i}${path.extname(imageFiles[i])}`);
  await fs.rename(oldPath, tempPath);
}

// Phase 2: Rename to final names
const tempFiles = await fs.readdir(folderPath);
const sortedTempFiles = tempFiles.filter(f => f.startsWith('temp_'));

for (let i = 0; i < sortedTempFiles.length; i++) {
  const ext = path.extname(sortedTempFiles[i]);
  const finalName = `img${i + 1}${ext}`;
  const oldPath = path.join(folderPath, sortedTempFiles[i]);
  const newPath = path.join(folderPath, finalName);
  await fs.rename(oldPath, newPath);
}

console.log('Renaming complete without overwrites.');
