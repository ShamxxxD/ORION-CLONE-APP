import "./App.css";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import Main from "./layout/Main/Main";

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
