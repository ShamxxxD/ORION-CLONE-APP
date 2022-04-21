import { Link } from "react-router-dom";
function NavItem({ name, path }) {
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
}

export default NavItem;
