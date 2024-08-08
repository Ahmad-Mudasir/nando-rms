import { MdFoodBank } from "react-icons/md";
import { FaBurger } from "react-icons/fa6";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiRoastChicken } from "react-icons/gi";
import { useState } from "react";




import FoodItems from "../../FoodItems.tsx";
function Category() {
  
  const [activeCategory, setActiveCategory] = useState("all");
  

  

  //Filter function
  const filterType = (Category: string) => {
    setActiveCategory(Category);
   /*  setfoods(
      data.filter((item) => {
        return item.category === Category;
      })
    ); */
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
             /*  setfoods(data); */
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
            onClick={() => filterType("Salad")}
            className={`w-[150px] h-[150px] rounded-[20px] border-[#E4E4E4] border-4 hover:border-red ${
              activeCategory === "Salad"
                ? "bg-red border-red rounded-b-[55px]"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              <FaBurger
                className={`w-[69px] h-[51px] ${
                  activeCategory === "Salad" ? "text-white" : "text-red"
                }`}
              />
              <h1 className="font-[900] size[48px] font-fredoka">Salad</h1>
            </div>
          </button>

          <button
            onClick={() => filterType("Rolls")}
            className={`w-[150px] h-[150px] rounded-[20px] border-[#E4E4E4] border-4  hover:border-red ${
              activeCategory === "Rolls"
                ? "bg-red border-red rounded-b-[55px]"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              <FaPizzaSlice
                className={`w-[69px] h-[51px] ${
                  activeCategory === "Rolls" ? "text-white" : "text-red"
                }`}
              />
              <h1 className="font-[900] size[48px] font-fredoka">Rolls</h1>
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
      <FoodItems activeCategory ={activeCategory}/>
    </div>
  );
}

export default Category;
