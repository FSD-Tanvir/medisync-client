

const ProductsCard = ({ product }) => {
  // Destructure product properties
  const { image, company, name, price, weight } = product || {};

  return (
    <div className="bg-white shadow-md rounded-xl mx-auto h-[280px] sm:h-[320px] md:h-[280px] lg:h-[320px] xl:h-[280px]"style={{ margin: "10px" }}>
      <div className="text-center">
        <div className="h-32 sm:h-40 md:h-32 lg:h-40 xl:h-32">
          <img src={image} alt="Product" className="mx-auto w-full h-full object-cover" />
        </div>
      </div>
      <div className="px-4 py-2">
        <div className="flex justify-between">
          <span className="font-bold text-black capitalize text-sm sm:text-base md:text-sm lg:text-base xl:text-sm">
            {name}
          </span>
          <h2 className="text-sm">{weight}</h2>
        </div>
        <p className="text-gray-700 py-2 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs">{company}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-black">Price: ${price}</p>
          <div className="">
            <button className="bg-cyan-400 text-white py-2 px-2 rounded text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
