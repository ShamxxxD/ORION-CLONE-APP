import "./Products_component.css";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import cp12p from "../../assets/img/cp12p.png";
import custas12p from "../../assets/img/custas12p.png";
import goute from "../../assets/img/goute.png";
import jeju from "../../assets/img/jeju.png";
import ostar from "../../assets/img/ostar.png";
import sate from "../../assets/img/sate.png";

const Products__component = () => {
  return (
    <section className="products">
      <div className="products__wrapper container">
        <div className="products__heading">
          <h2 className="products__title">SẢN PHẨM</h2>
          <p className="products__sub__title">
            Orion luôn đặt chất lượng hàng đầu cho từng sản phẩm
          </p>
        </div>

        <div className="products__list">
          <div className="products__item">
            <Link to="/san-pham" className="products__item__img">
              <img src={cp12p} alt="" className="products__img" />
            </Link>
            <Link to="/san-pham" className="products__name">
              Bánh ChocoPie
            </Link>
          </div>

          <div className="products__item">
            <Link to="/san-pham" className="products__item__img">
              <img src={custas12p} alt="" className="products__img" />
            </Link>
            <Link to="/san-pham" className="products__name">
              Bánh bông lan
            </Link>
          </div>

          <div className="products__item">
            <Link to="/san-pham" className="products__item__img">
              <img src={goute} alt="" className="products__img" />
            </Link>
            <Link to="/san-pham" className="products__name">
              Bánh quy
            </Link>
          </div>

          <div className="products__item">
            <Link to="/san-pham" className="products__item__img">
              <img src={ostar} alt="" className="products__img" />
            </Link>
            <Link to="/san-pham" className="products__name">
              Snack
            </Link>
          </div>

          <div className="products__item">
            <Link to="/san-pham" className="products__item__img">
              <img src={jeju} alt="" className="products__img" />
            </Link>
            <Link to="/san-pham" className="products__name">
              Nước khoáng
            </Link>
          </div>

          <div className="products__item">
            <Link to="/san-pham" className="products__item__img">
              <img src={sate} alt="" className="products__img" />
            </Link>
            <Link to="/san-pham" className="products__name">
              Hạt
            </Link>
          </div>
        </div>

        <Button
          className="products__section__btn"
          variant="outlined"
          color="error"
          size="large"
        >
          <Link to="/san-pham">Xem tất cả sản phẩm</Link>
        </Button>
      </div>
    </section>
  );
};

export default Products__component;
