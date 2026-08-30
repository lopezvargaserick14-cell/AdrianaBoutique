export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.setHeader('Vary', 'Accept');
  
  if (req.url === '/') {
    res.status(200).send('# Adriana Barrera - Arte aplicado a la vida\n\nBoutique de ropa pintada a mano. Cada prenda es una obra de arte original.\n\nVisita nuestro [sitemap](/sitemap.xml) o [llms.txt](/llms.txt) para más información.');
  } else {
    res.status(404).send('# 404 Not Found\n\nEl recurso que buscas no existe.\n\nPor favor consulta el archivo [llms.txt](/llms.txt) o el [sitemap](/sitemap.xml).');
  }
}
