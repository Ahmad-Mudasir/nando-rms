import { CartItem, useCart } from "./context/CartContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { API_URL } from "./config";
import { MenuItem } from "./types";

type Props = {
  menuItems: MenuItem[];
};

const getQuantity = (cart: CartItem[], id: number) => {
  const item = cart.find((cartItem) => cartItem._id === id);
  return item ? item.quantity : 0;
};

const FoodItems: React.FC<Props> = ({ menuItems }) => {
  const { cart, addToCart } = useCart();
  const ref = useRef(null);
  const inView = useInView(ref);

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
    >
      <div className="grid grid-cols-1 md:w-full w-[80%] md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-6 p-1 mx-auto">
        {menuItems.map((item) => (
          <div
            key={item._id}
            className="rounded-[20px] rounded-t-none border shadow-lg p-2 hover:scale-105 duration-300 relative"
          >
            <img
              src={`${API_URL}images/${item.image}`}
              alt={item.name}
              className="w-full h-[150px] object-cover"
            />
            <div>
              <p className="font-[900] size[48px] font-fredoka">{item.name}</p>
              <p className="font-[900] size[48px] font-fredoka text-rose-500">
                ${item.price}
              </p>
            </div>
            {getQuantity(cart, item._id) > 0 && (
              <p className="font-[900] size[48px] font-fredoka text-gray-700 w-4 h-4 bg-green-300 text-sm rounded-full flex absolute items-center justify-center right-5 bottom-9">
                {getQuantity(cart, item._id)}
              </p>
            )}
            <div
              onClick={() => addToCart(item as unknown as CartItem)}
              className="w-[30px] h-[30px] rounded-[7px] bg-[#FFD40D] flex justify-center items-center absolute right-4 bottom-1 cursor-pointer"
            >
              <img
                src="/src/assets/images/Symbolcart.png"
                alt="Add to cart"
                className="size-3"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FoodItems;