import { MdFoodBank } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiRoastChicken } from "react-icons/gi";
import { useState } from "react";
import { data } from "../data.ts";
import { useCart } from "../../context/CartContext";
import { CartItem } from "../../context/CartContext"; // Import the CartItem type
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Category() {
  const [foods, setfoods] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");
  const { cart, addToCart } = useCart();

  // Function to get the quantity of an item from the cart
  const getQuantity = (id: number) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  //Filter function
  const filterType = (Category: string) => {
    setActiveCategory(Category);
    setfoods(
      data.filter((item) => {
        return item.category === Category;
      })
    );
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
    <div id="category-section">
      {/* parrent div for category */}
      <div className="flex justify-center items-center">
        {/* category div */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 mt-5 ">
          <button
            onClick={() => {
              setActiveCategory("all");
              setfoods(data);
            }}
            className={`w-[150px] h-[150px] rounded-[20px] border-[#E4E4E4] border-4  hover:border-red ${
              activeCategory === "all"
                ? "bg-red border-red rounded-b-[55px]"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              <MdFoodBank
                className={`w-[69px] h-[51px] ${
                  activeCategory === "all" ? "text-white" : "text-red"
                }`}
              />
              <h1 className="font-[900] size[48px] font-fredoka">All</h1>
            </div>
          </button>

          <button
            onClick={() => filterType("burger")}
            className={`w-[150px] h-[150px] rounded-[20px] border-[#E4E4E4] border-4 hover:border-red ${
              activeCategory === "burger"
                ? "bg-red border-red rounded-b-[55px]"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              <FaBurger
                className={`w-[69px] h-[51px] ${
                  activeCategory === "burger" ? "text-white" : "text-red"
                }`}
              />
              <h1 className="font-[900] size[48px] font-fredoka">Burger</h1>
            </div>
          </button>

          <button
            onClick={() => filterType("pizza")}
            className={`w-[150px] h-[150px] rounded-[20px] border-[#E4E4E4] border-4  hover:border-red ${
              activeCategory === "pizza"
                ? "bg-red border-red rounded-b-[55px]"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              <FaPizzaSlice
                className={`w-[69px] h-[51px] ${
                  activeCategory === "pizza" ? "text-white" : "text-red"
                }`}
              />
              <h1 className="font-[900] size[48px] font-fredoka">Pizza</h1>
            </div>
          </button>

          <button
            onClick={() => filterType("chicken")}
            className={`w-[150px] h-[150px] rounded-[20px] border-[#E4E4E4] border-4  hover:border-red ${
              activeCategory === "chicken"
                ? "bg-red border-red rounded-b-[55px]"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              <GiRoastChicken
                className={`w-[69px] h-[51px] ${
                  activeCategory === "chicken" ? "text-white" : "text-red"
                }`}
              />
              <h1 className="font-[900] size[48px] font-fredoka">Chiken</h1>
            </div>
          </button>
        </div>
      </div>

      {/* food item section */}
      <div>
        {/* item parent div */}

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <div className="grid grid-cols-1 md:w-full w-[80%] md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-6 p-1 mx-auto">
            {foods.map((item, index) => (
              /* cart div */

              <div
                key={index}
                className="rounded-[20px] rounded-t-none border shadow-lg p-2 ] hover:scale-105 duration-300 relative"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-[150px] object-cover"
                />
                <div>
                  <p className="font-[900] size[48px] font-fredoka">
                    {item.name}
                  </p>
                  <p className="font-[900] size[48px] font-fredoka text-rose-500">
                    ${Number(item.price)}
                  </p>
                </div>
                {getQuantity(item.id) > 0 && (
                  <p className="font-[900] size[48px] font-fredoka text-gray-700  w-4 h-4 bg-green-300 text-sm rounded-full flex absolute items-center justify-center right-5 bottom-9">
                    {getQuantity(item.id)}
                  </p>
                )}
                <div
                  onClick={() => addToCart(item as unknown as CartItem)}
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
    </div>
  );
}

export default Category;
