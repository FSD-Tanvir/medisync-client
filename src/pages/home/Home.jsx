import Footer from "../../components/shared/footer/Footer";
import Articles from "./articles/Articles";
import Products from "./products/Products";
import Categories from "./categories/Categories";
import Advertise from "./Advertise/Advertise";
import Banner from "./banner/Banner";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";

const Home = () => {
  return (
    <div>
      <div className="flex min-h-[500px] mt-10 gap-10">
        <Banner></Banner>
        <Advertise></Advertise>
      </div>
      <Categories />
      <Products></Products>
      <Articles></Articles>
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
