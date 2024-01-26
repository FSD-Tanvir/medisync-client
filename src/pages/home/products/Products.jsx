import ProductsCard from "./ProductsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAllProducts from "../../../hooks/useAllProducts";
import { Link } from "react-router-dom";

const Products = () => {
  const category = "all";
  const [products] = useAllProducts({ category });

  // filter product as a category
  const otcProducts = (
    products?.filter((item) => item?.category === "otc") || []
  ).slice(0, 4);
  const womenProducts = (
    products?.filter((item) => item?.category === "women") || []
  ).slice(0, 4);
  const babyProducts = (
    products?.filter((item) => item.category === "baby") || []
  ).slice(0, 4);
  const dentalProducts = (
    products?.filter((item) => item.category === "dental") || []
  ).slice(0, 4);
  const personalProducts = (
    products?.filter((item) => item.category === "personal") || []
  ).slice(0, 4);
  const diabeticProducts = (
    products?.filter((item) => item.category === "diabetic") || []
  ).slice(0, 4);
  const prescriptionProducts = (
    products?.filter((item) => item.category === "prescription") || []
  ).slice(0, 4);

  return (
    <div className="text-black ">
      {/* otc */}
      <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">OTC Medicine</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6 ">
        {otcProducts.map((product) => (
          <ProductsCard key={product._id} product={product} />
        ))}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/all-products/otc`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          See all
        </Link>
      </div>

      {/* women */}
      <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Women Choice</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6">
        {/* <Slider {...sliderSettings}>  */}
        {womenProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
        {/* </Slider> */}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/all-products/women`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          See all
        </Link>
      </div>

      {/* baby */}

      <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Baby Care</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6">
        {/* <Slider {...sliderSettings}> */}
        {babyProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
        {/* </Slider> */}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/all-products/baby`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          See all
        </Link>
      </div>

      {/* dental */}
      <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Dental Care</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6">
        {/* <Slider {...sliderSettings}> */}
        {dentalProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
        {/* </Slider> */}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/all-products/dental`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          See all
        </Link>
      </div>

      {/* personal */}
      <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Personal Care</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6">
        {/* <Slider {...sliderSettings}> */}
        {personalProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
        {/* </Slider> */}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/all-products/personal`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          See all
        </Link>
      </div>

      {/* diabetic */}
      <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Diabetic Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6">
        {/* <Slider {...sliderSettings}> */}
        {diabeticProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
        {/* </Slider> */}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/all-products/diabetic`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          See all
        </Link>
      </div>

      {/* prescription */}
      <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">
        Prescription Medicine
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6">
        {/* <Slider {...sliderSettings}  > */}
        {prescriptionProducts.map((product) => (
          <div key={product.id}>
            <ProductsCard product={product} />
          </div>
        ))}
        {/* </Slider> */}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/all-products/prescription`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          See all
        </Link>
      </div>
    </div>
  );
};

export default Products;
