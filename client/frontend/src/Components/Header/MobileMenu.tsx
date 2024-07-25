import { useState } from "react"
import { Link } from "react-router-dom";
const MobileMenu = () => {
     const[isOpen, setisOpen] = useState(false)
    return (
      <>

<div className="flex flex-col gap-1 cursor-pointer transition-all ease-in-out duration-700" onClick={() => setisOpen((prev) => !prev)}>
        <div className={`bg-gray-700 w-6 h-1 rounded-md ${isOpen ? "rotate-45" : " "} origin-left transition-all ease-in-out duration-700`}></div>
        <div className={`bg-gray-700 w-4 h-1 rounded-md ${isOpen ? "opacity-0" : " "}`}></div>
        <div className={`bg-gray-700 w-6 h-1 rounded-md ${isOpen ? "-rotate-45" : "no"} origin-left transition duration-300 ease-in-out transition-all ease-in-out duration-700`}></div>

        {
          isOpen &&(
            <div className="absolute top-16 p-10 h-[calc(100vh - 30px)] left-0 flex flex-col w-full justify-center items-center  bg-blue-300 transition-all ease-in-out duration-700">
                <ul className="flex flex-col gap-8">
            <li>
              <Link
                to="/"
                className="size[18px] font-medium text[#212121] capitalize"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="About"
                className="size[18px] font-medium text[#212121] capitalize "
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="Contact"
                className="size[18px] font-medium text[#212121] capitalize"
              >
                contact
              </Link>
            </li>
          </ul>
            </div>
          )
        }
   </div>
    
      </>
    )
  }
  
  export default MobileMenu