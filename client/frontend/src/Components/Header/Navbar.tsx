import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
import MobileMenu from "../../Components/Header/MobileMenu";
const Navbar = () => {
  return (
    <div className="lg:py-8 py-5 bg-[#d2cbcb] top-0 sticky z-50">
      <div className="md:container mx-auto px-5">
        {/* parent div  */}
        <div className="flex justify-around items-center">
          {/* for  logo */}
          <div>
            <Link
              to="/"
              className="text-lg  text-red font-[900] size[48px] font-fredoka "
            >
              Nando
            </Link>
          </div>

          {/* for nav links */}
          <ul className="md:flex hidden gap-5 ">
            <li>
              <Link
                to="/"
                className="font-[900] size[48px] font-fredoka text[#212121] capitalize"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                className="font-[900] size[48px] font-fredoka text[#212121] capitalize"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                className="font-[900] size[48px] font-fredoka text[#212121] capitalize"
              >
                contact
              </Link>
            </li>
          </ul>

          {/* right side */}
          <div className="">
            <div className="flex relative">
              <span>
                <FaShoppingBasket className="text-green-500" />
              </span>
              <div className="absolute -top-4 left-3 w-5 h-5 bg-black rounded-full flex items-center justify-center">
                <h6 className="text-white">0</h6>
              </div>
            </div>
          </div>
          {/* for mobile screen */}
          <div className="md:hidden flex">
            <MobileMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
