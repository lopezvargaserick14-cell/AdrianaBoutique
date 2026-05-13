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

            <Link to="/" className="flex items-center">
             <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
               <img 
                 src="/logo.png" 
                 alt="Adriana Barrera" 
                 className="w-full h-full object-contain mix-blend-multiply"
               />
             </div>
            </Link>

            <div className="hidden xl:flex gap-4 lg:gap-6 text-[9px] lg:text-[10px] uppercase tracking-[0.15em] font-light transition-colors duration-500">
              <Link to="/categoria/novedades" className="hover:opacity-50 transition-opacity whitespace-nowrap">Novedades</Link>
              <Link to="/categoria/best-sellers" className="hover:opacity-50 transition-opacity whitespace-nowrap">Best Sellers</Link>
              <Link to="/categoria/mujer" className="hover:opacity-50 transition-opacity whitespace-nowrap">Mujer</Link>
              <Link to="/categoria/hombre" className="hover:opacity-50 transition-opacity whitespace-nowrap">Hombre</Link>
              <Link to="/categoria/bolsos-canastos" className="hover:opacity-50 transition-opacity whitespace-nowrap">Canastos & Bolsos</Link>
              <Link to="/categoria/bufandas" className="hover:opacity-50 transition-opacity whitespace-nowrap">Bufandas</Link>
              <Link to="/categoria/arte" className="hover:opacity-50 transition-opacity whitespace-nowrap">Arte</Link>
              <Link to="/categoria/gift-guide" className="hover:opacity-50 transition-opacity whitespace-nowrap text-[#8B6914]">Gift Guide</Link>
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
             <Link to="/categoria/best-sellers" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Best Sellers</Link>
             <Link to="/categoria/mujer" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Mujer</Link>
             <Link to="/categoria/hombre" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Hombre</Link>
             <Link to="/categoria/bolsos-canastos" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Canastos & Bolsos</Link>
             <Link to="/categoria/bufandas" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Bufandas</Link>
             <Link to="/categoria/arte" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500">Arte</Link>
             <Link to="/categoria/gift-guide" onClick={() => setIsMenuOpen(false)} className="hover:text-[#8B6914] text-[#8B6914]">Gift Guide</Link>
             <div className="w-full h-px bg-gray-100 my-4"></div>
             <button onClick={() => { setIsMenuOpen(false); onOpenProfile(); }} className="text-left hover:text-gray-500">Mi Perfil</button>
          </div>
        </div>
      )}
    </>
  );
}
