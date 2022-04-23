import React from "react";
import "../Products/Products.css";
import cp12p from "../../assets/img/cp12p.png";
import custas12p from "../../assets/img/custas12p.png";
import goute from "../../assets/img/goute.png";
import jeju from "../../assets/img/jeju.png";
import ostar from "../../assets/img/ostar.png";
import sate from "../../assets/img/sate.png";

const Products = () => {
  return (
    <section className="products-section">
      <div className="products-wrapper container">
        <div className="products-header --heading">
          <h2 className="products-title">Sản Phẩm</h2>
          <p className="products-sub-title">
            Orion luôn đặt chất lượng hàng đầu cho từng sản phẩm
          </p>
        </div>

        <div className="products-list">
          <div className="products-item">
            <a href="" className="products-item-img">
              <img src={cp12p} alt="" className="products-img" />
            </a>
            <p className="products-name">Bánh ChocoPie</p>
          </div>

          <div className="products-item">
            <a href="" className="products-item-img">
              <img src={custas12p} alt="" className="products-img" />
            </a>
            <p className="products-name">Bánh bông lan</p>
          </div>

          <div className="products-item">
            <a href="" className="products-item-img">
              <img src={goute} alt="" className="products-img" />
            </a>
            <p className="products-name">Bánh quy</p>
          </div>

          <div className="products-item">
            <a href="" className="products-item-img">
              <img src={ostar} alt="" className="products-img" />
            </a>
            <p className="products-name">Snack</p>
          </div>

          <div className="products-item">
            <a href="" className="products-item-img">
              <img src={jeju} alt="" className="products-img" />
            </a>
            <p className="products-name">Nước khoáng</p>
          </div>

          <div className="products-item">
            <a href="" className="products-item-img">
              <img src={sate} alt="" className="products-img" />
            </a>
            <p className="products-name">Hạt</p>
          </div>
        </div>

        <button className="btn btn-products">Xem Tất Cả Sản Phẩm</button>
      </div>
    </section>
  );
};

export default Products;
