const { resolve, join } = require('path');

export const cwd = process.cwd();

export const configPath = resolve(join(cwd, 'config'));

export const imagesPath = resolve(join(cwd, 'images'));

export const nodeModulesDir = resolve(join(cwd, 'node_modules'));

export const pagesPath = resolve(join(cwd, 'pages'));

export const stylesPath = resolve(join(cwd, 'styles'));

export const utilsPath = resolve(join(cwd, 'utils'));
