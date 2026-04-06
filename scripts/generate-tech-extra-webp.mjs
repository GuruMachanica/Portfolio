import sharp from 'sharp';
import {
  siC,
  siCplusplus,
  siDocker,
  siFigma,
  siGit,
  siGithub,
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
  ['docker', siDocker],
  ['figma', siFigma],
  ['git', siGit],
  ['github', siGithub],
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
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 24 24"><path d="${icon.path}" fill="#ffffff"/></svg>`;
  await sharp(Buffer.from(svg))
    .webp({ quality: 96, effort: 6 })
    .toFile(`src/assets/tech-extra/${name}.webp`);
  console.log(`created src/assets/tech-extra/${name}.webp`);
}
