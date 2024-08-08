import { CartItem,useCart } from "./context/CartContext"; // Import the CartItem type
import { motion, useInView } from "framer-motion";
import { useEffect,useRef,useState } from "react"
import {API_URL} from "./config"
type MenuItem = {
    _id:string,
    name:string,
    image:string,
    price:number,
    category:string,
}
const FoodItems = ({activeCategory}) => {
    const [data, setData] = useState<MenuItem[]>([]);
    const [filterData, setfilterData] = useState<MenuItem[]>([]);
    const { cart, addToCart } = useCart();
    // Function to get the quantity of an item from the cart
  const getQuantity = (id: string) => {
    const item = cart.find((cartItem: { id: string; }) => cartItem.id === id);
    return item ? item.quantity : 0;

    
  };

  const ref = useRef(null)
  const inView = useInView(ref)

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

    useEffect(() => {
        // Define the async function to fetch data
        const fetchData = async () => {
          
            // Make the request to the server
            const response = await fetch(`${API_URL}api/food/list`);
            // Check if the response is okay
            
            // Parse the response as JSON
            const result = await response.json();
            console.log(result);
            // Set the data in state
            setData(result.data);
            setfilterData(result.data);
          
        };
    
        // Call the fetchData function
        fetchData();
      }, []); // Empty dependency array means this useEffect runs once when the component mounts
    if(!data){
        return;
    }
    if(activeCategory!== "all"){
       const results = data.filter(i => i.category=== activeCategory)
       setfilterData(results)
    }
  return (

    <div>
        {/* item parent div */}

        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          ref={ref}
        >
          <div className="grid grid-cols-1 md:w-full w-[80%] md:grid-cols-3 lg:grid-cols-4 gap-4 md:p-6 p-1 mx-auto">
            {filterData.map((item, index) => (
              /* cart div */

              <div
                key={index}
                className="rounded-[20px] rounded-t-none border shadow-lg p-2 ] hover:scale-105 duration-300 relative"
              >
                <img
                  src={API_URL +"images/"+ item.image}
                  alt=""
                  className="w-full h-[150px] object-cover"
                />
                <div>
                  <p className="font-[900] size[48px] font-fredoka">
                    {item.name}
                  </p>
                  <p className="font-[900] size[48px] font-fredoka text-rose-500">
                    ${(item.price)}
                  </p>
                </div>
                {getQuantity(item._id) > 0 && (
                  <p className="font-[900] size[48px] font-fredoka text-gray-700  w-4 h-4 bg-green-300 text-sm rounded-full flex absolute items-center justify-center right-5 bottom-9">
                    {getQuantity(item._id)}
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
  )
}

export default FoodItems