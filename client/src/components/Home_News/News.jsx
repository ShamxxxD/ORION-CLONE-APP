import "./News_component.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import news_1 from "../../assets/img/news_1.png";
import news_2 from "../../assets/img/news_2.png";
import news_3 from "../../assets/img/news_3.jpg";
import news_4 from "../../assets/img/news_4.png";
import news_5 from "../../assets/img/news_5.jpg";
import { Button } from "@mui/material";
import news_6 from "../../assets/img/news_6.png";
import newsbackground from "../../assets/img/bg-news.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const News_component = () => {
  const [perPage, setPerPage] = useState("3");
  let setPageNumber = () => {
    window.innerWidth < 720 ? setPerPage("1") : setPerPage("3");
  };
  useEffect(() => {
    const resizeListener = window.addEventListener("resize", setPageNumber);
    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const newsData = [
    {
      images: news_1,
      title: "Nhìn lại hành trình dự án 'Khoai tây quê hương' tại Việt Nam",
      publishAt: "05, Thg1, 2022",
    },
    {
      images: news_2,
      title:
        "Orion vẽ thông điệp “khỏe” lên bánh Choco.Pie động viên đội ngũ y bác sỹ",
      publishAt: "05, Thg1, 2022",
    },
    {
      images: news_3,
      title:
        "Orion gói ghém hương vị truyền thống của Hà Thành trong Custas Kem Cốm Hà Nội",

      publishAt: "28, Thg3, 2022",
    },
    {
      images: news_4,
      title:
        "Bánh gạo nướng An từ nhà Orion - sự lựa chọn dinh dưỡng của mọi gia đình",

      publishAt: "07, Thg4, 2022",
    },
    {
      images: news_5,
      title: "ORION - CÔNG TY SẢN XUẤT BÁNH KẸO HÀNG ĐẦU VIỆT NAM",

      publishAt: "25, Thg2, 2022",
    },
    {
      images: news_6,
      title:
        "Kẹo dẻo ‘boom’ chiết xuất từ nước trái cây bùng nổ trên thị trường",

      publishAt: "05, Thg1, 2022",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${newsbackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="news__section"
    >
      <div className="news__section__heading  container">
        <h2 className="news__section__title">TIN TỨC</h2>
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
          perPage: perPage,
          arrows: false,
          pagination: false,
          gap: "8rem",
        }}
        className="news__items  container"
      >
        {newsData.map((item) => {
          return (
            <SplideSlide>
              <Link to="/tin-tuc/thong-tin-san-pham">
                <div className="news__item ">
                  <img className="news__img" src={item.images} alt="" />
                  <h4 className="news__item__title">{item.title}</h4>
                  <h4 className="news__item__timepublish">{item.publishAt}</h4>
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>

      <Button
        className="news__section__btn"
        variant="outlined"
        color="error"
        size="large"
      >
        <Link to="/tin-tuc/thong-tin-san-pham"> Xem tất cả</Link>
      </Button>
    </section>
  );
};

export default News_component;
