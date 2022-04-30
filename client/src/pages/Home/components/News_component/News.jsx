import "./News_component.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import news_1 from "../../../../assets/img/news_1.png";
import news_2 from "../../../../assets/img/news_2.png";
import news_3 from "../../../../assets/img/news_3.jpg";
import news_4 from "../../../../assets/img/news_4.png";
import news_5 from "../../../../assets/img/news_5.jpg";
import { Button } from "@mui/material";
import news_6 from "../../../../assets/img/news_6.png";
import newsbackground from "../../../../assets/img/bg-news.png";

const News_component = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${newsbackground})`,
        backgroundColor: "red",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="news__section"
    >
      <div className="news__section__heading  container">
        <h2 className="news__section__title">Tin tức</h2>
        <p className="news__section__sub__title">
          Cập nhật những tin tức mới nhất cùng Orion
        </p>
      </div>

      <Splide
        options={{
          rewind: true,
          type: "loop",
          rewindByDrag: true,
          autoplay: true,
          interval: "3000",
          pauseOnHover: false,
          speed: "1500",
          perPage: "3",
          arrows: false,
          gap: "17rem",
          pagination: false,
        }}
        className="news__items  container"
      >
        <SplideSlide>
          <div className="news__item ">
            <a href="/#">
              <img className="news__img" src={news_1} alt="" />
              <h4 className="news__item__title">
                Nhìn lại hành trình dự án 'Khoai tây quê hương' tại Việt Nam
              </h4>
              <p className="news__item__timepublish">05, Thg1, 2022</p>
            </a>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="news__item">
            <a href="/#">
              <img className="news__img" src={news_2} alt="" />
              <h4 className="news__item__title">
                Orion vẽ thông điệp “khỏe” lên bánh Choco.Pie động viên đội ngũ
                y bác sỹ
              </h4>
              <p className="news__item__timepublish">05, Thg1, 2022</p>
            </a>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="news__item">
            <a href="/#">
              <img className="news__img" src={news_3} alt="" />
              <h4 className="news__item__title">
                Orion gói ghém hương vị truyền thống của Hà Thành trong Custas
                Kem Cốm Hà Nội
              </h4>
              <p className="news__item__timepublish">28, Thg3, 2022</p>
            </a>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="news__item">
            <a href="/#">
              <img className="news__img" src={news_4} alt="" />
              <h4 className="news__item__title">
                Bánh gạo nướng An từ nhà Orion - sự lựa chọn dinh dưỡng của mọi
                gia đình
              </h4>
              <p className="news__item__timepublish">07, Thg4, 2022</p>
            </a>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="news__item">
            <a href="/#">
              <img className="news__img" src={news_5} alt="" />
              <h4 className="news__item__title">
                ORION - CÔNG TY SẢN XUẤT BÁNH KẸO HÀNG ĐẦU VIỆT NAM
              </h4>
              <p className="news__item__timepublish">25, Thg2, 2022</p>
            </a>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="news__item">
            <a href="/#">
              <img className="news__img" src={news_6} alt="" />
              <h4 className="news__item__title">
                Kẹo dẻo ‘boom’ chiết xuất từ nước trái cây bùng nổ trên thị
                trường
              </h4>
              <p className="news__item__timepublish">05, Thg1, 2022</p>
            </a>
          </div>
        </SplideSlide>
      </Splide>

      <Button
        className="news__section__btn"
        variant="outlined"
        color="error"
        size="large"
      >
        Xem tất cả
      </Button>
    </section>
  );
};

export default News_component;
