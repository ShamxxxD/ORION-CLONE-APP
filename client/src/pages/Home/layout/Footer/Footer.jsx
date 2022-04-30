import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="contact ">
        <img
          src="https://orion.vn/assets/images/Logo%20Orion%20Footer%20Web.svg"
          alt=""
          className="logo"
        />

        <div className="contact_address">
          <p className="address">
            <b>Địa Chỉ</b> : Tầng 22, tòa nhà Pearl Plaza, 561A, Điện Biên Phủ,
            Phường 25, Quận Bình Thạnh, TP.HCM, Việt Nam
          </p>
          <p className="phone">
            <b>SĐT</b> : 028 3512 3420
          </p>
          <p className="copyright">
            © 2021 Copyright Orion. All Rights reserved
          </p>
        </div>
      </div>
      <div className="contact__us">
        <div>
          <h4>VỀ CHÚNG TÔI</h4>
          <a href="#">Lịch sử</a>
          <a href="#">Giới Thiệu</a>
        </div>
        <div>
          <h4>TIN TỨC</h4>
          <a href="#">Tin Tức</a>

          <a href="#">Q&A</a>
        </div>
        <div>
          <h4>LIÊN HỆ</h4>
          <a href="#">Liên Hệ Chung</a>

          <a href="#">Liên Hệ Nhà Máy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
