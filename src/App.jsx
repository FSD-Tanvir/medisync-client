import "./App.css";
import Faq from "./pages/home/faq/Faq";
import Testimonials from "./pages/home/testimonials/Testimonials";
function App() {
  return (
    <>
      <h1 className="text-center">
        MediSync (Bridging the Gap between Medicines and Health Advice.)
        <Testimonials />
        <Faq />
      </h1>
    </>
  );
}

export default App;
