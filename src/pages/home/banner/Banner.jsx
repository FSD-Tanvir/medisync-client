// import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Banner.css";
import { bannerImagesArray } from "./bannerImagesArray";


const Banner = () => {
  return (
    <div
      className="shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)]"
      style={{
        borderRadius: "10px",
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          bannerImagesArray && bannerImagesArray.map(bannerImage => (
            <SwiperSlide key={bannerImage?.id} style={{
            borderRadius: "10px",
          }}>
            <div className=" hidden lg:block">
            <img src={bannerImage?.big_banner} className="rounded-lg" alt={`big ${bannerImage?.altText}`} />
          </div>
          <div className="lg:hidden">
            <img src={bannerImage?.small_banner} className="rounded-lg" alt={`small ${bannerImage?.altText}`} />
          </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default Banner;
