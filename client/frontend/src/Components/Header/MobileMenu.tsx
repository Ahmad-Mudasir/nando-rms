import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const MobileMenu = () => {
  const [isOpen, setisOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <>
      <div
        className="flex flex-col gap-1 cursor-pointer transition-all ease-in-out duration-700"
        onClick={() => setisOpen((prev) => !prev)}
      >
        <div
          className={`bg-gray-700 w-6 h-1 rounded-md ${
            isOpen ? "rotate-45" : " "
          } origin-left transition-all ease-in-out duration-700`}
        ></div>
        <div
          className={`bg-gray-700 w-4 h-1 rounded-md ${
            isOpen ? "opacity-0" : " "
          }`}
        ></div>
        <div
          className={`bg-gray-700 w-6 h-1 rounded-md ${
            isOpen ? "-rotate-45" : " "
          } origin-left   transition-all ease-in-out duration-700`}
        ></div>

        {isOpen && (
          <div className="absolute top-16 p-10 h-[calc(100vh - 30px)] left-0 flex flex-col w-full justify-center items-center   bg-[#f25555] transition-all duration-1000 ease-in-out">
            <ul className="flex flex-col gap-8">
              <li>
                <Link
                  to="/"
                  className={`font-[900] size[48px] font-fredoka text[#212121]  capitalize hover:text-white transition-all ease-in-out duration-200 ${
                    activeLink === "/" ? "text-white" : "text-[#212121]"
                  } `}
                  onClick={() => setActiveLink("/")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/orders"
                  className={`font-[900] size[48px] font-fredoka text[#212121]  capitalize hover:text-white transition-all ease-in-out duration-200 ${
                    activeLink === "/orders" ? "text-white" : "text-[#212121]"
                  } `}
                  onClick={() => setActiveLink("/orders")}
                >
                  My Orders
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  className={`font-[900] size[48px] font-fredoka text[#212121] capitalize  hover:text-white transition-all ease-in-out duration-200 ${
                    activeLink === "/About" ? "text-white" : "text-[#212121]"
                  } `}
                  onClick={() => setActiveLink("About")}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="Contact"
                  className={`font-[900] size[48px] font-fredoka text[#212121] capitalize  hover:text-white transition-all ease-in-out duration-200 ${
                    activeLink === "/Contact" ? "text-white" : "text-[#212121]"
                  }`}
                  onClick={() => setActiveLink("Contact")}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
