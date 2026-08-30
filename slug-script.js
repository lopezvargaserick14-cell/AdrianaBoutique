import fs from 'fs';

const filePath = './src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

const regex = /id:\s*'([^']+)'(.*?name:\s*'([^']+)')/gs;
content = content.replace(regex, (match, oldId, middle, name) => {
  const newId = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `id: '${newId}'${middle}`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Replaced IDs with slugs');
