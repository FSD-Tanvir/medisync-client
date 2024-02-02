import { useNavigate } from "react-router-dom";
import useAllArticles from "../../../hooks/useAllArticles";
import AllArticlesCard from "./AllArticlesCard";

const AllArticles = () => {
  const [articles, , refetch] = useAllArticles();

  const navigate = useNavigate();

  const handleArticlePage = (id) => {
    navigate(`/articles/${id}`);
  };
  const handleEditArticlePage = (id) => {
    navigate(`/dashboard/edit-article/${id}`);
  };
  return (
    <div className="my-10">
      <div className="w-full p-4">
        <h1 className="text-center text-sm sm:text-lg my-5 font-bold">
          News and articles
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {articles.map((item) => (
            <AllArticlesCard
              key={item._id}
              item={item}
              handleArticlePage={handleArticlePage}
              handleEditArticlePage={handleEditArticlePage}
              refetch={refetch}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArticles;
