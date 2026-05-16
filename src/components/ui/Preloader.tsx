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
          <div className="flex items-center justify-center w-full h-full p-8">
            <motion.img 
              src="/r.jpg"
              alt="Adriana Barrera"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full max-w-2xl max-h-[80vh] object-contain"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
