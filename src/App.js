// import logo from "./logo.svg";
import "./App.css";
import CardsSlider from "./components/CardsSlider";
import Carousel from "./components/Carousel";
import FAQSection from "./components/FAQSection";
import Navbar from "./components/Navbar";
import StatsSection from "./components/StatsSection";
import SubscribeFooter from "./components/SubscribeFooter";
import UpcomingExams from "./components/UpcomingExams";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <UpcomingExams />
      <CardsSlider />
      <StatsSection />
      <FAQSection />
      <SubscribeFooter />
    </div>
  );
}

export default App;
