import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Product } from '../../data/products';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
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
            className="object-cover w-full h-full group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out filter brightness-[1.02]"
          />
        </Link>
        
        {/* Quick View Button */}
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

        {product.isNew && (
          <span className="absolute top-6 left-6 bg-black text-white px-3 py-1 uppercase tracking-widest text-[8px] font-medium">
            Nuevo
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-2 items-center text-center px-2">
        <h3 className="font-sans text-[11px] text-black uppercase tracking-[0.18em] font-light mt-1 group-hover:text-gray-500 transition-colors duration-500">
          {product.name}
        </h3>
        <div className="w-4 h-[1px] bg-gray-200 group-hover:w-12 transition-all duration-700"></div>
        <span className="text-gray-400 font-light text-[12px] tracking-widest">{product.formattedPrice}</span>
      </div>
    </motion.div>
  );
}
