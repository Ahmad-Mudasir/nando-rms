import { MdFoodBank } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiRoastChicken } from "react-icons/gi";
import { useState } from "react";
import { data } from "../data.ts";

function Category() {
  const [foods, setfoods] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");

  //Filter function
  const filterType = (Category: string) => {
    setActiveCategory(Category);
    setfoods(
      data.filter((item) => {
        return item.category === Category;
      })
    );
  };
  return (
    <div>
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
              activeCategory === "all" ? "bg-red border-red rounded-b-[55px]" : "bg-white"
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
              activeCategory === "burger" ? "bg-red border-red rounded-b-[55px]" : "bg-white"
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
              activeCategory === "pizza" ? "bg-red border-red rounded-b-[55px]" : "bg-white"
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
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
                  {item.price}
                </p>
              </div>
              <div className="w-[30px] h-[30px] rounded-[7px] bg-[#FFD40D] flex justify-center items-center absolute right-4 bottom-1 cursor-pointer">
                <img
                  src="/src/assets/images/Symbolcart.png"
                  alt=""
                  className="size-3"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
