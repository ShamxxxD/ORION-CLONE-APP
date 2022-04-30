import React from "react";
import "./Products_component.css";
import cp12p from "../../../../assets/img/cp12p.png";
import custas12p from "../../../../assets/img/custas12p.png";
import goute from "../../../../assets/img/goute.png";
import jeju from "../../../../assets/img/jeju.png";
import ostar from "../../../../assets/img/ostar.png";
import { Button } from "@mui/material";
import sate from "../../../../assets/img/sate.png";

const Products__component = () => {
  return (
    <section className="products">
      <div className="products__wrapper container">
        <div className="products__heading">
          <h2 className="products__title">Sản Phẩm</h2>
          <p className="products__sub__title">
            Orion luôn đặt chất lượng hàng đầu cho từng sản phẩm
          </p>
        </div>

        <div className="products__list">
          <div className="products__item">
            <a href="" className="products__item__img">
              <img src={cp12p} alt="" className="products__img" />
            </a>
            <p className="products__name">Bánh ChocoPie</p>
          </div>

          <div className="products__item">
            <a href="" className="products__item__img">
              <img src={custas12p} alt="" className="products__img" />
            </a>
            <p className="products__name">Bánh bông lan</p>
          </div>

          <div className="products__item">
            <a href="" className="products__item__img">
              <img src={goute} alt="" className="products__img" />
            </a>
            <p className="products__name">Bánh quy</p>
          </div>

          <div className="products__item">
            <a href="" className="products__item__img">
              <img src={ostar} alt="" className="products__img" />
            </a>
            <p className="products__name">Snack</p>
          </div>

          <div className="products__item">
            <a href="" className="products__item__img">
              <img src={jeju} alt="" className="products__img" />
            </a>
            <p className="products__name">Nước khoáng</p>
          </div>

          <div className="products__item">
            <a href="" className="products__item__img">
              <img src={sate} alt="" className="products__img" />
            </a>
            <p className="products__name">Hạt</p>
          </div>
        </div>

        <Button
          className="products__section__btn"
          variant="outlined"
          color="error"
          size="large"
        >
          Xem tất cả sản phẩm
        </Button>
      </div>
    </section>
  );
};

export default Products__component;
