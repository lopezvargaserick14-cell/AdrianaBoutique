import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useEffect } from 'react';

export default function CategoryPage() {
  const { gender } = useParams<{ gender: string }>();
  
  let categoryProducts = [];
  let title = 'Colecciones';

  if (gender === 'novedades') {
    categoryProducts = PRODUCTS.filter(p => p.isNew);
    title = 'Novedades';
  } else if (gender) {
    const term = gender.toLowerCase();
    if (term === 'galeria-de-arte') {
      categoryProducts = PRODUCTS.filter(p => p.category === 'arte');
      title = 'Galería de Arte';
    } else {
      categoryProducts = PRODUCTS.filter(p => p.category === term || p.subcategory === term);
      if (term === 'arte') {
        title = 'Galería de Arte';
      } else if (term === 'oleo') {
        title = 'Óleo';
      } else if (term === 'acrilico') {
        title = 'Acrílico';
      } else {
        title = gender.charAt(0).toUpperCase() + gender.slice(1);
      }
    }
  } else {
    categoryProducts = PRODUCTS;
  }

  // Hacer scroll al inicio cuando cambia la categoría
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gender]);

  return (
    <div className="pt-32 pb-24 md:pt-48 md:pb-40 px-6 md:px-12 max-w-[1400px] mx-auto bg-white min-h-screen">
      <div className="flex flex-col items-center text-center mb-16 md:mb-24">
        <h1 className="font-serif text-4xl md:text-5xl text-black mb-6">{title}</h1>
        <div className="w-px h-12 bg-black/20 mb-8"></div>
        {gender?.toLowerCase() !== 'hombre' && (
          <p className="font-light text-gray-500 text-sm max-w-xl mx-auto">
            Descubra nuestra selección de piezas exclusivas. Pintadas a mano, cada pieza es inspirada en la flora y fauna de nuestro pais
          </p>
        )}
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {categoryProducts.map((product) => (
            <Link key={product.id} to={`/producto/${product.id}`} className="group cursor-pointer block">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-50">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-105"
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center">
                <h3 className="font-sans text-[11px] text-black uppercase tracking-[0.15em] font-light mt-2 group-hover:text-gray-500 transition-colors">
                  {product.name}
                </h3>
                <span className="text-gray-500 font-light text-sm">{product.formattedPrice}</span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          {gender?.toLowerCase() === 'hombre' ? (
            <p className="text-gray-900 text-3xl font-serif">
              Muy pronto...
            </p>
          ) : (
            <p className="text-gray-500 font-light">
              No hay productos en esta categoría por el momento.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
