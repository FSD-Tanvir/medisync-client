import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const NewsArticlesDetails = () => {
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [articles, setArticlies] = useState();
  const { id } = useParams();

  //

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from an API endpoint (replace with your API URL)

        const { data: article } = await axiosPublic.get(
          `/newAndArticles/single/${id}`
        );

        // Update the state with the fetched data
        setArticlies(article);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };
    // Call the fetchData function
    fetchData();
  }, [id, axiosPublic]);

  return (
    <>
      <div className="px-2 mt-2 mb-20">
        <div className="w-full flex justify-center items-center">
          <div className="w-full sm:w-2/3 lg:h-[350px]">
            <img
              src={articles?.image}
              alt="article image"
              className="w-full h-full lg:h-[350px] object-fill"
            />
          </div>
        </div>
        <div className="w-full sm:w-3/4 mx-auto pt-8 px-4 sm:px-12  text-xl font-bold">
          <h1>{articles?.title}</h1>
        </div>
        <div className="w-full sm:w-3/4 mx-auto px-4 sm:px-12 mt-8 text-base">
          <p className="text-justify">{articles?.description}</p>
        </div>
      </div>
    </>
  );
};

export default NewsArticlesDetails;
