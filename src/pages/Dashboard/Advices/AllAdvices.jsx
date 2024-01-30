import { useEffect, useState } from "react";
import Navbar from "./Navbar";


const AllAdvices = () => {
    const [advices, setAdvices] = useState([])
    useEffect(() => {
        fetch("/advice.json")
            .then(res => res.json())
            .then(data => setAdvices(data))
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div>
                {
                    advices.map(advice => <p key={advice.id}>{advice.title}</p> )
                }
            </div>
        </div>
    );
};

export default AllAdvices;