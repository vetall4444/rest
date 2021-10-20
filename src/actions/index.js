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

const delletedFromCart = (id, cart, cartPrice) => {
  const itemIndex = cart.findIndex((item) => item.id === id);
  const price = cart[itemIndex].price * cart[itemIndex].count;
  const prev = cart.slice(0, itemIndex);
  const next = cart.slice(itemIndex + 1);
  const data = {
    cart: [...prev, ...next],
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
const addedToCart = (id, menuItems, cart, cartPrice) => {
  const item = menuItems.find((item) => item.id === id);
  const newItem = {
    title: item.title,
    price: item.price,
    url: item.url,
    id: id,
  };
  const index = cart.findIndex((elem) => elem.id === item.id);
  let data = {};
  if (index + 1) {
    const prev = cart.slice(0, index);
    const next = cart.slice(index + 1);
    newItem.count = cart[index].count + 1;
    data = {
      cart: [...prev, newItem, ...next],
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
  delletedFromCart,
  sumCart,
  clearCart,
};
