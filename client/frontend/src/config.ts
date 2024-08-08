import { FaLeaf, FaPizzaSlice, FaIceCream, FaBreadSlice, FaCarrot, FaAppleAlt } from "react-icons/fa";
import { MdFoodBank, MdOutlineRamenDining } from "react-icons/md";

export const API_URL = "http://localhost:4000/";
export const CATEGORIES = [
    { name: "All", icon: MdFoodBank },
    { name: "Salad", icon: FaCarrot },
    { name: "Deserts", icon: FaIceCream },
    { name: "Sandwich", icon: FaBreadSlice },
    { name: "Cake", icon: FaAppleAlt },
    { name: "Pure Veg", icon: FaLeaf },
    { name: "Pasta", icon: FaPizzaSlice },
    { name: "Noodles", icon: MdOutlineRamenDining },
    
]