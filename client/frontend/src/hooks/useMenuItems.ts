import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { MenuItem } from "../types";

export const useMenuItems = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [category, setCategory] = useState<string>("All");


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${API_URL}api/food/list`);            
            const result = await response.json();
            setMenuItems(result.data);
        };
        fetchData();
    }, []); 


    const filteredItems = category === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === category);


    const setSelectedCategory = (newCategory: string) => {
        setCategory(newCategory);
    };


    return { menuItems, filteredItems, category, setSelectedCategory };
};