import { Link } from "react-router-dom";

const BannerSimple = ({ imgUrl, text1, text2,pageName}) => {
  return (
    <div
      className={`h-[55vh] w-full ${pageName === "aboutUs" ? "bg-center": "bg-center"} bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    >
      <div className="bg-black/25 text-white h-full flex justify-center items-center">
        <Link to="/">
          <span className="drop-shadow-md text-2xl pr-2 text-cyan-400">
            Home
          </span>
        </Link>
        <p className={`drop-shadow-md border-l-4 rounded-t-full ${pageName === "career" ? "pl-2":"pl-4"}`}>
          <span className="text-2xl font-semibold text-white">
            {text1}
            <span className="text-cyan-900 text-3xl font-bold drop-shadow-xl rounded-l-full rounded-r-full ml-3 p-[6px]">
              {text2}
            </span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default BannerSimple;