import { useEffect, useState } from "react";
import useAllProducts from "../../hooks/useAllProducts";
import ProductsCard from "../home/products/ProductsCard";
import OTC from "../../assets/CategoryIcons/OTC.png";
import BABY from "../../assets/CategoryIcons/baby.webp";
import DENTAL from "../../assets/CategoryIcons/dental.png";
import DIABETIC from "../../assets/CategoryIcons/diabetic.png";
import PERSONAL from "../../assets/CategoryIcons/personal.png";
import PRESCRIPTION from "../../assets/CategoryIcons/prescription.png";
import WOMEN from "../../assets/CategoryIcons/women.png";
import { useParams } from "react-router-dom";
import CardLoading from "../../assets/Loading/CardLoading";
import { SwiperSlide, Swiper } from "swiper/react";
import CategoryCard from "../home/categories/CategoryCard";


import { Navigation, Pagination, Grid } from "swiper/modules";





const ByProducts = () => {
    const pageSize = 10;
    const [category, setCategory] = useState('all');
    const { cat } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [products, isLoading] = useAllProducts({ category });

    useEffect(() => {
        setCategory(cat);
        window.scroll(0, 0);
        setCurrentPage(1); // Reset current page when category changes
    }, [cat]);

    // const totalPageCount = Math.ceil(products.length / pageSize);

    // // Calculate the index range for the current page
    // const startIndex = (currentPage - 1) * pageSize;
    // const endIndex = Math.min(startIndex + pageSize, products.length);

    // // Slice the products array to get the products for the current page
    // const currentProducts = products.slice(startIndex, endIndex);

    // const handlePageChange = (newPage) => {
    //     setCurrentPage(newPage);
    // };

    // const MAX_VISIBLE_PAGES = 3; // Number of pages to show at a time

    // const renderPaginationButtons = () => {
    //     const buttons = [];
    //     let startPage = Math.max(1, currentPage - Math.floor(MAX_VISIBLE_PAGES / 2));
    //     let endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPageCount);

    //     if (currentPage > totalPageCount - Math.floor(MAX_VISIBLE_PAGES / 2)) {
    //         startPage = Math.max(1, totalPageCount - MAX_VISIBLE_PAGES + 1);
    //         endPage = totalPageCount;
    //     }

    //     if (startPage > 1) {
    //         buttons.push(
    //             <button
    //                 key={1}
    //                 onClick={() => handlePageChange(1)}
    //                 className={`mx-1 px-3 py-1 border ${currentPage === 1 ? 'bg-[#003049] text-white' : 'bg-white'}`}
    //             >
    //                 1
    //             </button>
    //         );

    //         if (startPage > 2) {
    //             buttons.push(<span key="ellipsis-start">...</span>);
    //         }
    //     }

    //     for (let i = startPage; i <= endPage; i++) {
    //         buttons.push(
    //             <button
    //                 key={i}
    //                 onClick={() => handlePageChange(i)}
    //                 className={`mx-1 px-3 py-1 border ${currentPage === i ? 'bg-[#003049] text-white' : 'bg-white'}`}
    //             >
    //                 {i}
    //             </button>
    //         );
    //     }

    //     if (endPage < totalPageCount) {
    //         if (endPage < totalPageCount - 1) {
    //             buttons.push(<span key="ellipsis-end">...</span>);
    //         }

    //         buttons.push(
    //             <button
    //                 key={totalPageCount}
    //                 onClick={() => handlePageChange(totalPageCount)}
    //                 className={`mx-1 px-3 py-1 border ${currentPage === totalPageCount ? 'bg-[#003049] text-white' : 'bg-white'}`}
    //             >
    //                 {totalPageCount}
    //             </button>
    //         );
    //     }

    //     return buttons;
    // };

    // return (
    //     <>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "all" && "All Medicine"}</h2>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "otc" && "OTC Medicine"}</h2>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "women" && "For Women"}</h2>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "baby" && "Baby Care"}</h2>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "diabetic" && "Diabetic Care"}</h2>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "prescription" && "Prescription Medicine"}</h2>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "personal" && "Personal Care"}</h2>
    //         <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">{category === "dental" && "Dental Care"}</h2>
    //         <div className="flex flex-col lg:flex-row gap-5 ">
    //             <SideNavbar setCategory={setCategory} currentCategory={category}></SideNavbar>

    //             {/* for mobile design */}

    //             <div className="block lg:hidden">
    //                 <Swiper
    //                     slidesPerView={2}
    //                     grid={{
    //                         rows: 1,
    //                     }}
    //                     spaceBetween={0}
    //                     pagination={{
    //                         clickable: true,
    //                         el: '.swiper-pagination'
    //                     }}
    //                     navigation={true}
    //                     modules={[Grid, Pagination, Navigation]}
    //                     className="mySwiper"

    //                 >
    //                     <SwiperSlide style={{
    //                         height: '200px'
    //                     }}><CategoryCard icon={OTC} iconName={'OTC medicine'} cat={'otc'} /></SwiperSlide>
    //                     <SwiperSlide style={{
    //                         height: '200px'
    //                     }}><CategoryCard icon={WOMEN} iconName={'For Women'} cat={'women'} /></SwiperSlide>
    //                     <SwiperSlide style={{
    //                         height: '200px'
    //                     }}><CategoryCard icon={BABY} iconName={'Baby Care'} cat={'baby'} /></SwiperSlide>
    //                     <SwiperSlide style={{
    //                         height: '200px'
    //                     }}><CategoryCard icon={DENTAL} iconName={'Dental Care'} cat={'dental'} /></SwiperSlide>
    //                     <SwiperSlide style={{
    //                         height: '200px'
    //                     }}><CategoryCard icon={PERSONAL} iconName={'Personal Care'} cat={'personal'} /></SwiperSlide>
    //                     <SwiperSlide style={{
    //                         height: '200px'
    //                     }}><CategoryCard icon={PRESCRIPTION} iconName={'Prescription Medicine'} cat={'prescription'} /></SwiperSlide>
    //                     <SwiperSlide style={{
    //                         height: '200px'
    //                     }}><CategoryCard icon={DIABETIC} iconName={'Diabetic Care'} cat={'diabetic'} /></SwiperSlide>
    //                 </Swiper>
    //             </div>

    //             {
    //                 isLoading ? <CardLoading /> :
    //                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6 lg:w-4/5">
    //                         {
    //                             currentProducts.map(product => (
    //                                 <ProductsCard key={product._id} product={product} />
    //                             ))
    //                         }
    //                     </div>
    //             }
    //         </div>
    //         <div className="flex justify-center mt-5">
    //             {/* Pagination controls */}
    //             {!isLoading && <div className="flex items-center gap-3">{renderPaginationButtons()}</div>}
    //         </div>
    //     </>

  const totalPageCount = Math.ceil(products.length / pageSize);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, products.length);

  // Slice the products array to get the products for the current page
  const currentProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const MAX_VISIBLE_PAGES = 3; // Number of pages to show at a time

  const renderPaginationButtons = () => {
    const buttons = [];
    let startPage = Math.max(
      1,
      currentPage - Math.floor(MAX_VISIBLE_PAGES / 2)

    );
    let endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPageCount);

    if (currentPage > totalPageCount - Math.floor(MAX_VISIBLE_PAGES / 2)) {
      startPage = Math.max(1, totalPageCount - MAX_VISIBLE_PAGES + 1);
      endPage = totalPageCount;
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`mx-1 px-3 py-1 border ${
            currentPage === 1 ? "bg-[#003049] text-white" : "bg-white"
          }`}
        >
          1
        </button>
      );

      if (startPage > 2) {
        buttons.push(<span key="ellipsis-start">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-1 px-3 py-1 border ${
            currentPage === i ? "bg-[#003049] text-white" : "bg-white"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPageCount) {
      if (endPage < totalPageCount - 1) {
        buttons.push(<span key="ellipsis-end">...</span>);
      }

      buttons.push(
        <button
          key={totalPageCount}
          onClick={() => handlePageChange(totalPageCount)}
          className={`mx-1 px-3 py-1 border ${
            currentPage === totalPageCount
              ? "bg-[#003049] text-white"
              : "bg-white"
          }`}
        >
          {totalPageCount}
        </button>
      );
    }

    return buttons;
  };

  return (
    <>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "all" && "All Medicine"}
      </h2>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "otc" && "OTC Medicine"}
      </h2>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "women" && "For Women"}
      </h2>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "baby" && "Baby Care"}
      </h2>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "diabetic" && "Diabetic Care"}
      </h2>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "prescription" && "Prescription Medicine"}
      </h2>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "personal" && "Personal Care"}
      </h2>
      <h2 className="text-center font-bold text-2xl my-2 lg:mt-5">
        {category === "dental" && "Dental Care"}
      </h2>
      <div className="flex flex-col lg:flex-row gap-5 ">
        <div className="bg-blue-100 rounded-lg  h-fit hidden lg:block  lg:w-1/5 shadow-[-10px_-10px_20px_4px_rgba(0,0,0,0.1),_10px_10px_20px_4px_rgba(0,0,0,0.1)]">
          <ul>
            <li
              onClick={() => setCategory("otc")}
              className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg  ${
                category === "otc" && "bg-blue-300 "
              }`}
            >
              <img className="w-8 h-8" src={OTC} alt="" />
              <h2 className="font-bold text-xl text-text-color-blue">OTC Medicine</h2>
            </li>
            <li
              onClick={() => setCategory("women")}
              className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg  ${
                category === "women" && "bg-blue-300 rounded-lg"
              }`}
            >
              <img className="w-8 h-8" src={WOMEN} alt="" />
              <h2 className="font-bold text-xl text-text-color-blue">For Women</h2>
            </li>
            <li
              onClick={() => setCategory("baby")}
              className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${
                category === "baby" && "bg-blue-300"
              }`}
            >
              <img className="w-8 h-8" src={BABY} alt="" />
              <h2 className="font-bold text-xl text-text-color-blue">Baby Care</h2>
            </li>
            <li
              onClick={() => setCategory("dental")}
              className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${
                category === "dental" && "bg-blue-300"
              }`}
            >
              <img className="w-8 h-8" src={DENTAL} alt="" />
              <h2 className="font-bold text-xl text-text-color-blue">Dental Care</h2>
            </li>
            <li
              onClick={() => setCategory("diabetic")}
              className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${
                category === "diabetic" && "bg-blue-300"
              }`}
            >
              <img className="w-8 h-8" src={DIABETIC} alt="" />
              <h2 className="font-bold text-xl text-text-color-blue">Diabetic Care</h2>
            </li>
            <li
              onClick={() => setCategory("personal")}
              className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${
                category === "personal" && "bg-blue-300"
              }`}
            >
              <img className="w-8 h-8" src={PERSONAL} alt="" />
              <h2 className="font-bold text-xl text-text-color-blue">Personal Care</h2>
            </li>
            <li
              onClick={() => setCategory("prescription")}
              className={`flex gap-2 items-center px-4 py-4 cursor-pointer hover:bg-blue-300 rounded-lg ${
                category === "prescription" && "bg-blue-300"
              }`}
            >
              <img className="w-8 h-8" src={PRESCRIPTION} alt="" />
              <h2 className="font-bold text-xl text-text-color-blue">
                Prescription Medicine
              </h2>
            </li>

            {/* Add more routes as needed */}
          </ul>
        </div>

        {/* for mobile design */}

        <div className="block lg:hidden">
          <Swiper
            slidesPerView={2}
            grid={{
              rows: 1,
            }}
            spaceBetween={0}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
            }}
            navigation={true}
            modules={[Grid, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide
              style={{
                height: "200px",
              }}
            >
              <CategoryCard icon={OTC} iconName={"OTC medicine"} cat={"otc"} />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "200px",
              }}
            >
              <CategoryCard icon={WOMEN} iconName={"For Women"} cat={"women"} />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "200px",
              }}
            >
              <CategoryCard icon={BABY} iconName={"Baby Care"} cat={"baby"} />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "200px",
              }}
            >
              <CategoryCard
                icon={DENTAL}
                iconName={"Dental Care"}
                cat={"dental"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "200px",
              }}
            >
              <CategoryCard
                icon={PERSONAL}
                iconName={"Personal Care"}
                cat={"personal"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "200px",
              }}
            >
              <CategoryCard
                icon={PRESCRIPTION}
                iconName={"Prescription Medicine"}
                cat={"prescription"}
              />
            </SwiperSlide>
            <SwiperSlide
              style={{
                height: "200px",
              }}
            >
              <CategoryCard
                icon={DIABETIC}
                iconName={"Diabetic Care"}
                cat={"diabetic"}
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {isLoading ? (
          <CardLoading />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mx-2 md:mx-8 lg:mx-2  md:gap-6 lg:w-4/5">
            {currentProducts.map((product) => (
              <ProductsCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-center mt-5">
        {/* Pagination controls */}
        {!isLoading && (
          <div className="flex items-center gap-3">
            {renderPaginationButtons()}
          </div>
        )}
      </div>
    </>
  );
};

export default ByProducts;
