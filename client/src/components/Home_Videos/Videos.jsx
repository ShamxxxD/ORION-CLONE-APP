import "./Videos.css";
import chocopie from "../../assets/img/chocopie.jpg";
import Cbon from "../../assets/img/Cbon.jpg";
import roprop from "../../assets/img/roprop.jpg";
import youtubeBtn from "../../assets/img/icon-youtube.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Videos = () => {
  return (
    <section className="videos__section">
      <div className="videos__section__heading">
        <h2 className="videos__section__title">VIDEOS</h2>
        <p className="videos__section__sub__title">
          Tận hưởng những câu chuyện thú vị trong thế giới Orion
        </p>
      </div>

      <div className="videos__section__videos__list">
        <div className="videos__section__videos__item1">
          <img className="videos__img" src={chocopie} alt="" />
          <img className="youtube__icon1" src={youtubeBtn} alt="" />
        </div>

        <div className="videos__section__videos__item2">
          <img className="videos__img" src={Cbon} alt="" />
          <img className="youtube__icon2" src={youtubeBtn} alt="" />
        </div>

        <div className="videos__section__videos__item3">
          <img className="videos__img" src={roprop} alt="" />
          <img className="youtube__icon3" src={youtubeBtn} alt="" />
        </div>
      </div>

      <Button
        className="videos__section__btn"
        variant="contained"
        color="error"
        size="large"
      >
        <Link to="/videos">Xem tất cả</Link>
      </Button>
    </section>
  );
};

export default Videos;
