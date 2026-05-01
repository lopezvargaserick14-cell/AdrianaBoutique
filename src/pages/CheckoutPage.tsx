import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('');
  const { cart, subtotal } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-40 px-6 md:px-12 max-w-[1400px] mx-auto bg-white min-h-screen">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="font-serif text-3xl md:text-4xl text-black mb-6">Finalizar Compra</h1>
        <div className="flex space-x-4 items-center text-[10px] uppercase tracking-[0.2em]">
          <span className={step >= 1 ? 'text-black' : 'text-gray-300'}>Envío</span>
          <span className="text-gray-300">/</span>
          <span className={step >= 2 ? 'text-black' : 'text-gray-300'}>Pago</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Form Section */}
        <div className="lg:w-3/5">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-sm uppercase tracking-[0.15em] font-medium mb-8">Información de Envío</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input type="text" placeholder="Nombre" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                <input type="text" placeholder="Apellidos" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                <input type="email" placeholder="Correo Electrónico" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2" />
                <input type="text" placeholder="Dirección" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors md:col-span-2" />
                <input type="text" placeholder="Ciudad" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                <input type="text" placeholder="País/Región" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
              </div>
              <button 
                onClick={() => setStep(2)}
                className="mt-8 bg-black text-white hover:bg-gray-900 px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-medium transition-colors"
              >
                Continuar al Pago
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-sm uppercase tracking-[0.15em] font-medium mb-8">Método de Pago</h2>
              
              <div className="space-y-4 mb-12">
                <label className={`flex items-center p-4 border cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-black' : 'border-gray-200 hover:border-black'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="card"
                    className="mr-4 accent-black"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-sm">Tarjeta de Crédito / Débito (Internacional)</span>
                    <div className="flex gap-2">
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/200px-Mastercard-logo.svg.png" className="h-4 object-contain" alt="Mastercard" />
                       <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png" className="h-4 object-contain" alt="Visa" />
                    </div>
                  </div>
                </label>
                {paymentMethod === 'card' && (
                  <div className="pl-8 grid grid-cols-2 gap-4 animate-in fade-in duration-300">
                    <input type="text" placeholder="Número de Tarjeta" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black col-span-2" />
                    <input type="text" placeholder="MM/AA" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black" />
                    <input type="text" placeholder="CVC" className="w-full border-b border-gray-200 py-3 text-sm focus:outline-none focus:border-black" />
                  </div>
                )}

                <label className={`flex items-center p-4 border cursor-pointer transition-colors ${paymentMethod === 'pse' ? 'border-black' : 'border-gray-200 hover:border-black'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="pse"
                    className="mr-4 accent-black"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-sm">PSE (Pagos Seguros en Línea - Colombia)</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Logo_PSE.png" className="h-6 object-contain" alt="PSE" />
                  </div>
                </label>

                <label className={`flex items-center p-4 border cursor-pointer transition-colors ${paymentMethod === 'paypal' ? 'border-black' : 'border-gray-200 hover:border-black'}`}>
                  <input 
                    type="radio" 
                    name="payment" 
                    value="paypal"
                    className="mr-4 accent-black"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-sm">PayPal</span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 object-contain" alt="PayPal" />
                  </div>
                </label>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setStep(1)}
                  className="border border-black text-black hover:bg-black hover:text-white px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-medium transition-all"
                >
                  Volver
                </button>
                <button 
                  onClick={() => alert('¡Compra simulada completada con éxito!')}
                  className="bg-black text-white hover:bg-gray-900 px-10 py-4 uppercase tracking-[0.2em] text-[10px] font-medium transition-colors disabled:opacity-50"
                  disabled={!paymentMethod}
                >
                  Pagar Ahora
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:w-2/5 p-8 bg-gray-50 h-fit">
          <h2 className="text-sm uppercase tracking-[0.15em] font-medium mb-8">Resumen de Cesta</h2>
          <div className="space-y-6 mb-8 border-b border-gray-200 pb-8">
            {cart.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 group">
                <div className="w-16 h-20 bg-gray-50 flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.images[0]} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-[0.1em] text-gray-500 mb-1">
                    {item.name}
                  </span>
                  <span className="text-xs text-black font-medium mt-auto">Talla: {item.selectedSize}</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-gray-400 font-light">Cant: {item.quantity}</span>
                    <span className="text-sm font-light">€ {item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 mb-8 text-sm font-light">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>€ {subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Envío Internacional</span>
              <span>Gratis</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <span className="uppercase tracking-[0.1em] text-sm">Total</span>
            <span className="text-xl">€ {subtotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
