import React from "react";
import { Link } from "react-router-dom";

import image from "../../assets/underline.png";

import "./pizzas.style.css";

const Pizzas = ({ pizzas }) => {
  return (
    <div className="pizzas">
      {pizzas.map((pizza) => {
        return (
          <div className="main" key={pizza.id}>
            <img className="img" src={pizza.image} alt="" />
            <h2 className="main-title">{pizza.name}</h2>
            <div className="underline">
              {" "}
              <img className="image" src={image} alt="" />
            </div>
            <Link
              to={{
                pathname: `/menu/${pizza.id}`,
                state: { pizza },
              }}
            >
              <div className="btn">View</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Pizzas;
