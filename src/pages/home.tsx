import AboutUs from "../components/about-us/about-us";
import FeedbackCardList from "../components/feedback-card/feedback-card-list";
import Head from "../components/head/head";
import QualityCardList from "../components/quality-card/quality-card-list";
import Separator from "../components/separator/separator";
import ServiceCardList from "../components/service-card/service-card-list";
import Slider from "../components/slider/slider";
import { SliderContextProvider } from "../contexts/slider-context";

const Home = () => {
  return (
    <>
      <Head pageTitle="Home" />
      <SliderContextProvider>
        <Slider />
      </SliderContextProvider>
      <Separator />
      <ServiceCardList />
      <AboutUs />
      <QualityCardList />
      <Separator />
      <FeedbackCardList />
    </>
  );
};

export default Home;
