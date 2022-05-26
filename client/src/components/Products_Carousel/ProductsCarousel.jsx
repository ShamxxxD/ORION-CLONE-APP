import "./ProductsCarousel.css";
import ChocoPie from "../../assets/img/cp12p.png";
import Goute from "../../assets/img/goute.png";
import Custas from "../../assets/img/custas12p.png";
import Jeju from "../../assets/img/jeju.png";
import Snack from "../../assets/img/ostar.png";
import RiceCookie from "../../assets/img/banhgao.png";
import Candy from "../../assets/img/candy.png";
import Bead from "../../assets/img/sate.png";
import logo from "../../assets/img/logo.svg";
import { useDispatch } from "react-redux";
import { getCategory } from "../../features/categorySlice/categorySlice";

const categories = [
  { id: 1, name: "Toàn bộ", type: "Toàn bộ", image: logo },
  { id: 2, name: "Bánh chocopie", type: "Bánh chocopie", image: ChocoPie },
  { id: 3, name: "Bánh quy", type: "Bánh quy", image: Goute },
  { id: 4, name: "Bánh bông lan", type: "Bánh bông lan", image: Custas },
  { id: 5, name: "Nước khoáng", type: "Nước khoáng", image: Jeju },
  { id: 6, name: "Snack", type: "Snack", image: Snack },
  { id: 7, name: "Bánh gạo", type: "Bánh gạo", image: RiceCookie },
  { id: 8, name: "Kẹo", type: "Kẹo", image: Candy },
  { id: 9, name: "Hạt", type: "Hạt", image: Bead },
];

const ProductsCarousel = () => {
  const dispatch = useDispatch();

  const clickHandler = (type) => {
    dispatch(getCategory(type));
  };

  return (
    <div className="container">
      <div className="products__carousel">
        {categories.map((category) => (
          <div
            key={category.id}
            className="products__carousel--item"
            onClick={() => clickHandler(category.type)}
          >
            <div>
              <img src={category.image} alt={category.name} />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCarousel;
