// import logo from "./logo.svg";
import "./App.css";
import CardsSlider from "./components/CardsSlider";
import Carousel from "./components/Carousel";
import FAQSection from "./components/FAQSection";
import VerticalSlider from "./components/HeroSlider";
import HeroSlider from "./components/HeroSlider";
import HeroSlider2 from "./components/HeroSlider2";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import SubscribeFooter from "./components/SubscribeFooter";
import UpcomingExams from "./components/UpcomingExams";

function App() {
  return (
    <div className="App" >
      <Navbar />
      <Carousel />
      {/* <VerticalSlider /> */}
      {/* <HeroSlider2 /> */}
      <UpcomingExams />
      <CardsSlider />
      <StatsSection />
      <FAQSection />
      <SubscribeFooter />

      {/* <!-- Slider Section --> */}
    </div>
  );
}

export default App;
