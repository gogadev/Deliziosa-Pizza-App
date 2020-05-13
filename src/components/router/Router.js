import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../../App";
import Navbar from "../navbar/Navbar";
import Pizza from "../pizza/Pizza";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/menu/:id" component={Pizza} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
