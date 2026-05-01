import { motion, AnimatePresence } from 'motion/react';
import { X, Send, Instagram } from 'lucide-react';
import { useState } from 'react';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulamos el envío
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]"
          >
            {/* Image Section (Visual Impact) */}
            <div className="hidden md:block w-2/5 relative overflow-hidden bg-gray-100">
               <img 
                 src="/images/products/4.jpeg" 
                 alt="Arte Adriana Barrera" 
                 className="absolute inset-0 w-full h-full object-cover opacity-90"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
              >
                <X size={20} strokeWidth={1} />
              </button>

              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={24} />
                  </div>
                  <h3 className="font-serif text-2xl">¡Bienvenida al Universo Adriana Barrera!</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed">
                    Gracias por unirte. Pronto recibirás nuestras novedades y lanzamientos exclusivos.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-6 uppercase tracking-[0.2em] text-[10px] border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all"
                  >
                    Cerrar ventana
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="font-serif text-3xl mb-4 tracking-tight">Círculo de Arte</h2>
                    <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em] leading-loose">
                      Únete para recibir preventas exclusivas y novedades de nuestras piezas pintadas a mano.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input 
                        type="text" 
                        required
                        placeholder="NOMBRE COMPLETO" 
                        className="w-full border-b border-gray-300 py-3 text-[11px] uppercase tracking-widest focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 text-black font-medium"
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        required
                        placeholder="CORREO ELECTRÓNICO" 
                        className="w-full border-b border-gray-300 py-3 text-[11px] uppercase tracking-widest focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 text-black font-medium"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        required
                        placeholder="TELÉFONO / WHATSAPP" 
                        className="w-full border-b border-gray-300 py-3 text-[11px] uppercase tracking-widest focus:outline-none focus:border-black transition-colors placeholder:text-gray-400 text-black font-medium"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-black text-white py-4 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-gray-800 transition-all disabled:opacity-50 mt-4 shadow-xl"
                    >
                      {status === 'submitting' ? 'PROCESANDO...' : 'SUSCRIBIRME'}
                    </button>
                  </form>
                  
                  <div className="mt-10 flex flex-col items-center">
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-4 italic">O síguenos en redes</p>
                    <a 
                      href="https://www.instagram.com/adriana.barrera_/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-black hover:opacity-50 transition-opacity"
                    >
                      <Instagram size={18} strokeWidth={1.5} />
                      <span className="text-[10px] uppercase tracking-[0.2em] font-medium">@adriana.barrera_</span>
                    </a>
                  </div>
                  
                  <p className="mt-8 text-[9px] text-gray-300 uppercase tracking-widest text-center leading-relaxed">
                    Al unirte aceptas recibir comunicaciones de marketing personalizadas.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
