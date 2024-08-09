import FoodItems from "../FoodItems.tsx";
import { useMenuItems } from "../hooks/useMenuItems.ts";
import { CATEGORIES } from "../config.ts";


const Category: React.FC = () => {

  const { filteredItems, category, setSelectedCategory } = useMenuItems();

  return (
    <div id="category-section">
      
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 mt-5">
        {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`w-[150px] h-[150px] rounded-[20px] border-[#E4E4E4] border-4 hover:border-red ${
                category === cat.name
                  ? "bg-red border-red rounded-b-[55px]"
                  : "bg-white"
              }`}
            >
              <div className="flex flex-col items-center gap-6">
                <cat.icon
                  className={`w-[69px] h-[51px] ${
                    category === cat.name ? "text-white" : "text-red"
                  }`}
                />
                <h1 className="font-[900] size[48px] font-fredoka">{cat.name}</h1>
              </div>
            </button>
          ))}
        </div>
      </div>
      { filteredItems?.length > 0 && <FoodItems menuItems={filteredItems}/> }
    </div>
  );
}

export default Category;
