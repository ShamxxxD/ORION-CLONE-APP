import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiProductsUrl } from "../../api/requests";
import "./style.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ProductsBanner } from "../Banner/Banner";
import { ProductsBreadCrumb } from "../Breadcrumb/Breadcrumb";

const ProductsDetail = () => {
  const [detail, setDetail] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(apiProductsUrl)
      .then((res) => {
        console.log("---------", res.data);
        setDetail(res.data.find((product) => product.slug === slug));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ProductsBanner />
      <ProductsBreadCrumb />
      <div className="container">
        <div className="product-wrapper">
          <div className="product-info">
            <div className="product-info-img">
              <Splide
                className="product-slider"
                options={{
                  rewind: true,
                  type: "loop",
                  rewindByDrag: true,
                  autoplay: true,
                  interval: "3000",
                  pauseOnHover: false,
                  speed: "1500",
                  perPage: "1",
                  arrows: true,
                  pagination: false,
                }}
                aria-label="My Favorite Images"
              >
                {detail?.images &&
                  Array.isArray(detail.images) &&
                  detail.images.length &&
                  detail.images.map((image) => {
                    return (
                      <SplideSlide>
                        <img
                          className="product-slider-img"
                          src={image}
                          alt=""
                        />
                      </SplideSlide>
                    );
                  })}
              </Splide>
            </div>
            <div className="product-main-info">
              <h1 className="product-main-title">{detail?.name || "---"}</h1>
              <p className="product-main-slogan">{detail?.slogan || "---"}</p>
              <hr />
              <p className="product-main-desc">
                {detail?.description || "---"}
              </p>
              <hr />
            </div>
          </div>

          <div className="product-info-detail">
            <h1>Thông Tin Chi Tiết</h1>
            <div>
              <img
                src={
                  detail?.images &&
                  Array.isArray(detail.images) &&
                  detail.images.length &&
                  detail.detail.images[0]
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetail;
