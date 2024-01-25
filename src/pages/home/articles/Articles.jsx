import { useEffect, useState } from "react";
import ArtilicesCard from "./ArtilicesCard";
import { useNavigate } from "react-router";

const Articles = () => {

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    
    const [arrticles, setArticlies] = useState()
    const navigate = useNavigate();
    // useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from an API endpoint (replace with your API URL)
                const response = await fetch('http://localhost:5000/newAndArticles');
                const result = await response.json();
                // console.log(result)

                // Update the state with the fetched data
                setArticlies(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        // Call the fetchData function
        fetchData();
    }, []);

    const handleArticlePage = (id) => {
        navigate(`/articles/${id}`);
      };

    return (
        <div>
            <h2 className=" mt-8 mb-8 text-2xl font-bold">Health Articlies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    arrticles?.map(articlie => <ArtilicesCard handleArticlePage={handleArticlePage} key={articlie.id} articlie={articlie}></ArtilicesCard>)
                }
            </div>
        </div>
    );
};

export default Articles;