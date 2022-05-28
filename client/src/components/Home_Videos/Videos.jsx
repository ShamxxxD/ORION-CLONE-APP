import "./Videos.css";
import chocopie from "../../assets/img/chocopie.jpg";
import Cbon from "../../assets/img/Cbon.jpg";
import roprop from "../../assets/img/roprop.jpg";
import youtubeBtn from "../../assets/img/icon-youtube.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const data = [
  {
    id: 1,
    images: chocopie,
    youtubeKey: "UxTbavUiHz8",
  },
  {
    id: 2,
    images: Cbon,
    youtubeKey: "AcGjSRnVbAE",
  },
  {
    id: 3,
    images: roprop,
    youtubeKey: "HGkEhRuyVzA",
  },
];

const Videos = () => {
  return (
    <section className="videos__section">
      <div className="videos__section__heading">
        <h2 className="videos__section__title">VIDEOS</h2>
        <p className="videos__section__sub__title">
          Tận hưởng những câu chuyện thú vị trong thế giới Orion
        </p>
      </div>

      <Splide
        className="videos__section__videos__list"
        options={{
          rewind: true,
          type: "loop",
          rewindByDrag: true,
          autoplay: false,
          interval: "3000",
          pauseOnHover: false,
          speed: "1500",
          perPage: "1",
          arrows: true,
          pagination: false,
        }}
      >
        {data.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <div className="videos__section__videos__item">
                <Link to="/videos">
                  <img className="videos__img" src={item.images} alt="" />
                  <img className="youtube__icon" src={youtubeBtn} alt="" />
                </Link>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>

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
