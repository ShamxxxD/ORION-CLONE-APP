import "./Contact.css";
import { ContactBanner } from "../../components/Banner/Banner";
import { FactoryBreadCrumb } from "../../components/Breadcrumb/Breadcrumb";
import { ContactSubNavigation } from "../../components/Sub_Navigation/SubNavigation";
import FactoryBinhDuong from "../../assets/img/factory-binh-duong.png";
import FactoryBacNinh from "../../assets/img/factory-bac-ninh.png";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const FactoryContact = () => {
  return (
    <div>
      <ContactBanner />
      <FactoryBreadCrumb />
      <ContactSubNavigation />

      <div className="main__content " id="123">
        <h1 className="contact__title">Liên hệ nhà máy</h1>
        <div className="contact__factory container">
          <div>
            <img src={FactoryBinhDuong} alt="" className="factory__image" />
            <p className="factory__description">
              Nhà máy Orion Bến Cát, Bình Dương
            </p>
            <div className="contact__detail">
              <i>
                <FmdGoodOutlinedIcon fontSize="large" />
              </i>
              <div>
                <p>Văn Phòng Orion</p>
                <p>Đường Na3, Mỹ Phước, Bến Cát, Bình Dương</p>
              </div>
            </div>

            <div className="contact__detail">
              <i>
                <LocalPhoneOutlinedIcon fontSize="large" />
              </i>

              <div>
                <p>Số điện thoại</p>
                <p>02743553016</p>
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
          </div>

          <div>
            <img src={FactoryBacNinh} alt="" className="factory__image" />
            <p className="factory__description">
              Nhà máy Orion Yên Phong, Bắc Ninh
            </p>
            <div className="contact__detail">
              <i>
                <FmdGoodOutlinedIcon fontSize="large" />
              </i>
              <div>
                <p>Văn Phòng Orion</p>
                <p>
                  KCN Yên Phong, xã Yên Trung, Huyện Yên Phong, Tỉnh Bắc Ninh
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <i>
                <LocalPhoneOutlinedIcon fontSize="large" />
              </i>

              <div>
                <p>Số điện thoại</p>
                <p>02413699000</p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactoryContact;
