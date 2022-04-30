import Products from "./../../components/Products_component/Products";
import Videos from "../../components/Videos_component/Videos";

import News from "../../components/News_component/News";
import Contact from "../../components/Contact_component/Contact";
import Slider from "../../components/Slider_component/Slider";

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
