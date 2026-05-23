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
        Envíos gratis a Colombia por compras superiores a $300.000 COP
      </div>

      <nav className={`fixed w-full z-50 transition-all duration-700 border-b border-transparent ${getNavClass()} ${isScrolled ? 'top-0' : 'top-[36px]'}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-12">
            <button className="md:hidden hover:opacity-60 transition-opacity mr-2" onClick={() => setIsMenuOpen(true)}>
              <Menu strokeWidth={1} />
            </button>

            <Link to="/" className="flex flex-col items-center">
              <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                <img 
                  src="/logo.png" 
                  alt="Adriana Barrera" 
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <div className="flex flex-col items-center -mt-1">
                <span className="font-serif text-[8px] md:text-[10px] tracking-[0.2em] text-brand-gold uppercase leading-tight">
                  Adriana Barrera
                </span>
                <div className="flex items-center gap-1.5 text-[5px] md:text-[6px] tracking-[0.3em] text-brand-gold uppercase leading-none opacity-80">
                  <span className="w-4 h-[0.5px] bg-[#d4af37] opacity-50"></span>
                  <span>Shop</span>
                  <span className="w-4 h-[0.5px] bg-[#d4af37] opacity-50"></span>
                </div>
              </div>
            </Link>

            <div className="hidden xl:flex gap-6 lg:gap-8 text-[9px] lg:text-[10px] uppercase tracking-[0.15em] font-light transition-colors duration-500">
              
              {/* Mujer Dropdown */}
              <div className="group relative py-4 -my-4">
                <Link to="/categoria/mujer" className="hover:opacity-50 transition-opacity whitespace-nowrap">Mujer</Link>
                {/* Level 1 Dropdown */}
                <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black shadow-lg border border-gray-100 py-4 min-w-[200px] z-50">
                  
                  {/* Prendas de vestir */}
                  <div className="group/prendas relative px-6 py-3 hover:bg-gray-50">
                    <Link to="/categoria/prendas-de-vestir" className="flex justify-between items-center w-full">
                      Prendas de vestir <span className="text-gray-400">›</span>
                    </Link>
                    {/* Level 2 Dropdown */}
                    <div className="absolute top-0 left-full hidden group-hover/prendas:block bg-white shadow-lg border border-gray-100 py-4 min-w-[180px] z-50">
                      <Link to="/categoria/pantalones" className="block px-6 py-2 hover:bg-gray-50">Pantalones</Link>
                      <Link to="/categoria/blusas" className="block px-6 py-2 hover:bg-gray-50">Blusas</Link>
                      <Link to="/categoria/vestidos" className="block px-6 py-2 hover:bg-gray-50">Vestidos</Link>
                      <Link to="/categoria/camisas" className="block px-6 py-2 hover:bg-gray-50">Camisas</Link>
                      <Link to="/categoria/camisetas" className="block px-6 py-2 hover:bg-gray-50">Camisetas</Link>
                      <Link to="/categoria/faldas" className="block px-6 py-2 hover:bg-gray-50">Faldas</Link>
                      <Link to="/categoria/accesorios" className="block px-6 py-2 hover:bg-gray-50">Accesorios</Link>
                    </div>
                  </div>

                  {/* Hogar */}
                  <div className="group/hogar relative px-6 py-3 hover:bg-gray-50">
                    <Link to="/categoria/hogar" className="flex justify-between items-center w-full">
                      Hogar <span className="text-gray-400">›</span>
                    </Link>
                    {/* Level 2 Dropdown */}
                    <div className="absolute top-0 left-full hidden group-hover/hogar:block bg-white shadow-lg border border-gray-100 py-4 min-w-[180px] z-50">
                      <Link to="/categoria/canastos" className="block px-6 py-2 hover:bg-gray-50">Canastos</Link>
                      <Link to="/categoria/manteles" className="block px-6 py-2 hover:bg-gray-50">Manteles</Link>
                      <Link to="/categoria/juego-de-sabanas" className="block px-6 py-2 hover:bg-gray-50">Juego de sábanas</Link>
                    </div>
                  </div>

                </div>
              </div>

              {/* Galería de Arte Dropdown */}
              <div className="group relative py-4 -my-4">
                <Link to="/categoria/galeria-de-arte" className="hover:opacity-50 transition-opacity whitespace-nowrap">Galería de Arte</Link>
                {/* Level 1 Dropdown */}
                <div className="absolute top-full left-0 hidden group-hover:block bg-white text-black shadow-lg border border-gray-100 py-4 min-w-[200px] z-50">
                  {/* Cuadros */}
                  <div className="group/cuadros relative px-6 py-3 hover:bg-gray-50">
                    <Link to="/categoria/cuadros" className="flex justify-between items-center w-full">
                      Cuadros <span className="text-gray-400">›</span>
                    </Link>
                    {/* Level 2 Dropdown */}
                    <div className="absolute top-0 left-full hidden group-hover/cuadros:block bg-white shadow-lg border border-gray-100 py-4 min-w-[180px] z-50">
                      <Link to="/categoria/oleo" className="block px-6 py-2 hover:bg-gray-50">Óleo</Link>
                      <Link to="/categoria/acrilico" className="block px-6 py-2 hover:bg-gray-50">Acrílico</Link>
                      <Link to="/categoria/acuarela" className="block px-6 py-2 hover:bg-gray-50">Acuarela</Link>
                    </div>
                  </div>
                </div>
              </div>

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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-sm tracking-[0.15em] uppercase leading-tight text-brand-gold">Adriana Barrera</span>
                <span className="text-[7px] tracking-[0.3em] uppercase text-brand-gold opacity-80">Shop</span>
              </div>
            </div>
            <button onClick={() => setIsMenuOpen(false)}>
              <X strokeWidth={1} className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg font-light uppercase tracking-[0.1em] overflow-y-auto pb-20">
             
             {/* Mujer Section */}
             <div className="flex flex-col gap-4">
               <Link to="/categoria/mujer" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 font-normal">Mujer</Link>
               <div className="flex flex-col gap-4 pl-4 text-base border-l border-gray-100">
                 
                 <div className="flex flex-col gap-3">
                   <Link to="/categoria/prendas-de-vestir" onClick={() => setIsMenuOpen(false)} className="text-gray-600">Prendas de vestir</Link>
                   <div className="flex flex-col gap-3 pl-4 text-sm text-gray-400">
                     <Link to="/categoria/pantalones" onClick={() => setIsMenuOpen(false)}>Pantalones</Link>
                     <Link to="/categoria/blusas" onClick={() => setIsMenuOpen(false)}>Blusas</Link>
                     <Link to="/categoria/vestidos" onClick={() => setIsMenuOpen(false)}>Vestidos</Link>
                     <Link to="/categoria/camisas" onClick={() => setIsMenuOpen(false)}>Camisas</Link>
                     <Link to="/categoria/camisetas" onClick={() => setIsMenuOpen(false)}>Camisetas</Link>
                     <Link to="/categoria/faldas" onClick={() => setIsMenuOpen(false)}>Faldas</Link>
                     <Link to="/categoria/accesorios" onClick={() => setIsMenuOpen(false)}>Accesorios</Link>
                   </div>
                 </div>

                 <div className="flex flex-col gap-3 mt-2">
                   <Link to="/categoria/hogar" onClick={() => setIsMenuOpen(false)} className="text-gray-600">Hogar</Link>
                   <div className="flex flex-col gap-3 pl-4 text-sm text-gray-400">
                     <Link to="/categoria/canastos" onClick={() => setIsMenuOpen(false)}>Canastos</Link>
                     <Link to="/categoria/manteles" onClick={() => setIsMenuOpen(false)}>Manteles</Link>
                     <Link to="/categoria/juego-de-sabanas" onClick={() => setIsMenuOpen(false)}>Juego de sábanas</Link>
                   </div>
                 </div>

               </div>
             </div>

             {/* Galeria de Arte Section */}
             <div className="flex flex-col gap-4 mt-2">
               <Link to="/categoria/galeria-de-arte" onClick={() => setIsMenuOpen(false)} className="hover:text-gray-500 font-normal">Galería de Arte</Link>
               <div className="flex flex-col gap-3 pl-4 text-base border-l border-gray-100">
                 <div className="flex flex-col gap-3">
                   <Link to="/categoria/cuadros" onClick={() => setIsMenuOpen(false)} className="text-gray-600">Cuadros</Link>
                   <div className="flex flex-col gap-3 pl-4 text-sm text-gray-400">
                     <Link to="/categoria/oleo" onClick={() => setIsMenuOpen(false)}>Óleo</Link>
                     <Link to="/categoria/acrilico" onClick={() => setIsMenuOpen(false)}>Acrílico</Link>
                     <Link to="/categoria/acuarela" onClick={() => setIsMenuOpen(false)}>Acuarela</Link>
                   </div>
                 </div>
               </div>
             </div>

             <div className="w-full h-px bg-gray-100 my-4"></div>
             <button onClick={() => { setIsMenuOpen(false); onOpenProfile(); }} className="text-left hover:text-gray-500">Mi Perfil</button>
          </div>
        </div>
      )}
    </>
  );
}
