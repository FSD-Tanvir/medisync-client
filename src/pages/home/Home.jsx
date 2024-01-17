
import Articles from "./articles/Articles";
import Products from "./products/Products";
import Categories from "./categories/Categories";
import Advertise from "./Advertise/Advertise";
import Banner from "./banner/Banner";


const Home = () => {
    return (
        <div>
            <div className="flex min-h-[500px] mt-10 gap-10">
                <Banner></Banner>
                <Advertise></Advertise>
            </div>
           <Categories/>
           <Products></Products>
          <Articles></Articles>
        </div>
    );
};

export default Home;