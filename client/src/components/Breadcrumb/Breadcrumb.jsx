import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import "./Breadcrumb.css";

const IntroductionBreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
        >
          <Link underline="hover" href="/" className="breadcrumb--item">
            <i>
              <HomeIcon fontSize="large" />
            </i>
          </Link>

          <Link
            underline="hover"
            href="/ve-chung-toi/gioi-thieu"
            className="breadcrumb--item"
          >
            Về Chúng Tôi
          </Link>
          <Link
            underline="hover"
            href="/ve-chung-toi/gioi-thieu"
            className="breadcrumb--item"
          >
            Giới Thiệu
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

const HistoryBreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
        >
          <Link underline="hover" href="/" className="breadcrumb--item">
            <i>
              <HomeIcon fontSize="large" />
            </i>
          </Link>

          <Link
            underline="hover"
            href="/ve-chung-toi/gioi-thieu"
            className="breadcrumb--item"
          >
            Về Chúng Tôi
          </Link>
          <Link
            underline="hover"
            href="/ve-chung-toi/lich-su"
            className="breadcrumb--item"
          >
            Lịch Sử
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

const ProductsBreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
        >
          <Link underline="hover" href="/" className="breadcrumb--item">
            <i>
              <HomeIcon fontSize="large" />
            </i>
          </Link>

          <Link underline="hover" href="/san-pham" className="breadcrumb--item">
            Sản Phẩm
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

const NewsProductsBreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
        >
          <Link underline="hover" href="/" className="breadcrumb--item">
            <i>
              <HomeIcon fontSize="large" />
            </i>
          </Link>

          <Link
            underline="hover"
            href="/tin-tuc/thong-tin-san-pham"
            className="breadcrumb--item"
          >
            Tin Tức
          </Link>

          <Link
            underline="hover"
            href="/tin-tuc/thong-tin-san-pham"
            className="breadcrumb--item"
          >
            Thông Tin Sản Phẩm
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

const PressReleaseBreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
        >
          <Link underline="hover" href="/" className="breadcrumb--item">
            <i>
              <HomeIcon fontSize="large" />
            </i>
          </Link>

          <Link
            underline="hover"
            href="/tin-tuc/thong-tin-san-pham"
            className="breadcrumb--item"
          >
            Tin Tức
          </Link>

          <Link
            underline="hover"
            href="/tin-tuc/thong-cao-bao-chi"
            className="breadcrumb--item"
          >
            Thông Cáo Báo Chí
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

const GeneralBreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
        >
          <Link underline="hover" href="/" className="breadcrumb--item">
            <i>
              <HomeIcon fontSize="large" />
            </i>
          </Link>

          <Link
            underline="hover"
            href="/lien-he/lien-he-chung"
            className="breadcrumb--item"
          >
            Liên Hệ
          </Link>
          <Link
            underline="hover"
            href="/lien-he/lien-he-chung"
            className="breadcrumb--item"
          >
            Liên Hệ Chung
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

const FactoryBreadCrumb = () => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="medium" />}
        >
          <Link underline="hover" href="/" className="breadcrumb--item">
            <i>
              <HomeIcon fontSize="large" />
            </i>
          </Link>

          <Link
            underline="hover"
            href="/lien-he/lien-he-chung"
            className="breadcrumb--item"
          >
            Liên Hệ
          </Link>
          <Link
            underline="hover"
            href="/lien-he/lien-he-nha-may"
            className="breadcrumb--item"
          >
            Liên Hệ Nhà Máy
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export {
  GeneralBreadCrumb,
  FactoryBreadCrumb,
  IntroductionBreadCrumb,
  HistoryBreadCrumb,
  ProductsBreadCrumb,
  NewsProductsBreadCrumb,
  PressReleaseBreadCrumb,
};
