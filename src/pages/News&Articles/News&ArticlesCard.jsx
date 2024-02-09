import Button from "../../components/shared/button/Button";

const NewsArticlesCard = ({ articleData, handleArticlePage }) => {
  const { _id, title, description, image } = articleData;
  return (
    <>
      <div className="w-full border-1 shadow-lg rounded-md p-2 relative bg-[#FFF7F4] ">
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
          <div onClick={() => handleArticlePage(_id)}>
            <Button btnName="Read More" classForButton="px-2 rounded-md text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs lg:w-full xl:w-fit"/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticlesCard;
