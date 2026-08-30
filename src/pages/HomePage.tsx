import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PRODUCTS, Product } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import ProductQuickView from '../components/ui/ProductQuickView';
import { ArrowRight, Instagram } from 'lucide-react';
import SEOTags from '../components/seo/SEOTags';
import FAQSection from '../components/ui/FAQSection';

export default function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  
  // Show only the latest 2 products in Novedades de Temporada
  const newProducts = PRODUCTS.filter(p => p.isNew).slice(-2).reverse();
  const vestidosProducts = PRODUCTS.filter(p => p.subcategory === 'vestidos').slice(0, 4);
  const hogarProducts = PRODUCTS.filter(p => p.category === 'hogar').slice(0, 4);
  const artProducts = PRODUCTS.filter(p => p.category === 'arte').slice(0, 4);
  
  const highlightedProducts = PRODUCTS.filter(p => !p.isNew);

  return (
    <main className="bg-white overflow-hidden">
      <SEOTags 
        title="Inicio" 
        description="Explora la colección exclusiva de Adriana Barrera. Ropa y accesorios de moda pintados a mano. Cada prenda es una obra de arte original que combina moda y pintura."
      />
      {/* Hero Section - High End Aesthetic */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0 z-0 p-4 md:p-8 pt-[90px] md:pt-[110px]">
          <div className="w-full h-full overflow-hidden relative group">
             <img 
               src="/images/products/vestido-guacamayo-azul.jpeg"
               alt="Vestido Guacamayo Azul - Portada Adriana Barrera"
               className="w-full h-full object-cover object-[center_25%] absolute inset-0 filter brightness-[0.88] contrast-[1.08] saturate-[1.1]"
             />

             <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20" />
          </div>
        </div>

        
        <div className="relative z-10 text-center px-4 flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white/80 uppercase tracking-[0.4em] text-[10px] md:text-[12px] mb-6 block font-light">
              Nueva Colección 2026
            </span>
            <h1 className="text-white font-serif text-6xl md:text-8xl lg:text-9xl mb-12 tracking-tight leading-none">
              Arte aplicado <br/> a la <span className="italic">vida</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full">
              <Link
                to="/categoria/mujer"
                className="bg-white text-black px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all duration-700 min-w-[220px]"
              >
                Colección Mujer
              </Link>
              <Link
                to="/categoria/hogar"
                className="bg-white text-black px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all duration-700 min-w-[220px]"
              >
                Hogar
              </Link>
              <Link
                to="/categoria/arte"
                className="backdrop-blur-md bg-white/10 text-white border border-white/30 px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all duration-700 min-w-[220px]"
              >
                Galería de Arte
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
           <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent opacity-50"></div>
        </div>
      </section>

      {/* Intro Editorial */}
      <section className="py-32 md:py-48 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-black mb-12 leading-[1.2]">
            Entre la fauna y la flora colombiana
          </h2>
          <div className="w-12 h-[1px] bg-black mx-auto mb-12"></div>
          <p className="text-gray-500 font-light leading-loose text-base md:text-lg max-w-2xl mx-auto mb-10">
            Adriana Barrera es una artista y diseñadora que ha creado del arte un estilo de vida, haciendo de cada pieza elaborada una obra divina con la que puedes conectar en diferentes escenarios de tu vida. Desde nuestros exclusivos <Link to="/categoria/vestidos" className="text-black border-b border-black hover:text-gray-400 hover:border-gray-400 transition-colors">vestidos pintados</Link> hasta nuestras piezas para <Link to="/categoria/hogar" className="text-black border-b border-black hover:text-gray-400 hover:border-gray-400 transition-colors">el hogar</Link>, la naturaleza es siempre nuestra fuente de inspiración.
          </p>
          <Link
            to="/categoria/mujer"
            className="inline-block bg-black text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-gray-800 transition-all shadow-lg"
          >
            Explora Nuestras Colecciones
          </Link>
        </motion.div>
      </section>

      {/* Main Product Grid - Secciones Categorizadas */}
      <section className="pb-32 md:pb-48 px-6 md:px-12 max-w-[1600px] mx-auto space-y-40">
        
        {/* Novedades de Temporada */}
        {newProducts.length > 0 && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-4 block">Selección Curada</span>
                <h2 className="font-serif text-4xl md:text-5xl text-black">Novedades de Temporada</h2>
              </div>
              <Link to="/categoria/novedades" className="group flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-black border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all">
                Ver todo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-x-10 gap-y-24"
            >
              {newProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={(p) => setQuickViewProduct(p)} 
                />
              ))}
            </motion.div>
          </div>
        )}

        {/* Zona Vestidos */}
        {vestidosProducts.length > 0 && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-4 block">Prendas de Vestir</span>
                <h2 className="font-serif text-4xl md:text-5xl text-black">Vestidos</h2>
              </div>
              <Link to="/categoria/vestidos" className="group flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-black border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all">
                Ver todo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24"
            >
              {vestidosProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={(p) => setQuickViewProduct(p)} 
                />
              ))}
            </motion.div>
          </div>
        )}

        {/* Zona Hogar */}
        {hogarProducts.length > 0 && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-4 block">Arte en tu Espacio</span>
                <h2 className="font-serif text-4xl md:text-5xl text-black">Hogar</h2>
              </div>
              <Link to="/categoria/hogar" className="group flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-black border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all">
                Ver todo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24"
            >
              {hogarProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={(p) => setQuickViewProduct(p)} 
                />
              ))}
            </motion.div>
          </div>
        )}

        {/* Zona Galería de Arte */}
        {artProducts.length > 0 && (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-4 block">Obras de Arte</span>
                <h2 className="font-serif text-4xl md:text-5xl text-black">Galería de Arte</h2>
              </div>
              <Link to="/categoria/galeria-de-arte" className="group flex items-center gap-3 uppercase tracking-[0.2em] text-[10px] text-black border-b border-black pb-2 hover:text-gray-500 hover:border-gray-500 transition-all">
                Ver todo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-24"
            >
              {artProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onQuickView={(p) => setQuickViewProduct(p)} 
                />
              ))}
            </motion.div>
          </div>
        )}

      </section>

      {/* Large Feature Banner - The Dress */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0 flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
             <img 
               src="/images/products/7.jpeg" 
               alt="Vestido Selva Esmeralda Detail" 
               className="w-full h-full object-cover object-center filter contrast-110 brightness-90 hover:scale-105 transition-transform duration-[4s]"
             />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center p-8 md:p-24 text-center"
          >
             <span className="text-white/40 uppercase tracking-[0.4em] text-[10px] mb-8">Obra Maestra</span>
             <h2 className="text-white font-serif text-4xl md:text-6xl mb-10 leading-tight">Vestido <br/> <span className="italic">Selva Esmeralda</span></h2>
             <p className="text-white/60 font-light leading-relaxed text-sm md:text-base max-w-md mb-12">
               Nuestra pieza más icónica. Una explosión de color y naturaleza capturada sobre la elegancia del negro absoluto. Cada guacamaya requiere más de 40 horas de pintura detallada.
             </p>
             <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
               <Link 
                 to="/producto/vestido-guacamayo-azul" 
                 className="bg-white text-black px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-all duration-700 min-w-[200px]"
               >
                 Explorar Pieza
               </Link>
               <a 
                 href="https://www.instagram.com/adriana.barrera_/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex items-center gap-3 border border-white/30 text-white px-10 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all duration-700 min-w-[200px]"
               >
                 <Instagram size={16} strokeWidth={1.5} />
                 <span>Ver en Instagram</span>
               </a>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Art Section - Gallery Feel */}
      <section className="py-32 md:py-56 bg-[#fcfcfc]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <span className="uppercase tracking-[0.3em] text-[10px] text-gray-400 mb-4 block">Más allá de la moda</span>
                <h2 className="font-serif text-4xl md:text-6xl text-black leading-tight">
                  Arte sobre <br/> Lienzo
                </h2>
              </div>
              <p className="text-gray-500 font-light leading-loose text-base md:text-lg max-w-md">
                La visión artística de Adriana no se detiene en la tela. Descubre nuestra colección de obras originales en acrílico, donde la naturaleza cobra vida con una paleta vibrante y texturas orgánicas.
              </p>
              <div className="flex flex-col gap-12 pt-8">
                {highlightedProducts.filter(p => p.category === 'arte').map(product => (
                  <Link key={product.id} to={`/producto/${product.id}`} className="flex gap-8 group">
                    <div className="w-24 h-24 overflow-hidden flex-shrink-0 bg-white shadow-sm relative">
                      <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      {product.isSold && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="bg-black text-white px-2 py-0.5 text-[8px] tracking-widest uppercase font-bold">Vendido</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-serif text-lg text-black group-hover:text-gray-500 transition-colors">{product.name}</h4>
                      <span className={`text-xs tracking-widest uppercase mt-1 ${product.isSold ? 'text-red-700 font-semibold' : 'text-gray-400'}`}>
                        {product.isSold ? 'Vendido' : product.formattedPrice}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-8 pt-8">
                <Link to="/categoria/arte" className="inline-block border-b border-black text-black pb-2 uppercase tracking-[0.2em] text-[10px] hover:text-gray-500 hover:border-gray-500 transition-all">
                  Ver Galería Completa
                </Link>
                <a 
                  href="https://www.instagram.com/adriana.barrera_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#fdfaf3] border border-[#f3e5ab] text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-all duration-500 group"
                >
                  <Instagram size={16} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                  <span className="uppercase tracking-[0.2em] text-[9px] font-bold">Ver el proceso artístico</span>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              <div className="aspect-[3/4] overflow-hidden mt-12 shadow-2xl">
                <img src="/images/products/1.jpg" alt="Art detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
              </div>
              <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                <img src="/images/products/8.jpeg" alt="Art detail" className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Editorial - Etro style split */}
      <section className="py-32 md:py-56 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-center">
          <div className="md:col-span-7 aspect-video md:aspect-[16/9] overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2670&auto=format&fit=crop" 
              alt="Atelier"
              className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
          </div>
          <div className="md:col-span-5 flex flex-col items-start space-y-10">
            <h2 className="font-serif text-4xl md:text-5xl text-black leading-tight">
              Técnica y <br/> Tradición
            </h2>
            <p className="text-gray-500 font-light leading-loose text-base">
              Nuestros artesanos mezclan técnicas ancestrales con pigmentos modernos para asegurar que cada prenda no solo sea una obra de arte, sino que soporte el desgaste del tiempo. Cada trazo es irrepetible.
            </p>
            <button className="bg-black text-white px-12 py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-gray-800 transition-all">
              Descubre el Proceso
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Quick View Modal */}
      <ProductQuickView 
        product={quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </main>
  );
}

