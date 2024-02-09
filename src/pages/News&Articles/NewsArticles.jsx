import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import NewsArticlesCard from "./News&ArticlesCard";
import { Link, useNavigate } from "react-router-dom";

import Categories from "./Categories/Categories";
import BannerSimple from "../../components/shared/Banners/BannerSimple/BannerSimple";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const NewsArticles = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const axiosPublic = useAxiosPublic()
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



        const {data:articlesData} = await axiosPublic.get(
          "/newAndArticles"
        );

        // Update the state with the fetched data
        setArticlies(articlesData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };
    // Call the fetchData function
    fetchData();
  }, [axiosPublic]);

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
        {/* banner  */}
        <BannerSimple
          imgUrl="https://i.ibb.co/5vStm5N/newsbanner.png"
          text1="News & Articles"
          pageName="newsAndArticles"
        />
        {/*Categories*/}
        <Categories />

        {/* marquee */}
        <div className="w-full">
          <div className="bg-[#003049] p-2">
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
            <div className="bg-[#003049] text-white px-4 py-2 rounded-full focus:outline-none hover:bg-[#00ffff] hover:text-black">
              <a href="#" onClick={handlePrev}>
                Prev
              </a>
            </div>
            <div className="flex gap-2">
              {numbers.map((n, i) => (
                <div key={i} onClick={() => changeCPage(n)}>
                  <a href="#">{n}</a>
                </div>
              ))}
            </div>
            <div className="bg-[#003049] text-white px-4 py-2 rounded-full focus:outline-none hover:bg-[#00ffff] hover:text-black">
              <a href="#" onClick={handleNext}>
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsArticles;
