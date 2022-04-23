import { Link } from "react-router-dom";
function NavItem({ name, path }) {
  // let nodeItems = document.getElementsByTagName("li");
  // console.log(nodeItems);

  // nodeItems.map((element) => console.log(element));

  return (
    <li className="nav-item nav-item--active">
      <a href={path} className="nav-link">
        <Link to={path}>{name}</Link>
      </a>
    </li>
  );
}

export default NavItem;
