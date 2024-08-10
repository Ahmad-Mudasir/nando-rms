import { useState } from 'react';
import { API_URL } from '../config';
import { CartItem, MenuItem, MenuItemWithQuantity, OrderDetails } from '../types';

const usePlaceOrder = (items: MenuItem[], cartItems: CartItem, calculateSubtotal: (filteredItems:MenuItem[], cartItems: CartItem) => string) => {
  const [orderMessage, setOrderMessage] = useState<string>('');
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  const placeOrder = async (tableNumber: string, clearCart: () => void) => {
    try {
      const token = localStorage.getItem('token');

      const orderItems: MenuItemWithQuantity[] = [];
      items.forEach((item) => {
        if (cartItems[item._id] > 0) {
          const itemInfo = { ...item, quantity: cartItems[item._id] };
          orderItems.push(itemInfo);
        }
      });

      const orderDetails: OrderDetails = {
        items: orderItems,
        amount: Number(calculateSubtotal(items, cartItems)),
        payment: false,
        tableNo: Number(tableNumber),
      };

      const response = await fetch(API_URL + 'api/order/placecod', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': token as string,
        },
        body: JSON.stringify(orderDetails),
      });

      await response.json();
      setOrderMessage(`Your table no ${tableNumber} order has been placed.`);
      setOrderPlaced(true);
      clearCart();
    } catch (error) {
      setOrderMessage('Please enter a valid table number.');
    }
  };

  return { orderMessage, orderPlaced, placeOrder };
};

export default usePlaceOrder;