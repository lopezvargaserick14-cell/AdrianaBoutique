import fs from 'fs';

const filePath = './src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

const normalizeStr = (str) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const regex = /id:\s*'([^']+)'(.*?name:\s*'([^']+)')/gs;
let usedIds = new Set();

content = content.replace(regex, (match, oldId, middle, name) => {
  let newId = normalizeStr(name);
  if (usedIds.has(newId)) {
    newId = newId + '-2';
  }
  usedIds.add(newId);
  return `id: '${newId}'${middle}`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced IDs with normalized slugs');
