import { useEffect, useState } from "react";
import NewsArticlesCard from "./News&ArticlesCard";
import { useNavigate } from "react-router-dom";

const NewsArticles = () => {
  const [arrticles, setArticlies] = useState();
  const navigate = useNavigate();

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from an API endpoint (replace with your API URL)
        const response = await fetch("news&Articles.json");
        const result = await response.json();
        console.log(result);

        // Update the state with the fetched data
        setArticlies(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // Call the fetchData function
    fetchData();
  }, []);
  const handleArticlePage = (id) => {
    navigate(`/articles/${id}`);
  };
  return (
    <>
      <div className="my-10">
        <div className="my-5">
          <h1 className="text-2xl font-bold">News & Articles</h1>
        </div>

        <div className="my-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {arrticles?.map((articleData) => (
            <NewsArticlesCard
              key={articleData.id}
              articleData={articleData}
              handleArticlePage={handleArticlePage}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsArticles;
