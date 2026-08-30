import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/ui/CartDrawer';
import SearchModal from './components/ui/SearchModal';
import WhatsAppButton from './components/ui/WhatsAppButton';
import Preloader from './components/ui/Preloader';
import NewsletterModal from './components/ui/NewsletterModal';
import MobileStickyCTA from './components/ui/MobileStickyCTA';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';

function AppContent() {
  const { isCartOpen, closeCart, openCart } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-gray-200 selection:text-black flex flex-col pb-[76px] md:pb-0">
      <Navbar 
        onOpenCart={openCart}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenProfile={() => setIsNewsletterOpen(true)}
      />
      
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoria/:gender" element={<CategoryPage />} />
          <Route path="/producto/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>

      <Footer />
      
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <NewsletterModal isOpen={isNewsletterOpen} onClose={() => setIsNewsletterOpen(false)} />
      <WhatsAppButton />
      <MobileStickyCTA />
    </div>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Preloader />
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}




