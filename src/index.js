import fs from 'node:fs';
import path from 'node:path';
import { cwd } from 'node:process';

import getTree from './modules/displayTree.js';
import formatting from './modules/formatting/index.js';
import parsers from './modules/parsers.js';

const readFile = (filePath) => {
  const fullFilePath = path.resolve(cwd(filePath), filePath);
  const data = fs.readFileSync(fullFilePath).toString();
  return parsers(path.extname(filePath), data);
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const dataFile1 = readFile(filePath1);
  const dataFile2 = readFile(filePath2);
  const tree = getTree(dataFile1, dataFile2);
  return formatting(tree, format);
};

export default genDiff;
