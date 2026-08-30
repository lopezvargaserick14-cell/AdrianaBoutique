import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { CheckCircle, ArrowLeft, CreditCard, Building2, Wallet } from 'lucide-react';
import { getPrices } from '../utils/currency';
import SEOTags from '../components/seo/SEOTags';

const WOMPI_PUBLIC_KEY = import.meta.env.VITE_WOMPI_PUBLIC_KEY || '';
const PAYPAL_CLIENT_ID = import.meta.env.VITE_PAYPAL_CLIENT_ID || 'test';

type Step = 'info' | 'payment' | 'success';
type PaymentMethod = 'card' | 'pse' | 'paypal' | '';

export default function CheckoutPage() {
  const [step, setStep] = useState<Step>('info');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('');
  const [formData, setFormData] = useState({ name: '', lastName: '', email: '', address: '', city: '', phone: '' });
  const { cart, clearCart } = useCart();
  const subtotalCOP = cart.reduce((sum, item) => sum + getPrices(item.price, item.formattedPrice, item.quantity).cop, 0);
  const subtotalEUR = cart.reduce((sum, item) => sum + getPrices(item.price, item.formattedPrice, item.quantity).eur, 0);
  const totalCOP = subtotalCOP;
  const totalEUR = subtotalEUR;
  const navigate = useNavigate();
  const wompiFormRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  // Wompi Widget integration
  useEffect(() => {
    if (step === 'payment' && paymentMethod === 'card' && wompiFormRef.current) {
      wompiFormRef.current.innerHTML = '';
      const script = document.createElement('script');
      script.src = 'https://checkout.wompi.co/widget.js';
      script.setAttribute('data-render', 'button');
      script.setAttribute('data-public-key', WOMPI_PUBLIC_KEY);
      script.setAttribute('data-currency', 'COP');
      script.setAttribute('data-amount-in-cents', (totalCOP * 100).toString());
      script.setAttribute('data-reference', `ORDER-${Date.now()}`);
      script.setAttribute('data-customer-data:email', formData.email);
      script.setAttribute('data-customer-data:full-name', `${formData.name} ${formData.lastName}`);
      script.setAttribute('data-customer-data:phone-number', formData.phone);
      script.setAttribute('data-redirect-url', window.location.origin + '/checkout?status=success');
      wompiFormRef.current.appendChild(script);
    }
  }, [step, paymentMethod, totalCOP, formData]);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePayPalSuccess = (details: any) => {
    console.log('PayPal payment success:', details);
    clearCart();
    setStep('success');
  };

  if (cart.length === 0 && step !== 'success') {
    return (
      <main className="h-screen flex flex-col items-center justify-center bg-white">
        <SEOTags title="Carrito de Compras" description="Tu carrito de compras está vacío." />
        <h1 className="font-serif text-3xl mb-4">Tu bolsa está vacía</h1>
        <Link to="/" className="border-b border-black pb-1 uppercase tracking-[0.2em] text-[10px]">
          Volver a la tienda
        </Link>
      </main>
    );
  }

  if (step === 'success') {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
        <SEOTags title="Compra Exitosa" description="Gracias por tu compra en Adriana Barrera." />
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-8">
          <CheckCircle size={40} className="text-green-500" strokeWidth={1} />
        </div>
        <h1 className="font-serif text-4xl mb-4">¡Gracias por tu compra!</h1>
        <p className="text-gray-500 font-light max-w-md mx-auto mb-10">
          Hemos enviado un correo de confirmación con los detalles de tu pedido. Nos pondremos en contacto pronto para coordinar el envío.
        </p>
        <Link to="/" className="border border-black px-12 py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-black hover:text-white transition-colors">
          Seguir Explorando
        </Link>
      </main>
    );
  }

  return (
    <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: 'USD' }}>
      <main className="pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 max-w-[1400px] mx-auto bg-white min-h-screen">
        <SEOTags title="Checkout" description="Finaliza tu compra de forma segura." />
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-[10px] uppercase tracking-widest mb-8 self-start">
            <ArrowLeft size={14} /> Seguir comprando
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl text-black mb-6">Finalizar Compra</h1>
          <div className="flex space-x-4 items-center text-[10px] uppercase tracking-[0.2em]">
            <span className={step === 'info' ? 'text-black font-bold' : 'text-gray-400'}>1. Información</span>
            <span className="text-gray-300">/</span>
            <span className={step === 'payment' ? 'text-black font-bold' : 'text-gray-400'}>2. Pago</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* ======= FORM SECTION ======= */}
          <div className="lg:w-3/5">
            {/* STEP 1: Shipping Info */}
            {step === 'info' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <h2 className="text-sm uppercase tracking-[0.15em] font-medium mb-8">Información de Envío</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input name="name" onChange={handleFormChange} value={formData.name} type="text" placeholder="Nombre" required className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input name="lastName" onChange={handleFormChange} value={formData.lastName} type="text" placeholder="Apellidos" required className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input name="email" onChange={handleFormChange} value={formData.email} type="email" placeholder="Correo Electrónico" required className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2" />
                  <input name="phone" onChange={handleFormChange} value={formData.phone} type="tel" placeholder="Teléfono / WhatsApp" required className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2" />
                  <input name="address" onChange={handleFormChange} value={formData.address} type="text" placeholder="Dirección" required className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2" />
                  <input name="city" onChange={handleFormChange} value={formData.city} type="text" placeholder="Ciudad" required className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  <input type="text" placeholder="País / Región" defaultValue="Colombia" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <button
                  onClick={() => {
                    if (!formData.name || !formData.email || !formData.address) {
                      alert('Por favor completa todos los campos requeridos.');
                      return;
                    }
                    setStep('payment');
                  }}
                  className="mt-8 bg-black text-white hover:bg-gray-800 px-12 py-5 uppercase tracking-[0.3em] text-[10px] font-bold transition-all shadow-xl"
                >
                  Continuar al Pago
                </button>
              </div>
            )}

            {/* STEP 2: Payment */}
            {step === 'payment' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-8">
                <h2 className="text-sm uppercase tracking-[0.15em] font-medium">Método de Pago</h2>

                {/* WOMPI NOT CONFIGURED WARNING */}
                {(!WOMPI_PUBLIC_KEY || WOMPI_PUBLIC_KEY.includes('REEMPLAZA')) && (
                  <div className="bg-amber-50 border border-amber-200 p-6 text-sm text-amber-800 rounded">
                    <p className="font-bold mb-2">⚙️ Wompi aún no configurado</p>
                    <p className="font-light">Para activar PSE y Tarjeta, crea tu cuenta en <a href="https://comercios.wompi.co" target="_blank" rel="noopener noreferrer" className="underline">comercios.wompi.co</a> y añade tu clave pública en las variables de entorno de Netlify.</p>
                  </div>
                )}

                {/* Payment Method Selector */}
                <div className="space-y-4">
                  {/* Tarjeta */}
                  <label className={`flex items-center gap-4 p-5 border cursor-pointer transition-all ${paymentMethod === 'card' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                    <input type="radio" name="payment" value="card" className="accent-black" onChange={() => setPaymentMethod('card')} />
                    <CreditCard size={20} strokeWidth={1} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Tarjeta Débito / Crédito</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Visa · Mastercard · Amex</p>
                    </div>
                    <div className="flex gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" className="h-5 object-contain" alt="Mastercard" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" className="h-5 object-contain" alt="Visa" />
                    </div>
                  </label>

                  {/* PSE */}
                  <label className={`flex items-center gap-4 p-5 border cursor-pointer transition-all ${paymentMethod === 'pse' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                    <input type="radio" name="payment" value="pse" className="accent-black" onChange={() => setPaymentMethod('pse')} />
                    <Building2 size={20} strokeWidth={1} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">PSE — Débito Bancario</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Pagos Seguros en Línea · Colombia</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_PSE.png" className="h-7 object-contain" alt="PSE" />
                  </label>

                  {/* PayPal */}
                  <label className={`flex items-center gap-4 p-5 border cursor-pointer transition-all ${paymentMethod === 'paypal' ? 'border-black bg-gray-50' : 'border-gray-200 hover:border-gray-400'}`}>
                    <input type="radio" name="payment" value="paypal" className="accent-black" onChange={() => setPaymentMethod('paypal')} />
                    <Wallet size={20} strokeWidth={1} />
                    <div className="flex-1">
                      <p className="text-sm font-medium">PayPal</p>
                      <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Pago internacional seguro</p>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-5 object-contain" alt="PayPal" />
                  </label>
                </div>

                {/* Wompi Widget (Card / PSE) */}
                {(paymentMethod === 'card' || paymentMethod === 'pse') && (
                  <div className="mt-6">
                    {WOMPI_PUBLIC_KEY && !WOMPI_PUBLIC_KEY.includes('REEMPLAZA') ? (
                      <div ref={wompiRef} className="min-h-[60px]" />
                    ) : (
                      <button className="w-full bg-gray-200 text-gray-400 py-5 uppercase tracking-[0.3em] text-[10px] font-bold cursor-not-allowed">
                        Pagar con {paymentMethod === 'pse' ? 'PSE' : 'Tarjeta'} — Configura Wompi primero
                      </button>
                    )}
                  </div>
                )}

                {/* PayPal Buttons */}
                {paymentMethod === 'paypal' && (
                  <div className="mt-6">
                    {PAYPAL_CLIENT_ID && !PAYPAL_CLIENT_ID.includes('REEMPLAZA') ? (
                      <PayPalButtons
                        style={{ layout: 'vertical', color: 'black', shape: 'rect', label: 'pay' }}
                        createOrder={(_data, actions) => {
                          return actions.order.create({
                            intent: 'CAPTURE',
                            purchase_units: [{
                              amount: {
                                value: (subtotalCOP / 4000).toFixed(2), // Conversión COP → USD aproximada
                                currency_code: 'USD',
                              },
                              description: `Adriana Barrera Boutique — ${cart.length} artículo(s)`,
                            }],
                          });
                        }}
                        onApprove={async (_data, actions) => {
                          if (actions.order) {
                            const details = await actions.order.capture();
                            handlePayPalSuccess(details);
                          }
                        }}
                        onError={(err) => {
                          console.error('PayPal error:', err);
                          alert('Hubo un error con PayPal. Por favor intenta de nuevo.');
                        }}
                      />
                    ) : (
                      <button className="w-full bg-gray-200 text-gray-400 py-5 uppercase tracking-[0.3em] text-[10px] font-bold cursor-not-allowed">
                        PayPal — Configura tu Client ID primero
                      </button>
                    )}
                  </div>
                )}

                <button onClick={() => setStep('info')} className="flex items-center gap-2 text-gray-400 hover:text-black transition-colors text-[10px] uppercase tracking-widest mt-4">
                  <ArrowLeft size={14} /> Volver a datos de envío
                </button>
              </div>
            )}
          </div>

          {/* ======= ORDER SUMMARY ======= */}
          <div className="lg:w-2/5">
            <div className="p-8 bg-gray-50 sticky top-28">
              <h2 className="text-sm uppercase tracking-[0.15em] font-medium mb-8">Resumen de Pedido</h2>
              <div className="space-y-6 mb-8 border-b border-gray-200 pb-8">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                    <div className="w-20 h-24 bg-white flex-shrink-0 overflow-hidden border border-gray-100">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col flex-1">
                      <span className="text-[11px] uppercase tracking-[0.1em] text-black font-medium mb-1">{item.name}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Talla: {item.selectedSize}</span>
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Cant: {item.quantity}</span>
                      <span className="text-sm mt-auto font-light">
                        {getPrices(item.price, item.formattedPrice, item.quantity).formattedCop}
                        <br/><span className="text-[10px] text-gray-400">(Aprox. {getPrices(item.price, item.formattedPrice, item.quantity).formattedEur})</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 text-[11px] uppercase tracking-[0.1em] mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Subtotal</span>
                  <div className="flex flex-col items-end text-black font-medium">
                    <span>$ {Math.round(subtotalCOP).toLocaleString('es-CO').replace(',', '.')}</span>
                    <span className="text-[9px] text-gray-400 font-normal">(Aprox. € {subtotalEUR.toFixed(2).replace('.', ',')})</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Envío</span>
                  <span className="text-green-600 font-bold">Gratis</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 uppercase tracking-[0.15em]">
                <span className="text-sm font-bold">Total</span>
                <div className="flex flex-col items-end">
                  <span className="text-xl font-bold">$ {Math.round(subtotalCOP).toLocaleString('es-CO').replace(',', '.')}</span>
                  <span className="text-[10px] text-gray-400 font-normal">(Aprox. € {subtotalEUR.toFixed(2).replace('.', ',')})</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </PayPalScriptProvider>
  );
}
