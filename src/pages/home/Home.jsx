import Advertise from "./Advertise/Advertise";
import Banner from "./banner/Banner";

const Home = () => {
    return (
        <div>
            <div className="flex min-h-[500px] mt-10 gap-10">
                <Banner></Banner>
                <Advertise></Advertise>
            </div>
        </div>
    );
};

export default Home;