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

export { menuLoaded, menuRequested, itemLoaded };
