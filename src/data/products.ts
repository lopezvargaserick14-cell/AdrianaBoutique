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
    description: 'Una obra de arte que se lleva puesta. Sobre un fondo negro profundo, dos guacamayas hiperrealistas pintadas a mano con Acriltex sobre lino olán despliegan su plumaje con una vitalidad que roba el aliento. La flora tropical que las envuelve fluye hasta el bajo del vestido, convirtiendo cada movimiento en una pintura viva. Diseñado para la mujer que no necesita hablar para ser escuchada.',
    details: ['Técnica: Acriltex sobre Lino Olán', 'Talla: L', 'Pieza única — irrepetible', 'Pintado a mano por Adriana Barrera'],
    isNew: true
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
    description: 'El accesorio definitivo para la sofisticación al aire libre. Un exquisito sombrero trenzado a mano complementado con un delicado pañuelo de seda verde de estampado paisley. Perfecto para protegerte del sol con un nivel de elegancia propio de la brisa mediterránea.',
    details: ['Palma natural fina trenzada a mano', 'Pañuelo de seda 100% intercambiable', 'Estructura rígida de ala media', 'Cinta de ajuste interior']
  },
  {
    id: 'm3',
    name: 'Mochila Wayuu "Amanecer Andino"',
    price: 320,
    formattedPrice: '€ 320',
    category: 'mujer',
    images: [
      '/images/products/4.jpeg'
    ],
    description: 'Intensa, audaz y profundamente cultural. Sus colores que imitan el fuego y el sol del atardecer (rojo profundo, morado, amarillo y naranja) crean un efecto hipnótico. Un bolso que no solo complementa tu estilo, sino que lo define por completo.',
    details: ['Tejido de un solo hilo (máxima calidad)', 'Patrón radial expansivo', 'Borlas premium multicolor', 'Cordón trenzado a mano'],
    isNew: true
  },
  {
    id: 'm4',
    name: 'Top Halter "Jardín de Noche"',
    price: 245,
    formattedPrice: '€ 245',
    category: 'mujer',
    images: [
      '/images/products/3.jpeg'
    ],
    description: 'Puro romance y misterio. Este crop top negro estilo halter abraza tu figura mientras exhibe en el bajo una espectacular obra de arte pintada a mano: delicados colibríes en vuelo sobre ramas doradas. Una prenda joya para noches inolvidables.',
    details: ['Lino de alta gama transpirable', 'Pintura textil artística sellada y duradera', 'Ribete ocre tejido inferior', 'Ajuste de lazos en el cuello'],
    isNew: true
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
    description: 'Frescura absoluta con un toque etéreo. Este top blanco deslumbra por su caída suave y la preciosa ilustración de un colibrí esmeralda que parece descansar en el dobladillo, rematado con un exquisito ribete de croché azul pastel.',
    details: ['Tejido fluido y liviano', 'Arte botánico y colibrí pintado a mano alzada', 'Detalle de encaje crochet artesanal', 'Diseño de escote fruncido'],
    isNew: false
  },
  {
    id: 'm6',
    name: 'Vestido "Selva Esmeralda"',
    price: 590,
    formattedPrice: '€ 590',
    category: 'mujer',
    images: [
      '/images/products/7.jpeg'
    ],
    description: 'La joya de la corona. Un elegante y favorecedor vestido negro adornado con dos imponentes guacamayas hiperrealistas pintadas a mano, rodeadas de una exótica corona floral que marca y estiliza la cintura. Serás el centro de atención estés donde estés.',
    details: ['Algodón orgánico de caída perfecta', 'Obra de arte simétrica pintada a mano', 'Mangas estructuradas', 'Corte en A favorecedor'],
    isNew: true
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
    description: 'Una pintura acrílica sobre lienzo que captura la esencia vibrante de la naturaleza americana. El juego cautivador de los tonos azules y verdes del colibrí sobre un sereno fondo esmeralda llenará de vida y calma cualquier espacio de tu hogar.',
    details: ['Dimensiones: 30cm x 30cm', 'Acrílico profesional sobre lienzo tensado', 'Obra original firmada por Adriana Barrera', 'Listo para ser expuesto'],
    isNew: true
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
    description: 'Transmite paz y delicadeza. Esta obra original retrata una pequeña ave de impactante plumaje cobalto y ámbar, posada elegantemente sobre un cielo despejado. La textura del óleo y la precisión del pincel hacen de este cuadro un tesoro visual.',
    details: ['Acrílico sobre lienzo texturizado', 'Dimensiones: 25cm x 25cm', 'Autenticidad garantizada', 'Bordes pintados continuos'],
    isNew: false
  }
];


