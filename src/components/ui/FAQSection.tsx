import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    question: '¿Las prendas son pintadas a mano?',
    answer: 'Sí, todas nuestras piezas son obras de arte originales, pintadas a mano alzada con pincel por Adriana Barrera usando técnicas especializadas en acrílico para tela.'
  },
  {
    question: '¿Qué cuidados requiere la ropa pintada?',
    answer: 'Recomendamos lavar a mano con agua fría y jabón suave. Secar a la sombra y planchar por el reverso a temperatura media. No usar blanqueador ni secadora para preservar la vitalidad de los colores.'
  },
  {
    question: '¿Hacen envíos internacionales?',
    answer: 'Sí, hacemos envíos a toda Colombia y a nivel internacional. Los tiempos y costos varían según el destino. Contáctanos por WhatsApp para coordinar tu envío internacional.'
  },
  {
    question: '¿Puedo pedir un diseño personalizado?',
    answer: 'Al ser piezas únicas, aceptamos comisiones especiales dependiendo de la disponibilidad. Por favor, comunícate con nosotros para discutir tu idea y crear algo exclusivo para ti.'
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto border-t border-gray-100">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl text-black mb-6">Preguntas Frecuentes</h2>
        <p className="text-gray-500 font-light max-w-2xl mx-auto">
          Resuelve tus dudas sobre nuestras piezas, procesos artísticos y envíos.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
            >
              <h3 className="font-serif text-lg text-black">{faq.question}</h3>
              <ChevronDown 
                className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-500 font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
