const NewsArticlesCard = ({ articleData, handleArticlePage }) => {
  const { _id, title, description, image } = articleData;
  return (
    <>
      <div className="w-full border-1 shadow-lg rounded-md p-2 relative">
        <div className="w-full h-56">
          <img
            className="rounded-md w-full h-full object-cover"
            src={image}
            alt="newCardImg"
          />
        </div>

        <div>
          <div className="my-2 w-full py-2 md:py-2 md:pb-8">
            <h1 className="py-2 font-bold">{title}</h1>
            <p className="text-justify h-[10rem] sm:h-[5rem] lg:h-[8rem] lg:text-base  md:text-[11px] md:text-base font-light text-zinc-700">
              {description.length === 100
                ? description
                : description.slice(0, 200)}
              ...
            </p>
          </div>
          <div className="my-2 w-full flex flex-col justify-center items-center absolute bottom-0 left-0 right-0 m-auto">
            <button
              onClick={() => handleArticlePage(_id)}
              className="bg-[#003049] px-3 py-2 rounded-md text-white font-bold"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticlesCard;
