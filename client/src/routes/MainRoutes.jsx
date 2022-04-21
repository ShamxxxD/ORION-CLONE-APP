import { Routes, Route } from "react-router-dom";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/DashBoard/Dashboard";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default MainRoutes;
