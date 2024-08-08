import Category from "./Category";
import StarRating from "./StarRating";
import FeaturedDishes from "../Components/FeaturedDishes";
import Images from "./Images";
import Footer from "./Footer";

const Home = () => {



return (
<>

<div className="lg:pt-[150px] md:pt-[60px] pt-[90px] bg-[url('/src/assets/images/home.png')] bg-cover bg-center h-auto min-h-[600px] w-full">
<div>
<div className="container px-5 mx-auto text-white">
<div className="flex flex-col lg:flex-row justify-between mb-20">
{/* Left side */}
<div className="text-white lg:w-1/2 w-full">
<h1 className=" md:text-[60px] text-[40px] font-[900] size[48px] font-fredoka">
The Perfect Space to
</h1>
<h1 className=" md:text-[60px] text-[40px] font-[900] size[48px] font-fredoka">
Enjoy Fantastic Food
</h1>
<p className="text-[#FFFFFF] text-[20px] font-normal pt-5 w-full">
Festive dining at Farthings where we are strong believers in
using the very best produce
</p>
</div>
{/* Right side */}
<div className="relative mt-14 lg:mt-52 lg:w-1/2 w-full flex justify-end">
<div className="bg-[#000000] h-[160px] lg:h-[192px] lg:w-[399.22px] w-[360px] text-white rounded-[30px] border-[#FFD40D] border-4 opacity-85 flex justify-between px-6">
{/* left section in right box */}
<div className="flex flex-col top-[46.17px] relative gap-2">
<h1 className="font-[900] size[48px] font-fredoka">
<span className="text-red">$</span>99
</h1>
<h1 className="font-[900] size[22px] font-fredoka">
Special Pizza
</h1>
<div className="flex">
<StarRating />
</div>
</div>

<div className="flex items-center">
<img
className=" lg:h-[150px] h-[130px] top-[21px]"
src="/src/assets/images/pizza.png"
alt="pizza"
/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

{/* Category and food item section */}
<div>
<Category />
</div>
{/* FeaturedDishes section */}
<div className="container mx-auto pl-12 pr-12 bg-[#F5F8FD] max-w-[1900px] min-h-[520px] ">
<FeaturedDishes />
</div>

{/* images section */}
<div className="mt-12">
<Images />
</div>

{/* Footer section */}
<div>
<Footer />
</div>
</>
);
};

export default Home;