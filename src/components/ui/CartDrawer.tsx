import { X, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getPrices } from '../../utils/currency';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const navigate = useNavigate();
  const { cart, removeFromCart, totalItems } = useCart();
  const subtotalCOP = cart.reduce((sum, item) => sum + getPrices(item.price, item.formattedPrice, item.quantity).cop, 0);
  const subtotalEUR = cart.reduce((sum, item) => sum + getPrices(item.price, item.formattedPrice, item.quantity).eur, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full sm:w-[450px] bg-white z-[70] shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <div className="flex items-baseline gap-3">
            <h2 className="uppercase tracking-[0.2em] text-[11px] font-bold">Tu Bolsa</h2>
            <span className="text-[10px] text-gray-400 font-light">({totalItems} artículos)</span>
          </div>
          <button onClick={onClose} className="hover:rotate-90 transition-transform duration-500">
            <X strokeWidth={1} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 space-y-10">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <p className="text-gray-400 font-light tracking-widest text-sm uppercase">Tu bolsa está vacía</p>
              <button 
                onClick={onClose}
                className="border border-black px-8 py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-all"
              >
                Seguir Comprando
              </button>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <Link to={`/producto/${item.id}`} onClick={onClose} className="w-24 h-32 bg-gray-50 flex-shrink-0 overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                </Link>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <Link to={`/producto/${item.id}`} onClick={onClose} className="text-[11px] uppercase tracking-[0.15em] hover:text-gray-500 font-medium">
                      {item.name}
                    </Link>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize)}
                      className="text-gray-300 hover:text-black transition-colors"
                    >
                      <Trash2 size={16} strokeWidth={1} />
                    </button>
                  </div>
                  <div className="text-gray-400 text-[10px] uppercase tracking-[0.1em] font-light space-y-1 mb-auto">
                    <p>Talla: <span className="text-black font-medium">{item.selectedSize}</span></p>
                    <p>Cantidad: <span className="text-black font-medium">{item.quantity}</span></p>
                  </div>
                  <div className="flex flex-col items-end mt-4">
                    <span className="text-sm tracking-widest font-medium">
                      {getPrices(item.price, item.formattedPrice, item.quantity).formattedCop}
                    </span>
                    <span className="text-[10px] text-gray-400">
                      (Aprox. {getPrices(item.price, item.formattedPrice, item.quantity).formattedEur})
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-gray-50/50 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center uppercase tracking-[0.2em] text-[11px]">
                <span className="text-gray-400">Subtotal</span>
                <div className="flex flex-col items-end">
                  <span className="font-bold">$ {Math.round(subtotalCOP).toLocaleString('es-CO').replace(',', '.')}</span>
                  <span className="text-[9px] text-gray-400">(Aprox. € {subtotalEUR.toFixed(2).replace('.', ',')})</span>
                </div>
              </div>
              <div className="flex justify-between items-center uppercase tracking-[0.2em] text-[11px]">
                <span className="text-gray-400">Envío</span>
                <span className="text-green-600 font-medium">Gratis</span>
              </div>
            </div>
            
            <div className="h-px bg-gray-100 w-full"></div>
            
            <div className="flex justify-between items-center uppercase tracking-[0.2em] text-[12px] font-bold">
              <span>Total</span>
              <div className="flex flex-col items-end">
                <span className="text-lg">$ {Math.round(subtotalCOP).toLocaleString('es-CO').replace(',', '.')}</span>
                <span className="text-[10px] text-gray-400 font-normal">(Aprox. € {subtotalEUR.toFixed(2).replace('.', ',')})</span>
              </div>
            </div>

            <button 
              onClick={() => {
                onClose();
                navigate('/checkout');
              }}
              className="w-full bg-black text-white hover:bg-gray-800 py-6 uppercase tracking-[0.3em] text-[11px] font-bold transition-all duration-700 shadow-xl"
            >
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </>
  );
}

