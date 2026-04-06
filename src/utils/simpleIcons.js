import {
  siC,
  siCplusplus,
  siCanvas,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siMongodb,
  siMysql,
  siPython,
  siPytorch,
  siTensorflow,
  siVscodium,
} from 'simple-icons';

const toWhiteSvgDataUri = (icon) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF"><path d="${icon.path}"/></svg>`
  )}`;

export const skillIconUris = {
  c: toWhiteSvgDataUri(siC),
  cplusplus: toWhiteSvgDataUri(siCplusplus),
  python: toWhiteSvgDataUri(siPython),
  tensorflow: toWhiteSvgDataUri(siTensorflow),
  pytorch: toWhiteSvgDataUri(siPytorch),
  mysql: toWhiteSvgDataUri(siMysql),
  mongodb: toWhiteSvgDataUri(siMongodb),
  canva: toWhiteSvgDataUri(siCanvas),
  github: toWhiteSvgDataUri(siGithub),
  git: toWhiteSvgDataUri(siGit),
  vscode: toWhiteSvgDataUri(siVscodium),
  figma: toWhiteSvgDataUri(siFigma),
  docker: toWhiteSvgDataUri(siDocker),
};
