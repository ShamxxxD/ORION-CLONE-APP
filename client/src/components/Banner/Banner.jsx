import "./Banner.css";
import aboutBanner from "../../assets/img/Banner/AboutBanner.png";
import productsBanner from "../../assets/img/Banner/ProductsBanner.png";
import newsBanner from "../../assets/img/Banner/NewsBanner.png";
import contactBanner from "../../assets/img/Banner/ContactBanner.png";

const AboutBanner = () => {
  return (
    <div className="banner">
      <img src={aboutBanner} alt="banner" className="banner--img" />
      <h2 className="banner--title">VỀ CHÚNG TÔI</h2>
    </div>
  );
};

const ProductsBanner = () => {
  return (
    <div className="banner">
      <img src={productsBanner} alt="banner" className="banner--img" />
      <h2 className="banner--title">SẢN PHẨM</h2>
    </div>
  );
};

const NewsBanner = () => {
  return (
    <div className="banner">
      <img src={newsBanner} alt="banner" className="banner--img" />
      <h2 className="banner--title">TIN TỨC</h2>
    </div>
  );
};

const ContactBanner = () => {
  return (
    <div className="banner">
      <img src={contactBanner} alt="banner" className="banner--img" />
      <h2 className="banner--title">LIÊN HỆ</h2>
    </div>
  );
};

export { AboutBanner, ProductsBanner, NewsBanner, ContactBanner };
