const ProductsCard = ({ product }) => {
    // console.log(product)
    const { image, company, name, price, weight } = product || {}
    return (
        <div>
            <div className="bg-white shadow-md rounded-xl  mx-auto h-[280px]">
                <div className="text-center">
                    <div className="h-32">
                        <img src={image} alt="Product" className="mx-auto w-full h-full object-cover" />
                    </div>
                </div>
                <div className="px-4 py-2">
                    <div className="flex justify-between">
                        <span className="text-base font-bold text-black capitalize">{name}</span>
                        <h2 className="text-sm">{weight}</h2>
                    </div>
                    <p className="text-gray-700  py-4 text-sm">{company}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-black">Price: ${price}</p>
                        <div className="">
                            <button className="bg-cyan-400 text-white  py-2 px-2 rounded">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;