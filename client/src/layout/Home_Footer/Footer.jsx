import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper container">
        <div className="footer__menu">
          <div>
            <img
              src="https://orion.vn/assets/images/Logo%20Orion%20Footer%20Web.svg"
              alt=""
              className="logo__mobile"
            />
          </div>
          <div>
            <h4>VỀ CHÚNG TÔI</h4>
            <Link to="/ve-chung-toi/gioi-thieu">Giới Thiệu</Link>
            <Link to="/ve-chung-toi/lich-su">Lịch sử</Link>
          </div>
          <div>
            <h4>TIN TỨC</h4>
            <Link to="/tin-tuc/thong-tin-san-pham">Tin Tức</Link>
            <Link to="#">Q&A</Link>
          </div>
          <div>
            <h4>LIÊN HỆ</h4>
            <Link to="/lien-he/lien-he-chung">Liên Hệ Chung</Link>
            <Link to="/lien-he/lien-he-nha-may">Liên Hệ Nhà Máy</Link>
          </div>
        </div>

        <div className="footer__contact">
          <img
            src="https://orion.vn/assets/images/Logo%20Orion%20Footer%20Web.svg"
            alt=""
            className="logo"
          />
          <div className="footer__contact__address">
            <p className="address">
              <b>Địa Chỉ</b> : Tầng 22, tòa nhà Pearl Plaza, 561A, Điện Biên
              Phủ, Phường 25, Quận Bình Thạnh, TP.HCM, Việt Nam
            </p>
            <p className="phone">
              <b>SĐT</b> : 028 3512 3420
            </p>
            <p className="copyright">
              © 2021 Copyright Orion. All Rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
