
import { Link } from "react-router-dom";

import Button from "../../../components/shared/button/Button";


const ProductsCard = ({ product }) => {
  // Destructure product properties
  const { image, company, name, price, weight } = product || {};
  // console.log(product)

  return (

    <div>
      <Link to={`/product-details/${product._id}`}>
      <div className="flex flex-col w-full h-full gap-2 bg-[#FFF7F4]  shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl ">
        <div>
          <img
            src={image}
            alt=""
            className=" mx-auto w-full  rounded-t-xl  object-fill h-[85px] md:h-[130px] lg:h-[120px]"
          />
        </div>
        <div className="flex-grow flex flex-col px-2">
          <div className="flex flex-col flex-grow sm:flex-row lg:flex-col xl:flex-row sm:justify-between lg:justify-normal xl:justify-between sm:gap-2 mb-1">
            <h1 className="font-bold text-black capitalize text-sm sm:text-base md:text-sm lg:text-base xl:text-sm">
              {name}
            </h1>
            <p className="text-sm">{weight}</p>
          </div>
          <p className="text-gray-700 text-xs mb-1">{company}</p>
        </div>
        <div className="my-2  px-2 flex justify-between flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-center lg:items-start xl:items-center  gap-2">
          <p className="text-sm font-semibold text-black ">Price: ${price}</p>
          <Button btnName="add to cart" classForButton="px-2 text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs lg:w-full xl:w-fit"/>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default ProductsCard;
