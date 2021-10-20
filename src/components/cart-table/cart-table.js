import React from "react";
import "./cart-table.scss";
import { connect } from "react-redux";
import { delletedFromCart, clearCart } from "../../redux/actions";
import RestoService from "../../services/resto-service";

const restoService = new RestoService();

const CartTable = (props) => {
  const { items, delletedFromCart, clearCart, cartPrice } = props;
  return (
    <>
      <div className="cart__title">Ваш заказ:</div>

      <div className="cart__list">
        {items.map((item) => {
          const { title, price, url, id, count } = item;
          return (
            <div key={id} className="cart__item">
              <img src={url} className="cart__item-img" alt={title}></img>
              <div className="cart__item-title">{title}</div>
              <div className="cart__item-price">
                {price}$ * {count}
              </div>
              <div
                onClick={() => {
                  delletedFromCart(id, items, cartPrice);
                }}
                className="cart__close"
              >
                <div className="close__cross">&times;</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart__button">
        <button
          onClick={() => {
            restoService.setCart(items);
            clearCart();
          }}
          className=" btn btn-success"
        >
          Оформить заказ
        </button>
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return {
    items: state.cart,
    cartPrice: state.cartPrice,
  };
}

const mapDispatchToProps = {
  delletedFromCart,
  clearCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
