import "./products.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductsBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { ProductsBanner } from "../../components/Banner/Banner";
import ProductsCarousel from "../../components/Products_Carousel/ProductsCarousel";
import { Link } from "react-router-dom";
import { apiProductsUrl } from "../../api/requests";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "../../components/Products-Pagination/Pagination";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(12);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(apiProductsUrl);
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [apiProductsUrl]);

  const category = useSelector((state) => state.category.value);

  let filteredProducts = products;

  if (category !== "Toàn bộ") {
    filteredProducts = products.filter((product) => product.types === category);
  }

  // Get current Products
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProducts,
    indexOfLastProducts
  );

  const handleSetPage = (page) => {
    console.log("===page", page);
    setCurrentPage(page);
  };

  return (
    <>
      <ProductsBanner />
      <ProductsBreadCrumb />
      <ProductsCarousel />
      <div className="container">
        <div className="products__carousel__list">
          {currentProducts.map((item) => {
            return (
              <Link
                to={item.slug}
                className="products__carousel__item"
                key={item.id}
              >
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
      <Pagination
        handleSetPage={handleSetPage}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
      />
    </>
  );
};

export default Products;
