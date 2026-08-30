export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.status(404).send('# 404 Not Found\n\nEl recurso que buscas no existe.\n\nPor favor consulta el archivo [llms.txt](/llms.txt) o el [sitemap](/sitemap.xml).');
}
