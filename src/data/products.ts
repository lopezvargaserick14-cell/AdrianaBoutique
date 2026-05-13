export interface Product {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  category: 'mujer' | 'hombre' | 'arte';
  images: string[];
  description: string;
  details: string[];
  isNew?: boolean;
  isOneSize?: boolean;
  hasSizes?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'm1',
    name: 'Vestido Guacamayas',
    price: 250000,
    formattedPrice: '$ 250.000',
    category: 'mujer',
    images: [
      '/images/products/vestido-guacamayas-3.jpg',
      '/images/products/vestido-guacamayas-1.jpg',
      '/images/products/vestido-guacamayas-2.jpg'
    ],
    description: 'Vestido en lino olán con guacamayas pintadas a mano.',
    details: ['Técnica: Acriltex sobre Lino Olán', 'Talla: L (Pieza única)', 'Composición: 100% Lino', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: true,
    hasSizes: true
  },
  {
    id: 'm2',
    name: 'Sombrero Panamá "Riviera"',
    price: 185,
    formattedPrice: '€ 185',
    category: 'mujer',
    images: [
      '/images/products/6.jpeg'
    ],
    description: 'Sombrero de palma natural con pañuelo de seda.',
    details: ['Material: Palma natural fina', 'Complemento: Pañuelo de seda 100%', 'Talla: Única (Ajustable)', 'Hecho a mano'],
    isOneSize: true,
    hasSizes: false
  },
  {
    id: 'm3',
    name: 'Blusa Lazo Corta',
    price: 250000,
    formattedPrice: '$ 250.000',
    category: 'mujer',
    images: [
      '/images/products/blusa-lazo-corta-1.jpg',
      '/images/products/blusa-lazo-corta-2.jpg'
    ],
    description: 'Blusa corta en lino olán con colibrí pintado a mano.',
    details: ['Técnica: Acriltex sobre Lino Olán', 'Color: Blanco', 'Talla: Única', 'Pintado a mano por Adriana Barrera'],
    isNew: true,
    isOneSize: true,
    hasSizes: true
  },
  {
    id: 'a3',
    name: 'Pavito Migratorio',
    price: 120000,
    formattedPrice: '$ 120.000',
    category: 'arte',
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
    id: 'm5',
    name: 'Top Ligero "Brisa de Zafiro"',
    price: 210,
    formattedPrice: '€ 210',
    category: 'mujer',
    images: [
      '/images/products/2.jpeg'
    ],
    description: 'Top fluido con ilustración botánica y colibrí.',
    details: ['Tejido: Fluido y liviano', 'Arte: Pintado a mano alzada', 'Detalle: Encaje crochet azul', 'Talla: Única'],
    isNew: false,
    isOneSize: true,
    hasSizes: true
  },
  {
    id: 'm6',
    name: 'Canasto en Iraca',
    price: 60000,
    formattedPrice: '$ 60.000',
    category: 'mujer',
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
    id: 'a1',
    name: 'Obra Original "Luz de Colibrí"',
    price: 450,
    formattedPrice: '€ 450',
    category: 'arte',
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
    id: 'a2',
    name: 'Obra Original "Vuelo en Azul"',
    price: 380,
    formattedPrice: '€ 380',
    category: 'arte',
    images: [
      '/images/products/8.jpeg'
    ],
    description: 'Obra original en acrílico texturizado.',
    details: ['Técnica: Acrílico texturizado', 'Dimensiones: 25cm x 25cm', 'Autenticidad garantizada', 'Artista: Adriana Barrera'],
    isNew: false,
    isOneSize: false,
    hasSizes: false
  }
];


