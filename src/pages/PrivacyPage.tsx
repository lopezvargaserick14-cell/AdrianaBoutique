import SEOTags from '../components/seo/SEOTags';

export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[800px] mx-auto min-h-screen">
      <SEOTags title="Política de Privacidad" description="Política de Privacidad y Tratamiento de Datos Personales." />
      <h1 className="font-serif text-4xl mb-8">Política de Privacidad</h1>
      <div className="space-y-6 text-gray-600 font-light leading-relaxed">
        <p>
          En Adriana Barrera (en adelante, "nosotros", "la marca" o "el sitio web"), valoramos profundamente la confianza que depositas en nosotros al proporcionarnos tus datos personales. Esta Política de Privacidad describe cómo recopilamos, utilizamos, almacenamos y protegemos tu información cuando visitas nuestro sitio web, te comunicas con nosotros o realizas una compra.
        </p>
        
        <h2 className="font-serif text-2xl text-black mt-8 mb-4">1. Recopilación de Información</h2>
        <p>
          Recopilamos información personal que nos proporcionas directamente de forma voluntaria, como tu nombre completo, dirección de correo electrónico, dirección de envío y facturación, y número de teléfono al momento de realizar una compra o suscribirte a nuestro boletín. Además, de forma automática, recopilamos ciertos datos sobre tu dispositivo y navegación mediante el uso de cookies y tecnologías similares para mejorar la experiencia del usuario.
        </p>

        <h2 className="font-serif text-2xl text-black mt-8 mb-4">2. Uso de la Información</h2>
        <p>
          La información recopilada es utilizada principalmente para procesar y enviar tus pedidos, comunicarnos contigo sobre el estado de tu compra, y proporcionarte asistencia y soporte técnico. Si te has suscrito a nuestro boletín, utilizaremos tu correo para enviarte información sobre nuevas colecciones, ofertas especiales y contenido relevante. Bajo ninguna circunstancia venderemos o alquilaremos tu información personal a terceros o agencias externas de marketing.
        </p>

        <h2 className="font-serif text-2xl text-black mt-8 mb-4">3. Protección y Seguridad de Datos</h2>
        <p>
          Implementamos medidas de seguridad físicas, electrónicas y administrativas para salvaguardar y proteger la información que recopilamos en línea. Nuestro proceso de pago es manejado a través de pasarelas de pago seguras y certificadas que procesan la información de tus tarjetas con altos estándares de encriptación (SSL/TLS). Nosotros no almacenamos los datos sensibles de tus tarjetas de crédito o débito en nuestros servidores.
        </p>

        <h2 className="font-serif text-2xl text-black mt-8 mb-4">4. Tus Derechos</h2>
        <p>
          Como usuario, tienes derecho a solicitar acceso a tu información personal, a corregirla si es inexacta, o a solicitar su eliminación de nuestras bases de datos en cualquier momento. Para ejercer cualquiera de estos derechos, o si tienes alguna pregunta adicional sobre nuestras prácticas de privacidad, no dudes en escribirnos a nuestro correo electrónico de contacto.
        </p>
      </div>
    </main>
  );
}
