import Articles from "./articles/Articles";
import Products from "./products/Products";
import Categories from "./categories/Categories";
import Banner from "./banner/Banner";
import Testimonials from "./testimonials/Testimonials";
import Faq from "./faq/Faq";
import ThreeCards from "./ThreeCards/ThreeCards";

const Home = () => {
  return (
    <div>
      <Banner />
      <ThreeCards/>
      <Categories />
      <Products />
      <Articles />
      <Testimonials />
      <Faq />
    </div>
  );
};

export default Home;
