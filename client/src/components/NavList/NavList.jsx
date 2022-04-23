import NavItem from "./NavItem";
import React from "react";

const NavList = () => {
  return (
    <div className="nav-list  container">
      <NavItem name="Trang Chủ" path="/" />
      <NavItem name="Về Chúng Tôi" path="/about" />
      <NavItem name="Sản Phẩm" path="/products" />
      <NavItem name="Tin Tức" path="/news" />
      <NavItem name="Liên Hệ" path="/contact" />
    </div>
  );
};

export default NavList;
