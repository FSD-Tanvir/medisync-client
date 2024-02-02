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
    <div className="max-w-md mx-auto mb-4 shadow-lg ">
      <div className="border-2 h-[320px]  lg:h-[380px]   xl:h-[350px] relative bg-[#FFF7F4]  rounded-xl">
        <div className="h-32">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover rounded-t-xl"
          />
        </div>
        <div className="px-3 py-3">
          <h2 className="text-cyan-600 text-sm font-semibold my-2">{title}</h2>
          <div className="h-auto">
            <p className="text-slate-700 text-base font-normal sm:h-[5rem] lg:h-[3rem] lg:text-sm md:text-[11px] md:text-base">
              {truncatedDescription}
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center absolute bottom-2 right-0 left-0 m-auto">
          <button
            onClick={() => handleArticlePage(_id)}
            className="border hover:border-blue-500 hover:text-blue-500 font-semibold py-2 px-2 rounded-md text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs lg:w-full xl:w-fit shadow-[-2px_-2px_12px_2px_rgba(0,0,0,0.1),_2px_2px_12px_2px_rgba(0,0,0,0.1)] bg-blue-500 text-white hover:bg-[#FFF7F4]"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtilicesCard;
