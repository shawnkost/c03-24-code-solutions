import { Product } from '../lib';
import { createContext, useState } from 'react';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartValue>({
  cart: [],
  addToCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart((cart) => [...cart, product]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
