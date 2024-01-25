


const ArtilicesCard = ({ articlie, handleArticlePage }) => {
  const { _id, title, image, description } = articlie || {};

  // const toggleDescription = () => {
  //     setShowFullDescription(!showFullDescription);
  // };

  const truncatedDescription = `${description
    .split(" ")
    .slice(0, 15)
    .join(" ")}...`;

  return (
    <div className="max-w-md mx-auto mb-4">
      <div className="border-2 h-[350px] relative">
        <div className="h-32">
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="px-3 py-3">
          <h2 className="text-cyan-600 text-sm font-semibold my-2">{title}</h2>
          <div className="h-auto">
            <p className="text-slate-700 text-base font-normal sm:h-[5rem] lg:h-[3rem] lg:text-sm md:text-[11px] md:text-base">
              {truncatedDescription}
            </p>
          </div>
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
        </div>
        <div className="w-full flex justify-center items-center absolute bottom-2 right-0 left-0 m-auto">
          <button onClick={() => handleArticlePage(_id)} className="bg-[#003049] px-3 py-2 rounded-md text-sm text-white font-bold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtilicesCard;
