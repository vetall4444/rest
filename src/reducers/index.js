const initialState = {
  menu: [],
  loading: true,
  item: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_LOADED":
      return {
        menu: action.payload,
        loading: false,
      };
    case "MENU_REQUESTED":
      return {
        menu: state.menu,
        loading: true,
      };
    case "ITEM_LOADED":
      return {
        item: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
