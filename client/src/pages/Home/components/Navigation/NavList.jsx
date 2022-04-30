import React from "react";
import "./NavList.css";
import { Link, NavLink } from "react-router-dom";

const NavList = () => {
  // USE NAVLINK react router dom
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgb(240, 10, 10)" : "",
    };
  };
  return (
    <nav className="nav__list  container">
      {/*=======HOME ======= */}
      <NavLink style={activeStyle} to="/" className="nav__item">
        Trang Chủ
      </NavLink>

      {/*=======ABOUT ======= */}

      <NavLink style={activeStyle} to="/about" className="nav__item">
        Về Chúng Tôi
        <div className="sub__nav sub__nav1">
          <Link to="/about/introduction" className="sub__nav__item">
            Giới Thiệu
          </Link>
          <Link to="/about/history" className="sub__nav__item">
            Lịch Sử
          </Link>
        </div>
      </NavLink>

      {/*=======PRODUCT ======= */}

      <NavLink style={activeStyle} to="/products" className="nav__item">
        Sản Phẩm
      </NavLink>

      {/*=======NEWS ======= */}

      <NavLink style={activeStyle} to="/news" className="nav__item">
        Tin Tức
        <div className="sub__nav sub__nav2">
          <Link to="/news/news-product" className="sub__nav__item">
            Thông Tin Sản Phẩm
          </Link>
          <Link to="/news/press-release" className="sub__nav__item">
            Thông Cáo Báo Chí
          </Link>
        </div>
      </NavLink>

      {/*=======CONTACT ======= */}

      <NavLink style={activeStyle} to="/contact" className="nav__item">
        Liên Hệ
        <div className="sub__nav sub__nav3">
          <Link to="/contact/general-contact" className="sub__nav__item">
            Liên Hệ Chung
          </Link>
          <Link to="/contact/factory-contact" className="sub__nav__item">
            Liên Hệ Nhà Máy
          </Link>
        </div>
      </NavLink>
    </nav>
  );
};

export default NavList;
