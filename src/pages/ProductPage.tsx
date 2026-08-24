import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/products';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import SizeGuideModal from '../components/ui/SizeGuideModal';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { getPrices } from '../utils/currency';
import ProductCard from '../components/ui/ProductCard';
import ProductQuickView from '../components/ui/ProductQuickView';
import { ArrowRight } from 'lucide-react';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Scroll to top on load and set default size
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      if (product.isOneSize) {
        setSelectedSize('Única');
      } else if (!product.hasSizes) {
        setSelectedSize('N/A');
      } else {
        setSelectedSize(null);
      }
      setSelectedImage(0);
    }
  }, [id, product]);

  // Embudo de ventas / Productos relacionados
  const relatedProducts = (() => {
    if (!product) return [];
    
    // Prioridad 1: Misma subcategoría (ej. otros vestidos)
    const sameSubcategory = PRODUCTS.filter(
      p => p.id !== product.id && p.subcategory && p.subcategory === product.subcategory
    );
    
    // Prioridad 2: Misma categoría principal (ej. mujer)
    const sameCategory = PRODUCTS.filter(
      p => p.id !== product.id && p.category === product.category && (!product.subcategory || p.subcategory !== product.subcategory)
    );
    
    // Prioridad 3: Otras piezas del catálogo
    const otherProducts = PRODUCTS.filter(
      p => p.id !== product.id && p.category !== product.category
    );
    
    // Combinar priorizando las piezas disponibles para compra
    const combined = [...sameSubcategory, ...sameCategory, ...otherProducts];
    const unsold = combined.filter(p => !p.isSold);
    const sold = combined.filter(p => p.isSold);
    
    return [...unsold, ...sold].slice(0, 4);
  })();

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="font-serif text-3xl mb-4">Producto no encontrado</h1>
        <Link to="/" className="border-b border-black pb-1 uppercase tracking-[0.2em] text-[10px]">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40 px-0 md:px-12 max-w-[1400px] mx-auto bg-white min-h-screen">
      {/* Breadcrumb mobile */}
      <div className="md:hidden px-6 py-4 flex gap-2 text-[10px] uppercase tracking-widest text-gray-400">
        <Link to="/">Inicio</Link> <span>/</span> <Link to={`/categoria/${product.category}`}>{product.category}</Link> <span>/</span> <span className="text-black">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
        {/* Gallery Section */}
        <div className="lg:w-2/3 flex flex-col-reverse lg:flex-row gap-4 px-6 lg:px-0">
          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible py-2 lg:py-0 w-full lg:w-24 flex-shrink-0 hide-scrollbar">
            {product.images.map((img, idx) => (
              <button 
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-20 h-28 lg:w-full lg:h-32 flex-shrink-0 overflow-hidden ${selectedImage === idx ? 'ring-1 ring-black' : 'opacity-60 hover:opacity-100'} transition-all`}
              >
                <img src={img} alt={`${product.name} - view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 overflow-hidden bg-gray-50 h-[60vh] lg:h-[85vh]">
            <motion.img 
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={product.images[selectedImage]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:w-1/3 px-6 lg:px-0 py-12 lg:py-8 flex flex-col">
          {/* Breadcrumb Desktop */}
          <div className="hidden lg:flex gap-2 text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-16">
            <Link to="/">Inicio</Link> <span>/</span> <Link to={`/categoria/${product.category}`}>{product.category}</Link>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-black mb-8 leading-[1.1] tracking-tight"
          >
            {product.name}
          </motion.h1>
          
          <div className="flex flex-col gap-1 mb-12">
            <div className="flex items-center gap-4">
              <span className={`text-2xl md:text-3xl font-light ${product.isSold ? 'text-red-600 font-bold tracking-widest uppercase' : 'text-gray-900'}`}>
                {product.isSold ? 'Vendida' : getPrices(product.price, product.formattedPrice).formattedCop}
              </span>
              {!product.isSold && <div className="h-px flex-1 bg-gray-100"></div>}
            </div>
            {!product.isSold && (
              <span className="text-sm text-gray-400 font-light ml-1">
                (Aprox. {getPrices(product.price, product.formattedPrice).formattedEur})
              </span>
            )}
          </div>

          <div className="space-y-8 mb-12">
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              {product.description}
            </p>
            <div className="flex flex-col gap-3">
              {product.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="w-1 h-1 bg-black rounded-full"></span>
                  {detail}
                </div>
              ))}
            </div>
          </div>

          {/* Size Selector */}
          {!product.isSold && (
            <div className="mb-16 relative">
              <div className="flex justify-between items-center mb-6">
                <span className="uppercase tracking-[0.2em] text-[11px] font-bold text-black">
                  {product.hasSizes ? 'Seleccionar Talla' : 'Talla'}
                </span>
                {product.hasSizes && !product.isOneSize && (
                  <button 
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="uppercase tracking-[0.2em] text-[10px] text-gray-500 underline decoration-gray-300 underline-offset-8 hover:text-black transition-colors"
                  >
                    Ver Guía de Tallas
                  </button>
                )}
              </div>

              <div className="grid grid-cols-4 gap-4 relative">
                {product.hasSizes ? (
                  product.isOneSize ? (
                    <button 
                      translate="no"
                      onClick={() => setSelectedSize('Única')}
                      className="col-span-4 border py-4 text-sm tracking-widest border-black bg-black text-white transition-all duration-500"
                    >
                      Talla Única
                    </button>
                  ) : (
                    (product.availableSizes || sizes).map(size => (
                      <button 
                        key={size}
                        translate="no"
                        onClick={() => setSelectedSize(size)}
                        className={`border py-4 text-sm tracking-widest transition-all duration-500 ${selectedSize === size ? 'border-black bg-black text-white' : 'border-gray-200 text-gray-400 hover:border-black hover:text-black'}`}
                      >
                        {size}
                      </button>
                    ))
                  )
                ) : (
                  <>
                    {/* Crossed out effect for Arte/No Sizes */}
                    <div className="col-span-4 border border-gray-100 py-4 text-sm tracking-widest text-gray-300 relative overflow-hidden flex items-center justify-center">
                      No aplica
                      <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500/40 -rotate-6"></div>
                    </div>
                  </>
                )}
              </div>
              
              {!product.hasSizes && (
                 <div className="mt-4 text-[10px] text-red-500/60 uppercase tracking-widest font-medium">
                   * Esta pieza no requiere selección de talla
                 </div>
              )}
            </div>
          )}

          {/* Add to Cart Actions */}
          <div className="space-y-4 mb-16">
            {product.isSold ? (
              <div className="w-full bg-gray-100 text-gray-400 py-6 uppercase tracking-[0.3em] text-[11px] font-bold text-center border border-gray-200">
                Pieza Vendida
              </div>
            ) : (
              <>
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!selectedSize) {
                      alert("Por favor, selecciona una talla antes de añadir a la bolsa.");
                      return;
                    }
                    console.log("Acción: Añadir al carrito");
                    addToCart(product, selectedSize);
                  }}
                  className="w-full bg-black text-white hover:bg-gray-800 py-6 uppercase tracking-[0.3em] text-[11px] font-bold transition-all duration-500 shadow-xl active:scale-[0.98] cursor-pointer"
                >
                  Añadir a la Bolsa
                </button>
                
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!selectedSize) {
                      alert("Por favor, selecciona una talla antes de comprar.");
                      return;
                    }
                    console.log("Acción: Comprar ahora");
                    addToCart(product, selectedSize, true);
                    setTimeout(() => navigate('/checkout'), 100);
                  }}
                  className="w-full border-2 border-black text-black hover:bg-black hover:text-white py-6 uppercase tracking-[0.3em] text-[11px] font-bold transition-all duration-500 active:scale-[0.98] cursor-pointer"
                >
                  Comprar Ahora
                </button>
              </>
            )}
          </div>

          {/* Details Accordeon (Simplified) */}
          <div className="border-t border-gray-100 pt-10">
            <h3 className="uppercase tracking-[0.2em] text-[11px] font-bold text-black mb-8">Composición y Cuidados</h3>
            <ul className="space-y-4">
              {product.details.map((detail, idx) => (
                <li key={idx} className="text-sm text-gray-500 font-light flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full mt-1.5 flex-shrink-0"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sales Funnel / Related Products Grid */}
      {relatedProducts.length > 0 && (
        <section className="mt-28 md:mt-40 pt-16 md:pt-24 border-t border-gray-100 px-6 lg:px-0">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-3 block">
                Descubre Más
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-black">
                También te podría encantar
              </h2>
            </div>
            <Link
              to={`/categoria/${product.category}`}
              className="group flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-black border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all"
            >
              Ver colección completa <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {relatedProducts.map((relProduct) => (
              <ProductCard
                key={relProduct.id}
                product={relProduct}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />

      {/* Quick View Modal */}
      <ProductQuickView 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
}

