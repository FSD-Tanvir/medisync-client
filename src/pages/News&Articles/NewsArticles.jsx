import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import NewsArticlesCard from "./News&ArticlesCard";
import { Link, useNavigate } from "react-router-dom";

import Banner from "./banner/Banner";
import Categories from "./Categories/Categories";

const NewsArticles = () => {
  const [articles, setArticlies] = useState();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(articles);
  const articlesPerPage = 10;
  const lastIndex = currentPage * articlesPerPage;
  const firstIndex = lastIndex - articlesPerPage;
  const article = articles?.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(articles?.length / articlesPerPage);

  const numbers = nPage > 0 ? [...Array(nPage).keys()].map((i) => i + 1) : [];

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from an API endpoint (replace with your API URL)
        const response = await fetch("http://localhost:5000/newAndArticles");
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

  const handlePrev = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (n) => {
    setCurrentPage(n);
  };
  const handleNext = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div>
        <Banner />
        {/*Categories*/}
        <Categories />

        {/* marquee */}
        <div className="w-full">
          <div className="bg-cyan-500 p-2">
            <Marquee pauseOnHover>
              <div>
                {article?.map((item) => (
                  <Link
                    key={item.id}
                    className="text-white font-bold hover:underline px-4 border-r-2 last:border-none"
                    onClick={() => handleArticlePage(item._id)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
        <div className="my-10">
          <div className="my-5">
            <h1 className="text-2xl font-bold pl-4 md:pl-0">News & Articles</h1>
          </div>

          <div className="my-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {article?.map((articleData) => (
              <NewsArticlesCard
                key={articleData.id}
                articleData={articleData}
                handleArticlePage={handleArticlePage}
              />
            ))}
          </div>
          <div className="my-10 flex justify-center items-center gap-4">
            <a href="#" onClick={handlePrev}>
              Prev
            </a>
            <div className="flex gap-2">
              {numbers.map((n, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 border-2 rounded-full flex justify-center items-center cursor-pointer ${
                    currentPage === n ? "bg-cyan-500 text-white" : ""
                  }`}
                  onClick={() => changeCPage(n)}
                >
                  <a href="#">{n}</a>
                </div>
              ))}
            </div>
            <a href="#" onClick={handleNext}>
              Next
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticles;
