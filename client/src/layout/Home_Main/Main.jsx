import Products from "../../components/Home_Products/Products";
import Videos from "../../components/Home_Videos/Videos";
import News from "../../components/Home_News/News";
import Contact from "../../components/Home_Contact/Contact";
import Slider from "../../components/Home_Slider/Slider";

const Main = () => {
  return (
    <div>
      <Slider />
      <Products />
      <Videos />
      <News />
      <Contact />
    </div>
  );
};

export default Main;
