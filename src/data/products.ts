export interface Product {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  category: 'mujer' | 'hombre' | 'arte' | 'hogar';
  subcategory?: 'pantalones' | 'blusas' | 'vestidos' | 'faldas' | 'camisas' | 'canastos' | 'manteles' | 'oleo' | 'acuarela' | 'acrilico';
  images: string[];
  description: string;
  details: string[];
  isNew?: boolean;
  isOneSize?: boolean;
  hasSizes?: boolean;
  availableSizes?: string[];
  isSold?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'vestido-guacamayas',
    name: 'Vestido Guacamayas',
    price: 250000,
    formattedPrice: '$ 250.000',
    category: 'mujer',
    subcategory: 'vestidos',
    images: [
      '/images/products/vestido-guacamayas-3.jpg',
      '/images/products/vestido-guacamayas-1.jpg',
      '/images/products/vestido-guacamayas-2.jpg'
    ],
    description: 'Vestido en lino olán con guacamayas pintadas a mano.',
    details: ['Técnica: Acriltex sobre Lino Olán', 'Talla: L (Pieza única)', 'Composición: 100% Lino', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: true,
    hasSizes: true,
    isSold: true
  },
  {
    id: 'blusa-lazo-corta',
    name: 'Blusa Lazo Corta',
    price: 150000,
    formattedPrice: '$ 150.000',
    category: 'mujer',
    subcategory: 'blusas',
    images: [
      '/images/products/blusa-lazo-corta-1.jpg',
      '/images/products/blusa-lazo-corta-2.jpg'
    ],
    description: 'Blusa corta en lino olán con colibrí pintado a mano.',
    details: ['Técnica: Acriltex sobre Lino Olán', 'Color: Blanco', 'Talla: Única', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: true,
    hasSizes: true,
    isSold: true
  },
  {
    id: 'pavito-migratorio',
    name: 'Pavito Migratorio',
    price: 120000,
    formattedPrice: '$ 120.000',
    category: 'arte',
    subcategory: 'oleo',
    images: [
      '/images/products/pavito-migratorio.jpg'
    ],
    description: 'Obra original en óleo sobre lienzo.',
    details: ['Técnica: Óleo sobre lienzo', 'Dimensiones: 10 x 10 cm', 'Pieza original única', 'Artista: Adriana Barrera'],
    isNew: true,
    isOneSize: false,
    hasSizes: false
  },
  {
    id: 'canasto-en-iraca',
    name: 'Canasto en Iraca',
    price: 60000,
    formattedPrice: '$ 60.000',
    category: 'hogar',
    subcategory: 'canastos',
    images: [
      '/images/products/canasto-iraca-1.jpg',
      '/images/products/canasto-iraca-2.jpg'
    ],
    description: 'Canasto artesanal de Iraca intervenido con flores.',
    details: ['Material: Palma de Iraca', 'Origen: Comunidad Yukuna', 'Intervención: Adriana Barrera', 'Pieza única'],
    isNew: true,
    isOneSize: true,
    hasSizes: false
  },
  {
    id: 'cuadro-de-colibr',
    name: 'Cuadro de Colibrí',
    price: 120000,
    formattedPrice: '$ 120.000',
    category: 'arte',
    subcategory: 'acrilico',
    images: [
      '/images/products/1.jpg'
    ],
    description: 'Pintura acrílica sobre lienzo profesional.',
    details: ['Dimensiones: 30cm x 30cm', 'Técnica: Acrílico sobre lienzo', 'Obra original firmada', 'Listo para colgar'],
    isNew: true,
    isOneSize: false,
    hasSizes: false
  },
  {
    id: 'obra-original-vuelo-en-azul',
    name: 'Obra Original "Vuelo en Azul"',
    price: 380,
    formattedPrice: '€ 380',
    category: 'mujer',
    images: [
      '/images/products/8.jpeg'
    ],
    description: 'Obra original en acrílico texturizado.',
    details: ['Técnica: Acrílico texturizado', 'Dimensiones: 25cm x 25cm', 'Autenticidad garantizada', 'Artista: Adriana Barrera'],
    isNew: false,
    isOneSize: false,
    hasSizes: false,
    isSold: true
  },
  {
    id: 'blus-n-brisa-verde-pistacho',
    name: 'Blusón Brisa Verde Pistacho',
    price: 150000,
    formattedPrice: '$ 150.000',
    category: 'mujer',
    subcategory: 'blusas',
    images: [
      '/images/products/bluson-brisa.jpg'
    ],
    description: 'Blusón Verde en Lino Olán con Manga larga.',
    details: ['Técnica: Acrílico sobre tela', 'Talla: XL', 'Pieza única', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['XL'],
    isSold: true
  },
  {
    id: 'blus-n-rom-ntica',
    name: 'Blusón romántica',
    price: 150000,
    formattedPrice: '$ 150.000',
    category: 'mujer',
    subcategory: 'blusas',
    images: [
      '/images/products/blusa-romantixa.jpg'
    ],
    description: 'Blusón en Lino Olán Color Blanco. Inspirada en los jardines y la danza de los colibríes.',
    details: ['Mezcla de tejido y pintura', 'Diseño único', 'Talla: S', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['S'],
    isSold: true
  },
  {
    id: 't-nica-mariposa-end-mica',
    name: 'Túnica Mariposa Endémica',
    price: 250000,
    formattedPrice: '$ 250.000',
    category: 'mujer',
    subcategory: 'vestidos',
    images: [
      '/images/products/tunica-mariposa-1.jpg',
      '/images/products/tunica-mariposa-2.jpg',
      '/images/products/tunica-mariposa-3.jpg',
      '/images/products/tunica-mariposa-4.jpg'
    ],
    description: 'Túnica corta en Lino Olán Color Blanco. Esta hermosa creación nace en la inspiración de color y movimiento que presenta la mariposa endémica de Santander.',
    details: ['Tejido en hilo técnica croché en cuello, manga y borde', 'Técnica: Pintura en acrílico sobre tela, pincel', 'Talla: L', 'Pieza Única'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    isSold: true
  },
  {
    id: 'encuentro',
    name: 'Encuentro',
    price: 180000,
    formattedPrice: '$ 180.000',
    category: 'mujer',
    subcategory: 'vestidos',
    images: [
      '/images/products/encuentro-1.jpg',
      '/images/products/encuentro-2.jpg'
    ],
    description: 'Túnica corta con tejido en cuello manga y borde inferior. Inspirado en el cortejo de una pareja de colibríes macho y hembra en perfecta sincronía. Con forro en chalis.',
    details: ['Material: Lino Olán', 'Talla: M', 'Forro en chalis'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['M']
  },
  {
    id: 'pantal-n-en-lino-ol-n',
    name: 'Pantalón en lino Olán',
    price: 150000,
    formattedPrice: '$ 150.000',
    category: 'mujer',
    subcategory: 'pantalones',
    images: [
      '/images/products/pantalon-lino-olan.png'
    ],
    description: 'Pantalón de lino olán con diseño exclusivo pintado a mano.',
    details: ['Material: Lino Olán', 'Talla: S', 'Diseño exclusivo', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['S'],
    isSold: true
  },
  {
    id: 'blusa-lazo-corta',
    name: 'Blusa lazo (corta)',
    price: 150000,
    formattedPrice: '$ 150.000',
    category: 'mujer',
    subcategory: 'blusas',
    images: [
      '/images/products/blusa-lazo-corta-nueva.jpeg'
    ],
    description: 'Blusa corta de lino olán con detalle de lazo, pintada a mano.',
    details: ['Material: Lino Olán', 'Talla: Única', 'Detalle de lazo frontal', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: true,
    hasSizes: true,
    isSold: true
  },
  {
    id: 'conjunto-en-lino',
    name: 'Conjunto en Lino',
    price: 280000,
    formattedPrice: '$ 280.000',
    category: 'mujer',
    subcategory: 'vestidos',
    images: [
      '/images/products/conjunto-lino.jpeg'
    ],
    description: 'Elegante conjunto de lino compuesto por dos piezas pintadas a mano.',
    details: ['Material: Lino de alta calidad', 'Talla: S', 'Conjunto de dos piezas', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['S']
  },
  {
    id: 'vestido-guacamayo-azul',
    name: 'Vestido Guacamayo Azul',
    price: 270000,
    formattedPrice: '$ 270.000',
    category: 'mujer',
    subcategory: 'vestidos',
    images: [
      '/images/products/vestido-guacamayo-azul.jpeg'
    ],
    description: 'Inspirado en el esplendor de las guacamayas azules de Colombia y su majestuosidad como una representación viva de la belleza de nuestro ecosistema.',
    details: [
      'Tela: Lino Olán color azul medianoche',
      'Talla: M',
      'Corte: Corte princesa',
      'Técnica: Pintura acrílica de tela con pincel',
      'Pieza única',
      'Pintado a mano por Adriana Barrera'
    ],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['M']
  },
  {
    id: 'vestido-largo-momotus',
    name: 'Vestido Largo Momotus',
    price: 320000,
    formattedPrice: '$ 320.000',
    category: 'mujer',
    subcategory: 'vestidos',
    images: [
      '/images/products/vestido-largo-azul-1.jpeg',
      '/images/products/vestido-largo-azul-2.jpeg'
    ],
    description: 'Pintura inspirada en las aves de Santander como el momotus equatorialis. El color y la vida en los jardines de nuestro entorno.',
    details: [
      'Tela: Lino Olán color azul medianoche',
      'Talla: L',
      'Técnica: Pintura acrílica de tela con pincel',
      'Pieza única',
      'Pintado a mano por Adriana Barrera'
    ],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['L']
  }
];
