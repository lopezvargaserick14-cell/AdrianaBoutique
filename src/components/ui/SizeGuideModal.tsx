import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeGuideModal({ isOpen, onClose }: SizeGuideModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-2xl overflow-hidden shadow-2xl p-8 md:p-12"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-black hover:rotate-90 transition-transform duration-500"
            >
              <X size={24} strokeWidth={1} />
            </button>

            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center">Guía de Tallas</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="py-4 uppercase tracking-widest text-[10px] font-bold">Talla</th>
                    <th className="py-4 uppercase tracking-widest text-[10px] font-bold">Pecho (cm)</th>
                    <th className="py-4 uppercase tracking-widest text-[10px] font-bold">Cintura (cm)</th>
                    <th className="py-4 uppercase tracking-widest text-[10px] font-bold">Cadera (cm)</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-gray-500">
                  <tr className="border-b border-gray-50">
                    <td className="py-4 text-black font-medium">S</td>
                    <td className="py-4">84 - 88</td>
                    <td className="py-4">64 - 68</td>
                    <td className="py-4">92 - 96</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 text-black font-medium">M</td>
                    <td className="py-4">88 - 92</td>
                    <td className="py-4">68 - 72</td>
                    <td className="py-4">96 - 100</td>
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="py-4 text-black font-medium">L</td>
                    <td className="py-4">92 - 96</td>
                    <td className="py-4">72 - 76</td>
                    <td className="py-4">100 - 104</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-black font-medium">XL</td>
                    <td className="py-4">96 - 100</td>
                    <td className="py-4">76 - 80</td>
                    <td className="py-4">104 - 108</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 p-6 bg-gray-50 border-l-2 border-[#d4af37]">
              <p className="text-xs text-gray-500 leading-relaxed italic">
                * Nota: Debido a que nuestras prendas son pintadas a mano alzada y confeccionadas artesanalmente, puede haber pequeñas variaciones de 1-2 cm. Si estás entre dos tallas, te recomendamos elegir la más grande.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
