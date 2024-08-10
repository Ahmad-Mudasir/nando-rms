import { MdDelete } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Cart: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [tableNumber, setTableNumber] = useState<string>("");
  const [orderMessage, setOrderMessage] = useState<string>("");
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);
  const { clearCart } = useCart();

  // Calculate the subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleOrder = () => {
    if (tableNumber.trim() !== "" && !isNaN(Number(tableNumber))) {
      setOrderMessage(`Your table no ${tableNumber} order has been placed.`);
      setOrderPlaced(true); // Hide input and button
      setTableNumber("");
      clearCart(); // Clear the cart using the context function
    } else {
      setOrderMessage("Please enter a valid table number.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {orderMessage && (
        <p className="text-green-500 font-bold mb-4">{orderMessage}</p>
      )}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1   gap-4">
          {cart.map((item) => (
            <div
              key={item._id}
              className="rounded-[15px] rounded-l-none h-[135px] flex border shadow-lg p-2 hover:border-red duration-300 relative"
            >
              
              <img
                src={item.image}
                alt="image"
                className="w-1/4 h-4/4 object-cover"
              />
              
              {/* text content div */}
              <div className="grid md:grid-cols-4 grid-cols-3 gap-8  md:gap-20 justify-center items-center px-4 relative bottom-2">
                <div className="flex  flex-col">
                  <h1 className="font-[900] md:size[48px] font-fredoka">
                    Name
                  </h1>
                  <p className="font-[200] size-[25px] md:size[48px] font-fredoka">
                    {item.name}
                  </p>
                </div>

                <div className="flex items-center flex-col">
                  <h1 className="font-[900] size[48px] font-fredoka">Price</h1>
                  <p className="font-[200] size[48px]  font-fredoka text-rose-500">
                    ${item.price}
                  </p>
                </div>

                <div className="flex items-center flex-col">
                  <h1 className="font-[900] size[48px] font-fredoka">
                    Quantity
                  </h1>
                  <p className="font-[200] size[48px] font-fredoka">
                    {item.quantity}
                  </p>
                </div>

                <div className="flex flex-col">
                  <h1 className="font-[900] size[48px] font-fredoka">Total</h1>
                  <p className="font-[900] size[48px] font-fredoka text-rose-500">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="w-[30px] h-[30px] rounded-[7px] bg-red-500 text-red flex justify-center items-center absolute right-4 bottom-1 cursor-pointer "
              >
                <MdDelete className="size-20" />
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && !orderPlaced && (
        <div className="mt-4">
          <h3 className="text-xl font-bold">Subtotal: ${calculateSubtotal()}</h3>
          <input
            type="text"
            value={tableNumber}
            onChange={(e) => setTableNumber(e.target.value)}
            placeholder="Enter table number"
            className="border p-2 rounded-md w-full mb-4"
          />
          <button
            onClick={handleOrder}
            className="bg-green-500 text-white p-2 rounded-md w-full"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
