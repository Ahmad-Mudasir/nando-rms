import React, { createContext, useState, ReactNode, useContext } from "react";
import { API_URL } from "../config";
//import { MenuItem } from "../types";

export interface CartItem {
  
  //id: number;
  _id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void; // Add clearCart function
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = async (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem._id === item._id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });

    const token = localStorage.getItem('token');

    await fetch(API_URL + 'api/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token as string,
      },
      body: JSON.stringify({
        "itemId": item._id,
      })
    });

  };

  const removeFromCart = async (id: number) => {

    const token = localStorage.getItem('token');

    await fetch(API_URL + 'api/cart/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': token as string,
      },
      body: JSON.stringify({
        "itemId": id,
      })
    });
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const clearCart = () => setCart([]); // Implement clearCart function
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
