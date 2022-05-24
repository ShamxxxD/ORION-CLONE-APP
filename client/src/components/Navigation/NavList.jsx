import "./NavList.css";
import { Link, NavLink } from "react-router-dom";

const NavList = ({ onClick }) => {
  const activeStyle = ({ isActive }) => {
    return {
      color: isActive ? "rgb(240, 10, 10)" : "",
    };
  };

  return (
    // có thể tạo folder Navitem là mảng các object có path. tên... rồi map qua
    <>
      (
      <nav className="nav__list  container">
        {/*=======HOME ======= */}
        <NavLink
          onClick={onClick}
          style={activeStyle}
          to="/"
          className="nav__item"
        >
          TRANG CHỦ
        </NavLink>

        {/*=======ABOUT ======= */}

        <NavLink
          onClick={onClick}
          style={activeStyle}
          to="/ve-chung-toi/gioi-thieu"
          className="nav__item"
        >
          VỀ CHÚNG TÔI
          <div className="sub__nav sub__nav1">
            <Link to="/ve-chung-toi/gioi-thieu" className="sub__nav__item">
              Giới Thiệu
            </Link>
            <Link to="/ve-chung-toi/lich-su" className="sub__nav__item">
              Lịch Sử
            </Link>
          </div>
        </NavLink>

        {/*=======PRODUCT ======= */}

        <NavLink
          onClick={onClick}
          style={activeStyle}
          to="/san-pham"
          className="nav__item"
        >
          SẢN PHẨM
        </NavLink>

        {/*=======NEWS ======= */}

        <NavLink
          onClick={onClick}
          style={activeStyle}
          to="/tin-tuc/thong-tin-san-pham"
          className="nav__item"
        >
          TIN TỨC
          <div className="sub__nav sub__nav2">
            <Link to="/tin-tuc/thong-tin-san-pham" className="sub__nav__item">
              Thông Tin Sản Phẩm
            </Link>
            <Link to="/tin-tuc/thong-cao-bao-chi" className="sub__nav__item">
              Thông Cáo Báo Chí
            </Link>
          </div>
        </NavLink>

        {/*=======CONTACT ======= */}

        <NavLink
          onClick={onClick}
          style={activeStyle}
          to="/lien-he/lien-he-chung"
          className="nav__item"
        >
          LIÊN HỆ
          <div className="sub__nav sub__nav3">
            <Link to="/lien-he/lien-he-chung" className="sub__nav__item">
              Liên Hệ Chung
            </Link>
            <Link to="/lien-he/lien-he-nha-may" className="sub__nav__item">
              Liên Hệ Nhà Máy
            </Link>
          </div>
        </NavLink>
      </nav>
      )
    </>
  );
};

export default NavList;
