import AboutUs from "../components/AboutUs/AboutUs";
import FeedbackCardList from "../components/FeedbackCard/FeedbackCardList";
import Head from "../components/Head/Head";
import QualityCardList from "../components/QualityCard/QualityCardList";
import Separator from "../components/Separator/Separator";
import ServiceCardList from "../components/ServiceCard/ServiceCardList";
import Slider from "../components/Slider/Slider";
import { SliderContextProvider } from "../contexts/SliderContext";

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
