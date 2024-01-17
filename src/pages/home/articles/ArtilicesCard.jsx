import { useState } from "react";


const ArtilicesCard = ({ articlie }) => {
    const { title, image, description } = articlie || {};
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const truncatedDescription = `${description.split(' ').slice(0, 50).join(' ')}...`;

    return (
        <div className="max-w-md mx-auto mb-8">
            <div className="border-2">
                <img src={image} alt="" className="w-full h-full object-cover" />
                <div className="px-3 py-5">
                    <h2 className="text-sky-800 text-lg font-semibold">{title}</h2>
                    <p className="text-slate-700 font-normal py-2">
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
