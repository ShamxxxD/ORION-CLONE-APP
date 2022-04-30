import "./App.css";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import History from "./pages/About/History";
import Introduction from "./pages/About/Introduction";
import NewsProduct from "./pages/News/NewsProduct";
import PressRelease from "./pages/News/PressRelease";
import GeneralContact from "./pages/Contact/GeneralContact";
import FactoryContact from "./pages/Contact/FactoryContact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />
      <Route path="/about/introduction" element={<Introduction />} />
      <Route path="/about/history" element={<History />} />

      <Route path="/products" element={<Products />} />

      <Route path="/news" element={<News />} />
      <Route path="/news/news-product" element={<NewsProduct />} />
      <Route path="/news/press-release" element={<PressRelease />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/general-contact" element={<GeneralContact />} />
      <Route path="/contact/factory-contact" element={<FactoryContact />} />
    </Routes>
  );
}

export default App;
