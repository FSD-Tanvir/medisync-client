import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsArticlesDetails = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const [articles, setArticlies] = useState();
  const { id } = useParams();

  console.log(id);

  //

  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from an API endpoint (replace with your API URL)
        const response = await fetch(
          `http://localhost:5000/newAndArticles/single/${id}`
        );
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
  }, [id]);

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
