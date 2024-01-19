import { useState } from "react";


const ArtilicesCard = ({ articlie }) => {
    const { title, image, description } = articlie || {};
    const [showFullDescription, setShowFullDescription] = useState(false);

    // const toggleDescription = () => {
    //     setShowFullDescription(!showFullDescription);
    // };

    const truncatedDescription = `${description.split(' ').slice(0, 15).join(' ')}...`;

    return (
        <div className="max-w-md mx-auto mb-8">
            <div className="border-2 h-[350px]">
                <div className="h-32">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="px-3 py-5">
                    <h2 className="text-cyan-600 text-lg font-semibold">{title}</h2>
                    <p className="text-slate-700 font-normal">
                        {showFullDescription ? description : truncatedDescription}
                    </p>
                    {/* {description.split(' ').length > 50 && (
                        <div className="text-right pt-1">
                            <button
                                className="text-yellow-600 text-sm font-semibold content-end"
                                onClick={toggleDescription}
                            >
                                {showFullDescription ? 'Read Less' : 'Read More'}
                            </button>
                        </div>
                    )} */}
                    <button>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default ArtilicesCard;
