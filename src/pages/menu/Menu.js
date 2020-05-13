import React from "react";
import "./menu.style.css";

import Pizzas from "../../components/pizzas/Pizzas";

const Menu = ({ pizzas }) => {
  return (
    <div className="menu">
      <div className="title">
        <h3>Menu</h3>
      </div>
      <Pizzas pizzas={pizzas} />
    </div>
  );
};

export default Menu;
