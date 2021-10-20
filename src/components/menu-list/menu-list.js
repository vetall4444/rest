import React, { useEffect } from "react";
import MenuListItem from "../menu-list-item";
import { connect } from "react-redux";
import RestoService from "../../services/resto-service";
import { menuLoaded, menuRequested, addedToCart } from "../../redux/actions";
import Spinner from "../spinner/spinner";

import "./menu-list.scss";
const restoService = new RestoService();

function MenuList(props) {
  const {
    menuLoaded,
    menuRequested,
    menuItems,
    loading,
    addedToCart,
    cart,
    cartPrice,
  } = props;
  useEffect(() => {
    menuRequested();
    restoService.getMenuItems().then((res) => {
      menuLoaded(res);
    });
  }, [menuLoaded, menuRequested]);
  if (loading) {
    return <Spinner />;
  }
  return (
    <ul className="menu__list">
      {menuItems.map((menuItem) => {
        return (
          <MenuListItem
            onAddToCart={() => {
              addedToCart(menuItem.id, menuItems, cart, cartPrice);
            }}
            key={menuItem.id}
            menuItem={menuItem}
          />
        );
      })}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    menuItems: state.menu,
    cart: state.cart,
    loading: state.loading,
    cartPrice: state.cartPrice,
  };
}

const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  addedToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuList);
