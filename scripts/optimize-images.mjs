import { readdir, stat, writeFile, unlink } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const maxWidth = 1600;
const quality = 82;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.jpe?g$/i.test(entry.name)) files.push(full);
  }
  return files;
}

const files = await walk(publicDir);
let saved = 0;

for (const file of files) {
  const before = (await stat(file)).size;
  const image = sharp(file).rotate();
  const meta = await image.metadata();
  const pipeline = image.jpeg({ quality, mozjpeg: true, progressive: true });

  if (meta.width && meta.width > maxWidth) {
    pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const buffer = await pipeline.toBuffer();
  if (buffer.length < before) {
    const tmp = `${file}.tmp`;
    await writeFile(tmp, buffer);
    await unlink(file);
    await writeFile(file, buffer);
    await unlink(tmp).catch(() => {});
    saved += before - buffer.length;
    console.log(`${path.relative(publicDir, file)}: ${(before / 1024).toFixed(1)}KB → ${(buffer.length / 1024).toFixed(1)}KB`);
  }
}

console.log(`Saved ${(saved / 1024).toFixed(1)}KB total`);
