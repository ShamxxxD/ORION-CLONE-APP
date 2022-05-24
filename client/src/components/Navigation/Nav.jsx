import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import React, { useEffect, useState } from "react";

const Nav = () => {
  const [isShowMenu, setIsShowMenu] = useState(true);

  useEffect(() => {
    const resizeListener = window.addEventListener("resize", () => {
      setIsShowMenu(!(window.innerWidth < 720));
    });

    return () => window.removeEventListener("resize", resizeListener);
  }, []);

  const HandleClick = () => {
    return setIsShowMenu(!isShowMenu);
  };

  const toggleHandler = () => {
    setIsShowMenu(!(window.innerWidth < 720));
  };

  return (
    <>
      <Link to="/">
        <div className="nav__logo  container">
          <img
            src="https://www.orion.vn/assets/images/Logo%20Orion%20Header%20Web.svg"
            alt="logo"
            className="logo"
          />
        </div>
      </Link>

      <div className="responsive__nav__mobile">
        <img
          src="https://orion.vn/assets/images/Logo%20Orion%20Mobile%20Header.svg"
          alt="logo"
          className="logo__mobile"
        />
        <div className="menu__mobile" onClick={HandleClick}>
          <MenuIcon fontSize="large" />
        </div>
      </div>

      <div className="nav__line"></div>
      {isShowMenu && <NavList onClick={toggleHandler} />}
    </>
  );
};

export default Nav;
