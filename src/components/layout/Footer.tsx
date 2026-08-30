import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 text-black py-24 px-6 md:px-12 text-sm mt-auto">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12">
        <div className="md:col-span-5 md:pr-12">
          <h4 className="font-serif text-2xl text-black mb-6">Únete a la Lista</h4>
          <p className="font-light text-gray-500 mb-8 leading-relaxed text-sm">Regístrate para recibir acceso anticipado a nuevas colecciones pintadas a mano e invitaciones a eventos privados.</p>
          <form className="flex border-b border-black pb-3">
            <input 
              type="email" 
              placeholder="E-mail" 
              className="bg-transparent flex-1 focus:outline-none text-black placeholder-gray-400 font-light text-sm"
            />
            <button className="uppercase tracking-[0.2em] text-[10px] font-medium hover:text-gray-500 transition-colors">
              Unirse
            </button>
          </form>
        </div>
        <div className="md:col-span-2 md:col-start-8">
          <h5 className="text-black uppercase tracking-[0.2em] mb-8 text-[10px] font-medium">Atención al Cliente</h5>
          <ul className="space-y-5 font-light text-gray-500 text-sm">
            <li><Link to="/contact" className="hover:text-black transition-colors">Contacto</Link></li>
            <li><Link to="/contact" className="hover:text-black transition-colors">Envíos y Devoluciones</Link></li>
            <li><Link to="/privacy" className="hover:text-black transition-colors">Privacidad</Link></li>
            <li><Link to="/" className="hover:text-black transition-colors">FAQS</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h5 className="text-black uppercase tracking-[0.2em] mb-8 text-[10px] font-medium">La Marca</h5>
          <ul className="space-y-5 font-light text-gray-500 text-sm">
            <li><Link to="/about" className="hover:text-black transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">El Taller</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors">Sustentabilidad</Link></li>
            <li><Link to="/privacy" className="hover:text-black transition-colors">Aviso Legal</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-24 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 font-light text-[10px] uppercase tracking-[0.2em] text-gray-400">
        <p>© 2026 ADRIANA BARRERA</p>
        <div className="flex gap-8">
          <a href="https://www.instagram.com/adriana.barrera_/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
          <a href="#" className="hover:text-black transition-colors">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}
