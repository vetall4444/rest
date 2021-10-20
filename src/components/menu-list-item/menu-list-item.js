import React from "react";
import "./menu-list-item.scss";
import pizza from "../../img/pizza.png";
import salad from "../../img/salad.png";

const MenuListItem = ({ menuItem, onAddToCart }) => {
  const { title, price, url, category } = menuItem;
  let categoryImg = null;
  switch (category) {
    case "pizza": {
      categoryImg = <img src={pizza} alt="as" />;
      break;
    }
    case "salads": {
      categoryImg = <img src={salad} alt="as" />;
      break;
    }
    default:
      categoryImg = null;
  }
  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">
        Category:{" "}
        <span>
          {category} {categoryImg}
        </span>
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button onClick={() => onAddToCart()} className="menu__btn">
        Add to cart
      </button>
    </li>
  );
};

export default MenuListItem;
