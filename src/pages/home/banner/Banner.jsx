import { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "./Banner.css"
import banner1 from "../../../assets/BannerImg/banner1.avif"
import banner2 from "../../../assets/BannerImg/banner2.avif"
import banner3 from "../../../assets/BannerImg/banner3.jpg"
import banner4 from "../../../assets/BannerImg/banner4.jpg"
import banner5 from "../../../assets/BannerImg/banner5.avif"
import banner6 from "../../../assets/BannerImg/banner6.jpg"
import banner7 from "../../../assets/BannerImg/banner7.jpg"
import banner8 from "../../../assets/BannerImg/banner8.avif"
import banner9 from "../../../assets/BannerImg/banner9.webp"

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (

        <div className=''>
            {/* <div className="text-center banner w-full flex flex-col text-white py-40">
                <h1>Welcome To MediSync</h1>
                <p className="mt-1 px-4">In MediSync, where healthcare meets innovation. Our commitment is to synchronize medical excellence with cutting-edge technology, ensuring your well-being is at the forefront of our mission. Explore a seamless blend of compassionate care and advanced solutions, personalized to enhance your health journey. From telemedicine to comprehensive wellness programs, we are your partners in holistic healthcare. Join us in shaping a healthier future, where every click brings you closer to a life of vitality. Experience the synergy of medical expertise and digital precision at MediSync - Your Path to Wellness Begins Here.</p>
            </div> */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={banner1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner8} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={banner9} alt="" />
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;