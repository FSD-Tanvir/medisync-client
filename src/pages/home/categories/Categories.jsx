import CategoryCard from "./CategoryCard";
import OTC from '../../../assets/CategoryIcons/OTC.png'
import women from '../../../assets/CategoryIcons/women.png'
import baby from '../../../assets/CategoryIcons/baby.webp'
import dental from '../../../assets/CategoryIcons/dental.png'
import personal from '../../../assets/CategoryIcons/personal.png'
import prescription from '../../../assets/CategoryIcons/prescription.png'
import sexual from '../../../assets/CategoryIcons/sexual.png'
import diabatic from '../../../assets/CategoryIcons/diabetic.png'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Grid, Pagination,Navigation } from 'swiper/modules';
import './styles.css'
import 'swiper/css/grid';
import 'swiper/css/pagination';



const Categories = () => {

    
    return (
        <div className="px-1">
            <h1 className="text-2xl  font-bold text-black">Categories </h1>
            {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper"> */}
            <div className="hidden lg:block">
                <Swiper
                    slidesPerView={6}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    navigation={true}
                    modules={[Grid, Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                        paddingLeft: "30px",
                        paddingRight: "30px"
                    }}
                >
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={OTC} iconName={'OTC medicine'} cat={'otc'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={women} iconName={'For Women'} cat={'women'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={baby} iconName={'Baby Care'} cat={'baby'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={dental} iconName={'Dental Care'} cat={'dental'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={personal} iconName={'Personal Care'} cat={'personal'} /></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={prescription} iconName={'Prescription Medicine'}  cat={'prescription'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={sexual} iconName={'Sexual Medicine'} cat={'sexual'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={diabatic} iconName={'Diabetic Care'} cat={'diabetic'}/></SwiperSlide>
                </Swiper>
            </div>
            {/* For phone  */}
            <div className="block lg:hidden">
            <Swiper
                    slidesPerView={2}
                    grid={{
                        rows: 1,
                    }}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    navigation={true}
                    modules={[Grid, Pagination, Navigation]}
                    className="mySwiper"
                    
                >
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={OTC} iconName={'OTC medicine'} cat={'otc'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={women} iconName={'For Women'} cat={'women'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={baby} iconName={'Baby Care'} cat={'baby'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={dental} iconName={'Dental Care'} cat={'dental'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={personal} iconName={'Personal Care'} cat={'personal'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={prescription} iconName={'Prescription Medicine'} cat={'prescription'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={sexual} iconName={'Sexual Medicine'} cat={'sexual'}/></SwiperSlide>
                    <SwiperSlide style={{
                        height:'200px'
                    }}><CategoryCard icon={diabatic} iconName={'Diabetic Care'} cat={'diabetic'}/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Categories;