import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface NavbarProps {
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenProfile: () => void;
}

export default function Navbar({ onOpenCart, onOpenSearch, onOpenProfile }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavClass = () => {
    if (isScrolled) {
      return 'bg-white/95 backdrop-blur-md border-gray-100 py-3 text-black shadow-sm';
    }
    return `bg-transparent py-3 md:py-4 ${isHome ? 'text-black' : 'text-black border-b border-gray-100'}`;
  };

  return (
    <>
      <div className="bg-black text-white text-[10px] py-2.5 text-center tracking-[0.2em] uppercase font-light relative z-[60]">
        Envíos gratuitos a todo el mundo en pedidos superiores a €300
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-700 border-b border-transparent ${getNavClass()} ${isScrolled ? 'top-0' : 'top-[36px]'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-12">
            <button className="md:hidden hover:opacity-60 transition-opacity mr-2" onClick={() => setIsMenuOpen(true)}>
              <Menu strokeWidth={1} />
            </button>

            <Link to="/" className="flex items-center gap-3 transform origin-left">
             <div className="relative w-7 h-7 md:w-8 md:h-8">
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                 <defs>
                   <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#d4af37" />
                     <stop offset="50%" stopColor="#f3e5ab" />
                     <stop offset="100%" stopColor="#aa7c11" />
                   </linearGradient>
                 </defs>
                 <path d="M50 85 C50 85 20 60 20 40 A15 15 0 0 1 50 40 A15 15 0 0 1 80 40 C80 60 50 85 50 85 Z" fill="none" stroke="url(#gold-grad)" strokeWidth="4" className="opacity-90"/>
                 <path d="M50 35 C35 15 10 30 25 55 C40 80 50 85 50 85 C50 85 60 80 75 55 C90 30 65 15 50 35 Z" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeDasharray="3 3"/>
               </svg>
             </div>
             <div className="flex flex-col items-start leading-[1.1]">
               <span className="font-serif text-[13px] lg:text-[16px] tracking-[0.15em] bg-clip-text text-transparent bg-gradient-to-r from-[#aa7c11] via-[#d4af37] to-[#aa7c11] uppercase whitespace-nowrap">
                 Adriana Barrera
               </span>
               <span className="text-[6px] lg:text-[7px] uppercase tracking-[0.4em] text-[#aa7c11] font-light mt-0.5">
                 Shop
               </span>
             </div>
            </Link>

            <div className="hidden md:flex gap-6 lg:gap-10 text-[11px] uppercase tracking-[0.15em] font-light transition-colors duration-500">
              <Link to="/categoria/novedades" className="hover:opacity-50 transition-opacity whitespace-nowrap">Novedades</Link>
              <Link to="/categoria/mujer" className="hover:opacity-50 transition-opacity whitespace-nowrap">Mujer</Link>
              <Link to="/categoria/hombre" className="hover:opacity-50 transition-opacity whitespace-nowrap">Hombre</Link>
              <Link to="/categoria/arte" className="hover:opacity-50 transition-opacity whitespace-nowrap">Arte & Regalos</Link>
            </div>
          </div>

          <div className="flex items-center gap-6 md:gap-8 transition-colors duration-500">
            <button onClick={onOpenSearch} className="hover:opacity-60 transition-opacity">
              <Search strokeWidth={1} className="w-5 h-5 md:w-5 md:h-5" />
            </button>
            <button onClick={onOpenProfile} className="hover:opacity-60 transition-opacity hidden md:block">
              <User strokeWidth={1} className="w-5 h-5 md:w-5 md:h-5" />
            </button>
            <button onClick={onOpenCart} className="hover:opacity-60 transition-opacity relative">
              <ShoppingBag strokeWidth={1} className="w-5 h-5 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-light">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col p-6 animate-in slide-in-from-left duration-300">
          <div className="flex justify-between items-center mb-12">
            <span className="font-serif text-xl tracking-wide uppercase">Adriana Barrera</span>
            <button onClick={() => setIsMenuOpen(false)}>
              <X strokeWidth={1} className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-lg font-light uppercase tracking-[0.1em]">
             <Link to="/categoria/novedades" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Novedades</Link>
             <Link to="/categoria/mujer" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Mujer</Link>
             <Link to="/categoria/hombre" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Hombre</Link>
             <Link to="/categoria/arte" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Arte & Regalos</Link>
             <div className="w-full h-px bg-gray-100 my-4"></div>
             <button onClick={() => { setIsMenuOpen(false); onOpenProfile(); }} className="text-left hover:text-gray-500">Mi Perfil</button>
          </div>
        </div>
      )}
    </>
  );
}
