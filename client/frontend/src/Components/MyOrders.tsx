import { useEffect, useState } from 'react';
import { API_URL } from '../config';
import { OrderDetails } from '../types';

const MyOrders = () => {
  const [orders, setOrders] = useState<OrderDetails[]>([]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(API_URL + "api/order/userorders", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token') as string,
        },
        body: JSON.stringify({})
      });
      const result = await response.json();
      setOrders(result.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      fetchOrders();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('token')]);

  return (
    <div className='my-orders p-4'>
      <h2 className='text-2xl font-bold mb-4'>My Orders</h2>
      <div className="container mx-auto">
        {orders.map((order, index) => (
          <div key={index} className='my-orders-order p-4 mb-4 border rounded shadow'>
            {/* <img src={assets.parcel_icon} alt="Parcel Icon" className='w-12 h-12 mb-2' /> */}
            <p className='mb-2'>
              {order.items.map((item, index) => (
                <span key={index}>
                  {item.name} x {item.quantity}{index < order.items.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <p className='mb-2'>{order.amount}.00</p>
            <p className='mb-2'>Items: {order.items.length}</p>
            <p className='mb-2'><span className='text-green-500'>&#x25cf;</span> <b>{order.status}</b></p>
            <button onClick={fetchOrders} className='bg-blue-500 text-white px-4 py-2 rounded'>Track Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;