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
    id: 'canasto-doble-tejido-iraca',
    name: 'Canasto en Doble Tejido en Iraca',
    price: 90000,
    formattedPrice: '$ 90.000',
    category: 'hogar',
    subcategory: 'canastos',
    images: ['/images/products/canasto-doble-tejido.jpeg'],
    description: 'Canasto en doble tejido en Iraca con zócalo en croché color celeste y borlas de colores.',
    details: ['Dimensiones: 23 cm de alto x 26 cm de ancho', 'Material: Iraca y croché', 'Hecho a mano'],
    isNew: true,
    isOneSize: true,
    hasSizes: false
  },
  {
    id: 'oleo-setophaga-ruticilla',
    name: 'Óleo sobre lienzo - Setophaga ruticilla',
    price: 100000,
    formattedPrice: '$ 100.000',
    category: 'arte',
    subcategory: 'oleo',
    images: ['/images/products/oleo-setophaga-ruticilla.jpeg'],
    description: 'Pintura al óleo del ave Setophaga ruticilla. Una especie migratoria boreal que viaja hacia el sur en invierno.',
    details: ['Técnica: Óleo sobre lienzo', 'Dimensiones: 20x20 cm', 'Obra original'],
    isNew: true,
    isOneSize: true,
    hasSizes: false
  },
  {
    id: 'acrilico-piaya-cayana',
    name: 'Acrílico sobre lienzo - Piaya Cayana',
    price: 250000,
    formattedPrice: '$ 250.000',
    category: 'arte',
    subcategory: 'acrilico',
    images: ['/images/products/acrilico-piaya-cayana.jpeg'],
    description: 'El cuco ardilla (Piaya cayana), conocido localmente como soledad, es un ave estilizada que habita en bordes de bosques.',
    details: ['Técnica: Acrílico sobre lienzo', 'Dimensiones: 30 x 40 cm', 'Con marco en pino', 'Obra original'],
    isNew: true,
    isOneSize: true,
    hasSizes: false
  },
  {
    id: 'canasto-tejido-sencillo',
    name: 'Canasto Tejido Sencillo en Iraca',
    price: 65000,
    formattedPrice: '$ 65.000',
    category: 'hogar',
    subcategory: 'canastos',
    images: ['/images/products/canasto-tejido-sencillo.jpeg'],
    description: 'Canasto tejido sencillo en Iraca con tejido de colores tierra en fique.',
    details: ['Dimensiones: 27 cm de alto x 25 cm de ancho', 'Material: Iraca y fique', 'Hecho a mano'],
    isNew: true,
    isOneSize: true,
    hasSizes: false
  },
  {
    id: 'canasto-de-mano-iraca',
    name: 'Canasto de Mano en Iraca',
    price: 60000,
    formattedPrice: '$ 60.000',
    category: 'hogar',
    subcategory: 'canastos',
    images: ['/images/products/canasto-de-mano.jpeg'],
    description: 'Hermosa pieza de arte elaborada en tejido en Iraca.',
    details: ['Material: Iraca', 'Hecho a mano'],
    isNew: true,
    isOneSize: true,
    hasSizes: false
  },
  {
    id: 'chaqueta-denim-rigido',
    name: 'Chaqueta en Denim Rígido',
    price: 160000,
    formattedPrice: '$ 160.000',
    category: 'mujer',
    images: [
      '/images/products/chaqueta-denim-1.jpeg',
      '/images/products/chaqueta-denim-2.jpeg',
      '/images/products/chaqueta-denim-3.jpeg',
      '/images/products/chaqueta-denim-4.jpeg',
      '/images/products/chaqueta-denim-5.jpeg'
    ],
    description: 'Chaqueta en denim rígido intervenida a mano.',
    details: ['Material: Denim rígido', 'Técnica: Pintura acrílico de tela con pincel', 'Talla: M', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['M']
  },
  {
    id: 'vestido-reina-naturaleza',
    name: 'Vestido Reina de la Naturaleza',
    price: 360000,
    formattedPrice: '$ 360.000',
    category: 'mujer',
    subcategory: 'vestidos',
    images: [
      '/images/products/vestido-reina-naturaleza-1.jpeg',
      '/images/products/vestido-reina-naturaleza-2.jpeg',
      '/images/products/vestido-reina-naturaleza-3.jpeg'
    ],
    description: 'Vestido en Lino Olán con diseño "Reina de la naturaleza".',
    details: ['Material: Lino Olán con forro interno', 'Escote: Cuadrado', 'Corte: Princesa', 'Talla: L', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: false,
    hasSizes: true,
    availableSizes: ['L']
  },
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
    id: 'cuadro-de-colibri',
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
    id: 'bluson-brisa-verde-pistacho',
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
    id: 'bluson-romantica',
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
    id: 'tunica-mariposa-endemica',
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
    id: 'pantalon-en-lino-olan',
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
    id: 'blusa-lazo-corta-2',
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
