import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag } from 'lucide-react';
import { Product } from '../../data/products';
import { Link } from 'react-router-dom';

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductQuickView({ product, onClose }: ProductQuickViewProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white w-full max-w-5xl h-fit max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-10 text-black hover:rotate-90 transition-transform duration-500 bg-white/80 p-2 rounded-full md:bg-transparent md:p-0"
          >
            <X size={24} strokeWidth={1} />
          </button>

          {/* Image Gallery (Simplified for Quick View) */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-gray-50 overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover object-center scale-[1.02]"
            />
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col overflow-y-auto">
            <div className="mb-auto">
              <span className="uppercase tracking-[0.2em] text-[10px] text-gray-400 mb-4 block">
                {product.category}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-black mb-6 leading-tight">
                {product.name}
              </h2>
              <p className={`text-xl font-light mb-8 ${product.isSold ? 'text-red-600 font-bold uppercase tracking-widest' : 'text-gray-900'}`}>
                {product.isSold ? 'Vendida' : product.formattedPrice}
              </p>
              
              <div className="space-y-6 mb-10">
                <p className="text-gray-500 font-light leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="uppercase tracking-widest text-[9px] font-bold text-black border-b border-gray-100 pb-2">Especificaciones</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {product.details.map((detail, idx) => (
                      <li key={idx} className="text-[12px] text-gray-400 flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-8">
              {product.isSold ? (
                <div className="w-full bg-gray-100 text-gray-400 py-5 uppercase tracking-[0.2em] text-[10px] text-center border border-gray-200">
                  Pieza Vendida
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => {
                      const size = product.isOneSize ? 'Única' : product.hasSizes ? null : 'N/A';
                      if (product.hasSizes && !product.isOneSize) {
                        // Redirect to full page if multiple sizes needed
                        onClose();
                        window.location.href = `/producto/${product.id}`;
                      } else {
                        // Import useCart if needed or just redirect
                        onClose();
                        window.location.href = `/producto/${product.id}`;
                      }
                    }}
                    className="w-full bg-black text-white py-5 uppercase tracking-[0.2em] text-[10px] hover:bg-gray-800 transition-colors flex items-center justify-center gap-3 group"
                  >
                    <ShoppingBag size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                    {product.hasSizes && !product.isOneSize ? 'Seleccionar Talla' : 'Añadir al carrito'}
                  </button>
                </>
              )}
              <Link 
                to={`/producto/${product.id}`}
                onClick={onClose}
                className="w-full border border-gray-200 text-black py-5 uppercase tracking-[0.2em] text-[10px] text-center hover:border-black transition-colors"
              >
                Ver detalles completos
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
