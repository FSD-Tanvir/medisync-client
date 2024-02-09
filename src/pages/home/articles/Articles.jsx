import { useEffect } from "react";
import ArtilicesCard from "./ArtilicesCard";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useAllArticles from "../../../hooks/useAllArticles";

const Articles = () => {
  const navigate = useNavigate();
  const [articles] = useAllArticles()

  // for showing from top of this page 
  useEffect(() => {
    window.scroll(0, 0);
  }, []);



  const handleArticlePage = (id) => {
    navigate(`/articles/${id}`);
  };

  return (
    <div className="px-1">
      <h2 className=" mt-8 mb-8 text-2xl font-bold text-black">
        Health Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-5">
        {articles &&
          articles?.slice(0, 4).map((article) => (
          <ArtilicesCard
            handleArticlePage={handleArticlePage}
            key={article?._id}
            articlie={article}
          ></ArtilicesCard>
        ))}
      </div>
      <div className=" text-center sm:text-right sm:pr-10 lg:pr-2 mt-5 ">
        <Link
          to={`/articles`}
          className="text-sm underline text-sky-600 hover:text-sky-800  text-right pr-2"
        >
          Read all
        </Link>
      </div>
    </div>
  );
};

export default Articles;