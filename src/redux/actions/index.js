const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu,
  };
};
const menuRequested = () => {
  return {
    type: "MENU_REQUESTED",
  };
};

const itemLoaded = (newItem) => {
  return {
    type: "ITEM_LOADED",
    payload: newItem,
  };
};

const deletedFromCart = (id, cart, cartPrice) => {
  const items = cart.filter((item) => item.id !== id);
  const itemIndex = cart.findIndex((item) => item.id === id);
  const price = cartPrice - cart[itemIndex].price * cart[itemIndex].count;

  const data = {
    cart: items,
    cartPrice: price,
  };
  return {
    type: "ITEM_DELETE_FROM_CART",
    payload: data,
  };
};
const sumCart = () => {
  return {
    type: "SUM_CART",
  };
};
const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
const addedToCart = (menuItem, cart, cartPrice) => {
  const newItem = {
    title: menuItem.title,
    price: menuItem.price,
    url: menuItem.url,
    id: menuItem.id,
  };
  let data = {};
  const currentItem = cart.find((item) => item.id === menuItem.id);
  if (!!currentItem) {
    const items = cart.filter((item) => item.id !== menuItem.id);
    newItem.count = currentItem.count + 1;
    data = {
      cart: [...items, newItem],
      cartPrice: cartPrice + newItem.price,
    };
  } else {
    newItem.count = 1;
    data = {
      cart: [...cart, newItem],
      cartPrice: cartPrice + newItem.price,
    };
  }
  return {
    type: "ITEM_ADD_TO_CART",
    payload: data,
  };
};
export {
  menuLoaded,
  menuRequested,
  itemLoaded,
  addedToCart,
  deletedFromCart,
  sumCart,
  clearCart,
};
