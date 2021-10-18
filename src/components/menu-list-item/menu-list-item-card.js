import React, { useEffect } from "react";
import { connect } from "react-redux";
import { itemLoaded } from "../../actions";
import RestoService from "../../services/resto-service";
import MenuListItem from "../menu-list-item";

const restoService = new RestoService();
const style = {
  display: "flex",
  justifyContent: "center",
};

function MenuListItemCard(props) {
  const { id, item, itemLoaded } = props;
  useEffect(() => {
    restoService.getItem(id).then((elem) => {
      itemLoaded(elem);
    });
  }, [id, itemLoaded]);
  console.log(props);
  return (
    <div style={style}>
      <MenuListItem key={item.id} menuItem={item} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    item: state.item,
  };
}
const mapDispatchToProps = { itemLoaded };

export default connect(mapStateToProps, mapDispatchToProps)(MenuListItemCard);
