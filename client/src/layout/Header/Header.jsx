import NavList from "../../components/NavList/NavList";
import NavLogo from "../../components/NavLogo";

const Header = () => {
  return (
    <header className="header">
      <NavLogo />
      <div className="nav-line"></div>
      <NavList />
    </header>
  );
};

export default Header;
