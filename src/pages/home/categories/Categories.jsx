import CategoryCard from "./CategoryCard";
import OTC from "../../../assets/CategoryIcons/OTC.png";
import women from "../../../assets/CategoryIcons/women.png";
import baby from "../../../assets/CategoryIcons/baby.webp";
import dental from "../../../assets/CategoryIcons/dental.png";
import personal from "../../../assets/CategoryIcons/personal.png";
import prescription from "../../../assets/CategoryIcons/prescription.png";
import sexual from "../../../assets/CategoryIcons/sexual.png";
import diabatic from "../../../assets/CategoryIcons/diabetic.png";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Grid } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Grid, Pagination,Navigation } from 'swiper/modules';
import "./styles.css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Categories = () => {

  const [slidesPerViewNumber, setSlidesPerViewNumber] = useState(0)

  useEffect(()=>{
    const checkWidth = () =>{
      if(window.innerWidth <= 350){
        setSlidesPerViewNumber(2)
      }if(window.innerWidth > 350){
        setSlidesPerViewNumber(2.5)
      }if(window.innerWidth > 415){
        setSlidesPerViewNumber(2.7)
      }if(window.innerWidth > 425){
        setSlidesPerViewNumber(3)
      }
      if(window.innerWidth > 490){
        setSlidesPerViewNumber(3.4)
      }
      if(window.innerWidth > 561){
        setSlidesPerViewNumber(3.8)
      }
      if(window.innerWidth > 632){
        setSlidesPerViewNumber(4.2)
      }
      if(window.innerWidth > 715){
        setSlidesPerViewNumber(4.7)
      }
      if(window.innerWidth > 840){
        setSlidesPerViewNumber(6)
      }
      
    }
    // initial call 
    checkWidth()

    // call if window is resized
    window.addEventListener("resize", checkWidth)

    return () =>{
      window.removeEventListener("resize", checkWidth)
    }
  },[])

  return (
    <div className="px-1">
      <h1 className="text-2xl  font-bold text-black">Categories </h1>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
      <div className="">
        <Swiper
          slidesPerView={slidesPerViewNumber}
          grid={{
            rows: 1,
          }}
          spaceBetween={5}
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
            <CategoryCard icon={women} iconName={"For Women"} cat={"women"} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "200px",
            }}
          >
            <CategoryCard icon={baby} iconName={"Baby Care"} cat={"baby"} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "200px",
            }}
          >
            <CategoryCard
              icon={dental}
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
              icon={personal}
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
              icon={prescription}
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
              icon={sexual}
              iconName={"Sexual Medicine"}
              cat={"sexual"}
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "200px",
            }}
          >
            <CategoryCard
              icon={diabatic}
              iconName={"Diabetic Care"}
              cat={"diabetic"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* For phone  */}
      {/* <div className="block lg:hidden">
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
            <CategoryCard icon={women} iconName={"For Women"} cat={"women"} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "200px",
            }}
          >
            <CategoryCard icon={baby} iconName={"Baby Care"} cat={"baby"} />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "200px",
            }}
          >
            <CategoryCard
              icon={dental}
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
              icon={personal}
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
              icon={prescription}
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
              icon={sexual}
              iconName={"Sexual Medicine"}
              cat={"sexual"}
            />
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "200px",
            }}
          >
            <CategoryCard
              icon={diabatic}
              iconName={"Diabetic Care"}
              cat={"diabetic"}
            />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
};

export default Categories;
