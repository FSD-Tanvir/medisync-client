import { useEffect, useState } from "react";
import ArtilicesCard from "./ArtilicesCard";

const Articles = () => {
    const [arrticles, setArticlies] = useState()

    // useEffect to fetch data when the component mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from an API endpoint (replace with your API URL)
                const response = await fetch('articlies.json');
                const result = await response.json();
                console.log(result)

                // Update the state with the fetched data
                setArticlies(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        // Call the fetchData function
        fetchData();
    }, []);
    return (
        <div>
            <h2 className="text-center mt-8 mb-8 text-3xl font-bold">Health Articlies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    arrticles?.map(articlie => <ArtilicesCard key={articlie.id} articlie={articlie}></ArtilicesCard>)
                }
            </div>
        </div>
    );
};

export default Articles;