import NavItem from "./NavItem";
import React from "react";

const NavList = () => {
  return (
    <div>
      <NavItem name="Home" path="/" />
      <NavItem name="About" path="/about" />
      <NavItem name="Dashboard" path="/dashboard" />
    </div>
  );
};

export default NavList;
