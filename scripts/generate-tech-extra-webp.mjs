import sharp from 'sharp';
import {
  siC,
  siCplusplus,
  siPython,
  siCanvas,
  siMongodb,
  siMysql,
  siTensorflow,
  siPytorch,
  siVscodium,
} from 'simple-icons';
import { mkdir } from 'node:fs/promises';

const icons = [
  ['c', siC],
  ['cplusplus', siCplusplus],
  ['python', siPython],
  ['canva', siCanvas],
  ['mongodb', siMongodb],
  ['mysql', siMysql],
  ['tensorflow', siTensorflow],
  ['pytorch', siPytorch],
  ['vscode', siVscodium],
];

await mkdir('src/assets/tech-extra', { recursive: true });

for (const [name, icon] of icons) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" fill="#111111"/><path d="${icon.path}" fill="#ffffff"/></svg>`;
  await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(`src/assets/tech-extra/${name}.webp`);
  console.log(`created src/assets/tech-extra/${name}.webp`);
}
