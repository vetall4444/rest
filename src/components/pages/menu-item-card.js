import React from "react";
import MenuListItemCard from "../menu-list-item/menu-list-item-card";

const ItemCard = (props) => {
  const { id } = props.match.params;
  return <MenuListItemCard id={id} />;
};

export default ItemCard;
