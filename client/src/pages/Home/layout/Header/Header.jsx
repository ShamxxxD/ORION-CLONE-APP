import NavList from "../../components/Navigation/NavList";
import NavLogo from "../../components/Navigation/NavLogo";

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
