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
import banner1 from "../../../assets/BannerImg/1.png";
import banner2 from "../../../assets/BannerImg/2.png";
import banner3 from "../../../assets/BannerImg/3.png";
import banner4 from "../../../assets/BannerImg/4.png";
import smallB1 from "../../../assets/BannerImg/smallB1.png";
import smallB2 from "../../../assets/BannerImg/smallB2.png";
import smallB3 from "../../../assets/BannerImg/smallB3.png";
import smallB4 from "../../../assets/BannerImg/smallB4.png";
// import banner5 from "../../../assets/BannerImg/banner5.png"

const Banner = () => {
  return (
    <div
      className="shadow-[-5px_-5px_15px_4px_rgba(0,0,0,0.1),_5px_5px_15px_4px_rgba(0,0,0,0.1)] "
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
        <SwiperSlide
          style={{
            borderRadius: "10px",
          }}
        >
          <div className=" hidden lg:block ">
            <img src={banner1} className="rounded-lg" alt="" />
          </div>
          <div className="lg:hidden">
            <img src={smallB1} className="rounded-lg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: "10px",
          }}
        >
          <div className=" hidden lg:block ">
            <img src={banner2} className="rounded-lg" alt="" />
          </div>
          <div className=" lg:hidden ">
            <img src={smallB2} className="rounded-lg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: "10px",
          }}
        >
          <div className=" hidden lg:block ">
            <img src={banner3} className="rounded-lg" alt="" />
          </div>
          <div className=" lg:hidden ">
            <img src={smallB3} className="rounded-lg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            borderRadius: "10px",
          }}
        >
          <div className=" hidden lg:block ">
            <img src={banner4} className="rounded-lg" alt="" />
          </div>
          <div className=" lg:hidden">
            <img src={smallB4} className="rounded-lg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
