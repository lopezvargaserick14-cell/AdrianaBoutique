import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer block"
    >
      <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#f9f9f9]">
        <Link to={`/producto/${product.id}`}>
          <img 
            src={product.images[0]} 
            alt={product.name}
            className={`object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out filter brightness-[1.02] ${product.isSold ? 'opacity-85' : ''}`}
          />
        </Link>
        
        {/* Quick View Button */}
        {!product.isSold && onQuickView && (
          <button 
            onClick={(e) => {
              e.preventDefault();
              onQuickView(product);
            }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm text-black px-6 py-3 uppercase tracking-[0.2em] text-[9px] opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-black hover:text-white flex items-center gap-2 border border-transparent hover:border-white/20"
          >
            <Eye size={14} />
            Vista Rápida
          </button>
        )}

        {/* Sold Badge */}
        {product.isSold && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center z-10 pointer-events-none">
            <span className="bg-black/95 text-white px-5 py-2 uppercase tracking-[0.25em] text-[10px] font-bold shadow-2xl border border-white/20">
              Vendido
            </span>
          </div>
        )}

        {product.isNew && !product.isSold && (
          <span className="absolute top-6 left-6 bg-black text-white px-3 py-1 uppercase tracking-widest text-[8px] font-medium z-10">
            Nuevo
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-2 items-center text-center px-2">
        <h3 className="font-sans text-[11px] text-black uppercase tracking-[0.18em] font-light mt-1 group-hover:text-gray-500 transition-colors duration-500">
          {product.name}
        </h3>
        <span className={`text-[13px] tracking-widest ${product.isSold ? 'text-red-700 font-semibold uppercase' : 'text-[#8B6914] font-medium'}`}>
          {product.isSold ? 'Vendido' : product.formattedPrice}
        </span>
        
        <div className="mt-3 flex flex-col gap-1">
          {product.details.slice(0, 2).map((detail, idx) => (
            <span key={idx} className="text-[9px] text-gray-400 uppercase tracking-widest font-light">
              {detail}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

