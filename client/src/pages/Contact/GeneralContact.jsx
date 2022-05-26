import "./Contact.css";
import { ContactBanner } from "../../components/Banner/Banner";
import { GeneralBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { ContactSubNavigation } from "../../components/Sub_Navigation/SubNavigation";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const GeneralContact = () => {
  return (
    <div>
      <ContactBanner />
      <GeneralBreadCrumb />
      <ContactSubNavigation />
      {/* MAIN */}
      <div className="main__content ">
        <h1 className="contact__title">Liên hệ chung</h1>
        <div className="contact__factory container">
          <div>
            <p className="factory__description">Văn phòng</p>
            <div className="contact__detail">
              <i>
                <FmdGoodOutlinedIcon fontSize="large" />
              </i>
              <div>
                <p>Văn Phòng Orion</p>
                <p>
                  Tầng 22, TTTM Pearl Plaza, 561A Điện Biên Phủ, phường 25, quận
                  Bình Thạnh, TP HCM.
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <i>
                <LocalPhoneOutlinedIcon fontSize="large" />
              </i>

              <div>
                <p>Số điện thoại</p>
                <p>028 351 2342</p>
              </div>
            </div>

            <div className="contact__detail">
              <i>
                <EmailOutlinedIcon fontSize="large" />
              </i>
              <div>
                <p>Email</p>
                <p>orionhcm@orionworld.com</p>
              </div>
            </div>

            <div className="contact__detail">
              <i>
                <AccessTimeIcon fontSize="large" />
              </i>
              <div>
                <p>Giờ Làm Việc</p>
                <p>Thứ Hai - Thứ Sáu: 08:00 - 17:00</p>
              </div>
            </div>

            <div className="contact__line"></div>

            <p className="factory__description">
              Bộ Phận Chăm Sóc Khách Hàng Jeju
            </p>
            <div className="contact__detail">
              <i>
                <LocalPhoneOutlinedIcon fontSize="large" />
              </i>
              <div>
                <p>Số điện thoại</p>
                <p>18006088456</p>
              </div>
            </div>
            <div className="contact__detail">
              <i>
                <AccessTimeIcon fontSize="large" />
              </i>
              <div>
                <p>Giờ Làm Việc</p>
                <p>Thứ Hai - Thứ Sáu: 08:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div>
            <iframe
              className="contact-map"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.148127293999!2d106.71637431453799!3d10.799964861712589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529696c5d0e11%3A0xd79e3c3199393010!2zQ8O0bmcgVHkgVE5ISCBUaOG7sWMgUGjhuqltIE9yaW9uIFZpbmE!5e0!3m2!1svi!2s!4v1652980125514!5m2!1svi!2s"
              width="500"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralContact;
