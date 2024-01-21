const NewsArticlesCard = ({ articleData, handleArticlePage }) => {
  const { id, title, description, image } = articleData;
  return (
    <>
      <div className="w-full border-1 shadow-lg rounded-md p-2">
        <img className="rounded-md" src={image} alt="newCardImg" />

        <div className="px-2">
          <div>
            <h1 className="py-2 font-bold">{title}</h1>
            <p className="text-justify h-[8rem]">{description}</p>
          </div>
          <div className="my-2 w-full flex flex-col justify-center items-center">
            <button
              onClick={() => handleArticlePage(id)}
              className="bg-cyan-500 px-3 py-2 rounded-md text-white font-bold"
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
