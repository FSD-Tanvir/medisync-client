// import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductsCard from "./ProductsCard";
// react slick slider css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useAllProducts from "../../../hooks/useAllProducts";



const Products = () => {
    const category = 'all'
    const [products] = useAllProducts({category})
    
    // filter product as a category
    const otcProducts = products?.filter(item => item?.category === 'otc') || [];
    const womenProducts = products?.filter(item => item?.category === 'women') || [];
    const babyProducts = products?.filter(item => item.category === 'baby') || []
    const dentaProducts = products?.filter(item => item.category === 'dental') || []
    const personalProducts = products?.filter(item => item.category === 'personal') || []
    const diabeticProducts = products?.filter(item => item.category === 'diabetic') || []
    const prescriptionProducts = products?.filter(item => item.category === 'prescription') || []

    const sliderSettings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024, // for large devices like desktops
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // for tablets
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480, // for mobile devices
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    return (
        <div>
            <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">OTC Medicine</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {otcProducts.map(product => (
                        <ProductsCard key={product._id} product={product} />
                    ))}
                </Slider>
            </div>

            <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Women Choice</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {womenProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Baby Care</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {babyProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Dental Care</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {dentaProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Personal Care</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {personalProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Diabetic Products</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {diabeticProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold pl-2">Prescription Medisync</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {prescriptionProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Products;
