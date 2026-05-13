import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2200); // Faster total duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Logo Animation */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center p-8">
            <motion.img 
              src="/logo.png"
              alt="Adriana Barrera"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full object-contain"
            />
          </div>



          {/* Artistic background elements */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.05 }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="absolute inset-0 z-[-1] pointer-events-none"
          >
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#d4af37] rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#f3e5ab] rounded-full blur-[120px]"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
