import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { PRODUCTS } from '../../data/products';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.length > 2 
    ? PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <>
      <div className="fixed inset-0 bg-white z-[80] flex flex-col pt-16 md:pt-24 animate-in fade-in duration-300">
        <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 relative flex-1 flex flex-col">
          <button onClick={onClose} className="absolute right-6 md:right-12 top-0 hover:opacity-50 transition-opacity">
            <X strokeWidth={1} className="w-8 h-8" />
          </button>
          
          <div className="w-full max-w-3xl mx-auto mt-12 md:mt-24">
            <div className="relative border-b border-black pb-4 mb-16">
              <input 
                type="text" 
                autoFocus
                placeholder="¿Qué estás buscando?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full text-2xl md:text-4xl font-serif focus:outline-none bg-transparent placeholder-gray-300"
              />
              <Search strokeWidth={1} className="absolute right-0 bottom-4 w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            </div>

            {query.length > 2 && (
              <div className="animate-in fade-in duration-500">
                <h3 className="text-[10px] uppercase tracking-[0.2em] font-medium mb-8 text-gray-400">Resultados ({results.length})</h3>
                {results.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                     {results.map((product) => (
                        <Link 
                          key={product.id} 
                          to={`/producto/${product.id}`}
                          onClick={onClose}
                          className="group"
                        >
                          <div className="aspect-[3/4] bg-gray-50 mb-4 overflow-hidden relative">
                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            {product.isSold && (
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <span className="bg-black text-white px-3 py-1 text-[8px] tracking-widest uppercase font-bold">Vendido</span>
                              </div>
                            )}
                          </div>
                          <h4 className="text-[10px] uppercase tracking-[0.1em] mb-1 group-hover:text-gray-500 transition-colors">{product.name}</h4>
                          <p className={`text-sm font-light ${product.isSold ? 'text-red-700 font-medium' : 'text-gray-500'}`}>
                            {product.isSold ? 'Vendido' : product.formattedPrice}
                          </p>
                        </Link>
                     ))}
                  </div>
                ) : (
                  <p className="font-light text-gray-500">No se encontraron productos para "{query}"</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
