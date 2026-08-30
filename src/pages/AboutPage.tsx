import SEOTags from '../components/seo/SEOTags';

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-[800px] mx-auto min-h-screen">
      <SEOTags title="Sobre Nosotros" description="Conoce la historia detrás de Adriana Barrera y su arte aplicado a la vida." />
      <h1 className="font-serif text-4xl mb-8">Sobre Nosotros</h1>
      <div className="space-y-6 text-gray-600 font-light leading-relaxed">
        <p>
          Adriana Barrera es una boutique de ropa pintada a mano que nace de la profunda convicción de que el arte no debe limitarse a los lienzos y a las paredes de las galerías. Creemos firmemente en el concepto de "arte aplicado a la vida", donde cada prenda se convierte en una obra maestra andante, permitiendo a quienes la visten expresar su sensibilidad, elegancia y amor por la naturaleza de una manera verdaderamente única.
        </p>
        <p>
          Nuestra historia comenzó en Santander, Colombia, inspirados por la exuberante flora y fauna de la región. Desde el majestuoso vuelo del Momotus equatorialis hasta los vibrantes colores de las guacamayas y colibríes que adornan nuestros jardines, cada trazo de pintura acrílica sobre lino busca capturar la esencia misma de nuestra biodiversidad. La técnica que utilizamos requiere de horas de dedicación, paciencia y un pulso meticuloso para asegurar que cada detalle cobre vida en la tela.
        </p>
        <p>
          En Adriana Barrera no producimos en masa. Cada blusa, vestido, sombrero y pieza de hogar es intervenida a mano y concebida como una pieza única (one-of-a-kind). Cuando adquieres una de nuestras creaciones, no solo te llevas una prenda de vestir, sino un fragmento del alma del artista. Nuestro compromiso es brindarte moda sostenible, exclusiva y con un profundo sentido cultural que trasciende las tendencias temporales.
        </p>
      </div>
    </main>
  );
}
