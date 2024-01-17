const ProductsCard = ({ product }) => {
    // console.log(product)
    const { image, company, name, price, weight } = product || {}
    return (
        <div>
            <div className="bg-white shadow-md rounded-xl max-w-md mx-auto">
                <div className="text-center">
                    <img src={image} alt="Product" className="mx-auto w-32 h-32 object-cover" />
                </div>
                <div className="px-4 py-5">
                    <div className="flex justify-between">
                        <span className="text-lg font-bold text-black truncate block capitalize">{name}</span>
                        <h2>{weight}</h2>
                    </div>
                    <p className="text-[#de2f6f] mr-3 py-4  text-sm">{company}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-black cursor-auto my-3">Price: ${price}</p>
                        {/* <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
            </del> */}
                        <div className="">
                            <button className="bg-blue-400 text-white px-4 py-2 rounded">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;