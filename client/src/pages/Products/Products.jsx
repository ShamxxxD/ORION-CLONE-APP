import "./products.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductsBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { ProductsBanner } from "../../components/Banner/Banner";
import ProductsCarousel from "../../components/Products_Carousel/ProductsCarousel";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const apiProducts =
    "https://627fc008be1ccb0a46645b2d.mockapi.io/api/products";
  useEffect(() => {
    axios
      .get(apiProducts)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, [apiProducts]);

  return (
    <>
      <ProductsBanner />
      <ProductsBreadCrumb />
      <ProductsCarousel products={products} />
      <div className="container">
        <div className="products__carousel__list">
          {products.map((item) => {
            return (
              <Link to="" className="products__carousel__item" key={item.id}>
                <img
                  className="products__carousel__item--img"
                  src={item.images[0]}
                  alt="Hình Sản Phẩm"
                />
                <div>
                  <h3 className="products__carousel__item--name">
                    {item.name}
                  </h3>
                  <p className="products__carousel__item--desc">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
