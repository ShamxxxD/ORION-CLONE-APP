import "./Contact_component.css";
import faceimg from "../../assets/img/face-img.png";
import youtubeimg from "../../assets/img/youtube-img.png";
import instaimg from "../../assets/img/insta-img.png";
import zaloimg from "../../assets/img/zalo-img.png";
import facebook from "../../assets/img/facebook.png";
import youtube from "../../assets/img/youtube.png";
import insta from "../../assets/img/insta.png";
import zalo from "../../assets/img/zalo.png";

const Contact_component = () => {
  return (
    <section className="contact__section container">
      <div className="contact__section__heading">
        <h2 className="contact__section__title">LIÊN HỆ FANPAGE</h2>
        <p className="contact__section__sub__title">
          Hãy kết nối với chúng tôi !
        </p>
      </div>

      <div className="contact__wrapper">
        <a
          href="https://www.facebook.com/OrionVietnam/"
          className="contact__item"
          target="_blank"
        >
          <img className="contact__img" src={faceimg} alt="" />
          <img className="contact__society" src={facebook} alt="" />
        </a>
        <a
          href="https://www.youtube.com/c/ORIONVietnam"
          target="_blank"
          className="contact__item"
        >
          <img className="contact__img" src={youtubeimg} alt="" />
          <img className="contact__society" src={youtube} alt="" />
        </a>
        <a
          href="https://www.instagram.com/orionvietnamofficial/"
          className="contact__item"
          target="_blank"
        >
          <img className="contact__img" src={instaimg} alt="" />
          <img className="contact__society" src={insta} alt="" />
        </a>
        <a
          href="https://zalo.me/3323532504668213128"
          className="contact__item"
          target="_blank"
        >
          <img className="contact__img" src={zaloimg} alt="" />
          <img className="contact__society" src={zalo} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Contact_component;
