import { useEffect, useState } from "react";
import ArtilicesCard from "./ArtilicesCard";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Articles = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [arrticles, setArticlies] = useState();
  const navigate = useNavigate();
  // useEffect to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from an API endpoint (replace with your API URL)
        const response = await fetch("https://medisync-server.vercel.app/newAndArticles");
        const result = await response.json();
        // console.log(result)

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
    <div className="px-1">
      <h2 className=" mt-8 mb-8 text-2xl font-bold text-black">
        Health Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-5">
        {arrticles?.slice(0, 4).map((articlie) => (
          <ArtilicesCard
            handleArticlePage={handleArticlePage}
            key={articlie.id}
            articlie={articlie}
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
