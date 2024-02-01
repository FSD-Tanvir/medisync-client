import Navbar from "./Navbar";
import useAdvices from "../../../hooks/useAdvices";


const AllAdvices = () => {
    const [advices, , ] = useAdvices();
    console.log(advices);
    
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