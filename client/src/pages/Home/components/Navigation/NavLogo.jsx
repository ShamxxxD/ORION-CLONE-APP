import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const NavLogo = () => {
  return (
    <>
      <div className="nav__logo  container">
        <img
          src="https://www.orion.vn/assets/images/Logo%20Orion%20Header%20Web.svg"
          alt="logo"
          className="logo"
        />
      </div>

      <div className="responsive__nav__mobile">
        <img
          src="https://orion.vn/assets/images/Logo%20Orion%20Mobile%20Header.svg"
          alt="logo"
          className="logo__mobile"
        />
        <div className="menu__mobile">
          <MenuIcon />
        </div>
      </div>

      <div className="nav__line"></div>
    </>
  );
};

export default NavLogo;
