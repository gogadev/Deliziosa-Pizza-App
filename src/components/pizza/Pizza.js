import React from "react";
import { Link } from "react-router-dom";

import underline from "../../assets/underline.png";

import "./pizza.style.css";

const Pizza = (props) => {
  const { image, name, content } = props.location.state.pizza;
  return (
    <div className="pizza">
      <h2 className="title m">{name}</h2>
      <img className="pizza-img" src={image} alt="" />
      <div className="details">
        <img className="image" src={underline} alt="" />
        <p className="content">{content}</p>
      </div>
      <Link to="/">
        <button className="button btn">Home</button>
      </Link>
    </div>
  );
};

export default Pizza;
