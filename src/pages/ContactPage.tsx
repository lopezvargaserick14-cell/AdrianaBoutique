import SEOTags from '../components/seo/SEOTags';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[800px] mx-auto min-h-screen">
      <SEOTags title="Contacto" description="Comunícate con Adriana Barrera para pedidos personalizados y envíos." />
      <h1 className="font-serif text-4xl mb-8">Contacto</h1>
      <div className="space-y-8 text-gray-600 font-light leading-relaxed">
        <p>
          Nos encantaría escuchar de ti. Ya sea que tengas dudas sobre el proceso de compra, necesites asesoría sobre las tallas, o desees realizar un pedido completamente personalizado con un diseño exclusivo, estamos aquí para ayudarte en cada paso. Nos esforzamos por ofrecer una atención al cliente tan detallada y cuidadosa como el arte que pintamos en nuestras prendas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-serif text-2xl text-black">Información Directa</h3>
            
            <a href="mailto:hola@adrianabarrera.com" className="flex items-center gap-4 hover:text-black transition-colors">
              <Mail size={20} />
              <span>hola@adrianabarrera.com</span>
            </a>
            
            <a href="tel:+573000000000" className="flex items-center gap-4 hover:text-black transition-colors">
              <Phone size={20} />
              <span>+57 300 000 0000</span>
            </a>
            
            <div className="flex items-center gap-4">
              <MapPin size={20} />
              <span>San Gil, Santander, Colombia</span>
            </div>
            
            <a href="https://www.instagram.com/adrianabarrera.art/" target="_blank" rel="noreferrer" className="flex items-center gap-4 hover:text-black transition-colors">
              <Instagram size={20} />
              <span>@adrianabarrera.art</span>
            </a>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-sm">
            <h3 className="font-serif text-xl text-black mb-4">Horario de Atención</h3>
            <p className="mb-2"><strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM (Hora Colombia)</p>
            <p className="mb-2"><strong>Sábados:</strong> 9:00 AM - 1:00 PM</p>
            <p className="mt-4 text-sm">Hacemos envíos a toda Colombia a través de transportadoras aliadas y envíos internacionales mediante DHL o FedEx bajo cotización previa.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
