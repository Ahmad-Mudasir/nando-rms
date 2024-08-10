// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { featuredDishes } from "../Components/data";
// import { useCart } from "../context/CartContext";
// import { CartItem } from "../context/CartContext"; // Import the CartItem type
// const FeaturedDishes = () => {
//   const { cart, addToCart } = useCart();

//   // Function to get the quantity of an item from the cart
//   const getQuantity = (id: number) => {
//     const item = cart.find((cartItem) => cartItem._id === id);
//     return item ? item.quantity : 0;
//   };

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 100 },
//     visible: { opacity: 1, y: 0, transition: { duration: 1 } },
//   };

//   return (
//     <div className="py-10">
//       <h2 className="text-3xl  font-bold font-fredoka text-center mb-8">
//         Featured Dishes
//       </h2>

//       <motion.div
//         variants={cardVariants}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         ref={ref}
//       >
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {featuredDishes.map((dish) => (
//             /* cart div */
//             <div
//               key={dish.id}
//               className="bg-white shadow-md rounded-[18px] border-[3px] border-[#FFD40D] overflow-hidden transform hover:scale-105 transition-transform duration-300"
//             >
//               <h1 className="bg-[#FFD40D] rounded-[35px] w-[40px] h-[40px] flex items-center justify-center absolute top-2 left-2 ">
//                 Sale
//               </h1>

//               <div className="bg-red w-[200px] h-[70px] -z-50 rounded-[100px] mx-auto relative top-[119px] "></div>
//               <img
//                 src={dish.image}
//                 alt={dish.name}
//                 className="w-full mx-auto h-48 object-contain  p-4"
//               />

//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{dish.name}</h3>
//                 <div className="flex gap-1 items-center mt-2">
//                   <p className="line-through text-gray-500">
//                     {dish.previousPrice}
//                   </p>
//                   <p className="text-red-500 font-bold">${dish.salePrice}</p>
//                 </div>
//               </div>

//               {getQuantity(dish.id) > 0 && (
//                 <p className="font-[900] size[48px] font-fredoka text-gray-700  w-4 h-4 bg-green-300 text-sm rounded-full flex absolute items-center justify-center right-5 bottom-9">
//                   {getQuantity(dish.id)}
//                 </p>
//               )}

//               <div
//                 onClick={() => addToCart((dish  as unknown as CartItem))}
//                 className="w-[30px] h-[30px] rounded-[7px] bg-[#FFD40D] flex justify-center items-center absolute right-4 bottom-1 cursor-pointer"
//               >
//                 <img
//                   src="/src/assets/images/Symbolcart.png"
//                   alt=""
//                   className="size-3"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FeaturedDishes;

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { featuredDishes } from "../Components/data";
import { useCart } from "../context/CartContext";
import { CartItem } from "../context/CartContext"; // Import the CartItem type

interface FeaturedDish {
  id: number; // Match the id type in your demo data
  name: string;
  salePrice: number;

  image: string;
}

const FeaturedDishes = () => {
  const { cart, addToCart } = useCart();

  // Function to get the quantity of an item from the cart
  const getQuantity = (id: number) => {
    const item = cart.find((cartItem) => cartItem._id === id);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (dish: FeaturedDish) => {
    const cartItem: CartItem = {
      _id: dish.id, // Use id directly as a number
      name: dish.name,
      price: dish.salePrice,
      image: dish.image,
      quantity: 1, // Initial quantity
    };
    addToCart(cartItem);
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold font-fredoka text-center mb-8">
        Featured Dishes
      </h2>

      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        ref={ref}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white shadow-md rounded-[18px] border-[3px] border-[#FFD40D] overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <h1 className="bg-[#FFD40D] rounded-[35px] w-[40px] h-[40px] flex items-center justify-center absolute top-2 left-2 ">
                Sale
              </h1>

              <div className="bg-red w-[200px] h-[70px] -z-50 rounded-[100px] mx-auto relative top-[119px] "></div>
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full mx-auto h-48 object-contain p-4"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <div className="flex gap-1 items-center mt-2">
                  <p className="line-through text-gray-500">
                    {dish.previousPrice}
                  </p>
                  <p className="text-red-500 font-bold">${dish.salePrice}</p>
                </div>
              </div>

              {getQuantity(dish.id) > 0 && (
                <p className="font-[900] size[48px] font-fredoka text-gray-700 w-4 h-4 bg-green-300 text-sm rounded-full flex absolute items-center justify-center right-5 bottom-9">
                  {getQuantity(dish.id)}
                </p>
              )}

              <div
                onClick={() => handleAddToCart(dish)}
                className="w-[30px] h-[30px] rounded-[7px] bg-[#FFD40D] flex justify-center items-center absolute right-4 bottom-1 cursor-pointer"
              >
                <img
                  src="/src/assets/images/Symbolcart.png"
                  alt=""
                  className="size-3"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedDishes;
