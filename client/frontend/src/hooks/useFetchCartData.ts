import { useState, useEffect } from 'react';
import { API_URL } from '../config';
import { CartItem } from '../types';

const useFetchCartData = () => {
  const [cartItems, setCartItems] = useState<CartItem>({});

  useEffect(() => {
    const fetchCartData = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(API_URL + 'api/cart/get', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token as string,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to load cart data. Status: ${response.status}`);
      }

      const data = await response.json();
      setCartItems(data.cartData);
    };

    fetchCartData();
  }, []);

  return { cartItems, setCartItems };
};

export default useFetchCartData;