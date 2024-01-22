import { useEffect, useState } from "react";
import Slider from "react-slick";
import ProductsCard from "./ProductsCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Products = () => {
    const [products, setProducts] = useState();

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from an API endpoint (replace with your API URL)
                const response = await fetch('product.json');
                const result = await response.json();

                // Update the state with the fetched data
                setProducts(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    const otcProducts = products?.filter(item => item?.category === 'otc') || [];
    const womenProducts = products?.filter(item => item?.category === 'women') || [];
    const babyProducts = products?.filter (item => item.category === 'baby') || []
    const dentaProducts = products?.filter (item => item.category === 'dental') || []
    const personalProducts = products?.filter (item => item.category === 'personal') || []
    const diabeticProducts = products?.filter (item => item.category === 'diabetic') || []
    const prescriptionProducts = products?.filter (item => item.category === 'prescription') || []

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,

    };

    return (
        <div>
            <h2 className="mt-8 mb-8 text-2xl font-bold">OTC Medicine</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {otcProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>

            <h2 className="mt-8 mb-8 text-2xl font-bold">Women Choice</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {womenProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold">Baby Care</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {babyProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold">Dental Care</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {dentaProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold">Personal Care</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {personalProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold">Diabetic Products</h2>
            <div className="">
                <Slider {...sliderSettings}>
                    {diabeticProducts.map(product => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
                </Slider>
            </div>
            <h2 className="mt-8 mb-8 text-2xl font-bold">Prescription Medisync</h2>
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
