const initialState = {
  menu: [],
  loading: true,
  item: {},
  cart: [],
  cartPrice: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        ...state,
        loading: true,
      };
    case "ITEM_LOADED":
      return {
        ...state,
        item: action.payload,
      };
    case "ITEM_ADD_TO_CART":
      return {
        ...state,
        cart: action.payload.cart,
        cartPrice: action.payload.cartPrice,
      };

    case "ITEM_DELETE_FROM_CART":
      return {
        ...state,
        cart: action.payload.cart,
        cartPrice: state.cartPrice - action.payload.cartPrice,
      };
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        cartPrice: 0,
      };

    default:
      return state;
  }
};

export default reducer;
