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
          <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
            {/* Animated SVG Path for Logo */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#d4af37" />
                  <stop offset="50%" stopColor="#f3e5ab" />
                  <stop offset="100%" stopColor="#aa7c11" />
                </linearGradient>
              </defs>
              
              {/* Outer heart-like shape */}
              <motion.path
                d="M50 85 C50 85 20 60 20 40 A15 15 0 0 1 50 40 A15 15 0 0 1 80 40 C80 60 50 85 50 85 Z"
                fill="none"
                stroke="url(#logo-grad)"
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
              
              {/* Inner artistic lines */}
              <motion.path
                d="M50 35 C35 15 10 30 25 55 C40 80 50 85 50 85 C50 85 60 80 75 55 C90 30 65 15 50 35 Z"
                fill="none"
                stroke="url(#logo-grad)"
                strokeWidth="0.8"
                strokeDasharray="2 2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>

            {/* Text Animation */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute inset-0 flex flex-col items-center justify-center translate-y-32 md:translate-y-40"
            >
              <h2 className="font-serif text-[15px] md:text-2xl tracking-[0.4em] uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#aa7c11] via-[#d4af37] to-[#aa7c11] px-4 text-center">
                Adriana Barrera
              </h2>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="h-[1px] w-16 md:w-24 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-5"
              />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase text-[#aa7c11] mt-3 font-light"
              >
                Arte & Moda
              </motion.span>
            </motion.div>
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
