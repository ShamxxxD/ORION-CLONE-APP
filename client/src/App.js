import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import History from "./pages/About/History";
import Introduction from "./pages/About/Introduction";
import NewsProduct from "./pages/News/NewsProduct";
import PressRelease from "./pages/News/PressRelease";
import GeneralContact from "./pages/Contact/GeneralContact";
import FactoryContact from "./pages/Contact/FactoryContact";
import Footer from "./layout/Home_Footer/Footer";
import Header from "./layout/Home_Header/Header";
import ProductsDetail from "./components/ProductsDetail/ProductsDetail";
import Videos from "./components/Videos/Videos";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/ve-chung-toi/gioi-thieu" element={<Introduction />} />
        <Route path="/ve-chung-toi/lich-su" element={<History />} />

        <Route path="/san-pham" element={<Products />} />
        <Route path="/san-pham/:slug" element={<ProductsDetail />} />

        <Route path="/tin-tuc/thong-tin-san-pham" element={<NewsProduct />} />
        <Route path="/tin-tuc/thong-cao-bao-chi" element={<PressRelease />} />

        <Route path="/videos" element={<Videos />} />

        <Route path="/lien-he/lien-he-chung" element={<GeneralContact />} />
        <Route path="/lien-he/lien-he-nha-may" element={<FactoryContact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
