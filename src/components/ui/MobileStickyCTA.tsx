import { ShoppingBag } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

export default function MobileStickyCTA() {
  const location = useLocation();
  
  // Hide on checkout or product pages if we want, but user said "CTA fijo en móvil".
  // Let's show it everywhere except checkout.
  if (location.pathname === '/checkout') return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 p-3 flex justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <Link 
        to="/categoria/mujer"
        className="flex items-center justify-center gap-3 bg-black text-white w-full py-4 uppercase tracking-widest text-[11px] font-medium"
      >
        <ShoppingBag size={16} />
        Ver Catálogo
      </Link>
    </div>
  );
}
