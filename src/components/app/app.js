import React from "react";
import { MainPage, CartPage, ItemCard } from "../pages";
import AppHeader from "../app-header";
import { Switch, Route } from "react-router-dom";

import Background from "./food-bg.jpg";

const App = () => {
  return (
    <div
      style={{ background: `url(${Background}) center center/cover no-repeat` }}
      className="app"
    >
      <AppHeader total={50} />
      <Switch>
        <Route path="/main" exact component={MainPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/main/:id" component={ItemCard} />
        <Route exact component={MainPage} />
      </Switch>
    </div>
  );
};

export default App;
