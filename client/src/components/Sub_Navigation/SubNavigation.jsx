import React from "react";
import { Link } from "react-router-dom";
import "./SubNavigation.css";

const AboutSubNavigation = () => {
  return (
    <div className="sub__navigation container">
      <div>
        <Link className="sub__navigation--item" to="/ve-chung-toi/gioi-thieu">
          Giới Thiệu
        </Link>
      </div>
      <div>
        <Link className="sub__navigation--item" to="/ve-chung-toi/lich-su">
          Lịch Sử
        </Link>
      </div>
    </div>
  );
};

const NewsSubNavigation = () => {
  return (
    <div className="sub__navigation container">
      <div>
        <Link
          className="sub__navigation--item"
          to="/tin-tuc/thong-tin-san-pham"
        >
          Thông Tin Sản Phẩm
        </Link>
      </div>
      <div>
        <Link className="sub__navigation--item" to="/tin-tuc/thong-cao-bao-chi">
          Thông Cáo Báo Chí
        </Link>
      </div>
    </div>
  );
};

const ContactSubNavigation = () => {
  return (
    <div className="sub__navigation container">
      <div>
        <Link className="sub__navigation--item" to="/lien-he/lien-he-chung">
          Liên Hệ Chung
        </Link>
      </div>
      <div>
        <Link className="sub__navigation--item" to="/lien-he/lien-he-nha-may">
          Liên Hệ Nhà Máy
        </Link>
      </div>
    </div>
  );
};

export { AboutSubNavigation, NewsSubNavigation, ContactSubNavigation };
