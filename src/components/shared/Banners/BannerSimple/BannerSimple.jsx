import { Link } from "react-router-dom";

const BannerSimple = ({ imgUrl, text1, text2, pageName }) => {
  return (
    <div
      className={`h-[35vh] sm:h-[55vh] w-full bg-center bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div
        className={`bg-black/25 text-white h-full flex  justify-center items-center`}
      >
        <div
          className={`${pageName === "meetDoctors" && "-mt-14 "} flex items-end`}
        >
          <Link to="/">
            <span className="sm:text-2xl pr-2 text-blue-200 drop-shadow-lg">
              Home
            </span>
          </Link>
          <div
            className={`drop-shadow-md border-l-4 rounded-t-full text-center ${
              pageName === "career" ? "pl-2" : "pl-4"
            } flex items-center`}
          >
            <p className="sm:text-2xl font-semibold text-white">
              {text1}
              <span className="text-cyan-900 sm:text-3xl font-bold drop-shadow-xl rounded-l-full rounded-r-full ml-3 p-[6px]">
                {text2}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSimple;
