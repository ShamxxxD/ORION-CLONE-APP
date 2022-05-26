import React from "react";
import "./style.css";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  handleSetPage,
}) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumber.push(i);
  }
  console.log("===productsPerPage", productsPerPage);
  console.log("===totalProducts", totalProducts);
  console.log("===pageNumber", pageNumber);
  return (
    <div className="pagination">
      {pageNumber.map((number, index) => {
        const _class = index + 1 === currentPage ? "current-page" : "";
        return (
          <div
            onClick={() => handleSetPage(index + 1)}
            key={number}
            className={`page-item ${_class}`}
          >
            <button className="page-link">{number}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
