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
// import { useRecoilState } from "recoil";
// import { categoryState } from "../../Atom/category";
// import { useState } from "react";

const categories = [
  { name: "Toàn bộ", type: "Toàn bộ", image: logo },
  { name: "Bánh chocopie", type: "Bánh chocopie", image: ChocoPie },
  { name: "Bánh quy", type: "Bánh quy", image: Goute },
  { name: "Bánh bông lan", type: "Bánh bông lan", image: Custas },
  { name: "Nước khoáng", type: "Nước khoáng", image: Jeju },
  { name: "Snack", type: "Snack", image: Snack },
  { name: "Bánh gạo", type: "Bánh gạo", image: RiceCookie },
  { name: "Kẹo", type: "Kẹo", image: Candy },
  { name: "Hạt", type: "Hạt", image: Bead },
];

const ProductsCarousel = ({ products }) => {
  // const [category, setCategory] = useState("");

  const clickHandler = (name) => {
    console.log(name);
  };

  return (
    <div className="container">
      <div className="products__carousel">
        {categories.map((category) => (
          <div
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
