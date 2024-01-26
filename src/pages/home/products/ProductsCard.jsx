const ProductsCard = ({ product }) => {
  // Destructure product properties
  const { image, company, name, price, weight } = product || {};
  // const isHomePage = location.pathname === "/" || false;

  return (
    <div 
    // className={`${isHomePage && " shadow-xl  h-[262px] mx-1 md:mx-5 md:h-[240px] lg:mx-2 lg:h-[320px] xl:h-[235px]"}   shadow-xl  `}
    >
      <div className="bg-white rounded-xl px-1  flex flex-col w-full h-full  ">
        <div>
          <img
            src={image}
            alt=""
            className=" mx-auto w-full py-1 object-fill h-[85px] md:h-[130px] lg:h-[120px]"
          />
        </div>
        <div className="flex-grow flex flex-col ">
          <div className="flex flex-col flex-grow sm:flex-row lg:flex-col xl:flex-row sm:justify-between lg:justify-normal xl:justify-between sm:gap-2 mb-1">
            <h1 className="font-bold text-black capitalize text-sm sm:text-base md:text-sm lg:text-base xl:text-sm">
              {name}
            </h1>
            <p className="text-sm">{weight}</p>
          </div>
          <p className="text-gray-700 text-xs mb-1">{company}</p>
        </div>
        <div className="my-2 flex justify-between flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-center lg:items-start xl:items-center  gap-2">
          <p className="text-sm font-semibold text-black">Price: ${price}</p>
          <button className="bg-[#003049] text-white py-2 px-2 rounded-md text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs lg:w-full xl:w-fit">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
