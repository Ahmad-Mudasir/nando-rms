

//import '/src/assets/images/home.png';

const Home = () => {
  return (
    <>
    <div className="lg:pt-[150px] pt-[60px] bg-[url('/src/assets/images/home.png')]  h-[710px] bg-no-repeat  w-full bg-contain">
         <div>
          <div className="md:container px-5 mx-auto text-white ">
            <div className="flex justify-between mb-20">
              {/* for left side  */}
              <div className="text-white lg::w-1/2 w-full ">
                 <h1 className="lg:text-[60px] md:text-[45px] text-[25px] font-medium font-[sans-serif]">The Perfect Space to </h1>
                 <h1 className="lg:text-[60px] md:text-[45px] text-[25px] font-medium font-[sans-serif]">Enjoy Fantastic Food</h1>
     <p className="text[#FFFFFF] lg:text-[20px] text-sm font-normal pt-5 lg::w-full w-1/2 ">Festive dining at Farthings where we are strong believers inusing the very best produce</p>
              </div>
              {/* for right side  */}
               <div className="relative">
               <div className="bg-white h-40 w-40  text-white absolute -left-20 top-20">right</div>
               </div>
            </div>
          </div>
       </div>
       </div>
    </>
  )
}

export default Home


