import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    console.log("Abriendo carrito...");
    setIsCartOpen(true);
  };
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, size: string) => {
    console.log("Añadiendo producto:", product.name, "Talla:", size);
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id && item.selectedSize === size);
      if (existingItem) {
        return prevCart.map(item => 
          (item.id === product.id && item.selectedSize === size) 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prevCart, { ...product, selectedSize: size, quantity: 1 }];
    });
    // Abrimos el carrito después de un pequeño delay para asegurar que el estado se actualizó
    setTimeout(() => openCart(), 100);
  };


  const removeFromCart = (productId: string, size: string) => {
    setCart(prevCart => prevCart.filter(item => !(item.id === productId && item.selectedSize === size)));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, subtotal, isCartOpen, openCart, closeCart }}>
      {children}
    </CartContext.Provider>
  );
}


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
