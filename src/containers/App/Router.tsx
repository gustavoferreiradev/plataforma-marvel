import React from "react";
import { Route, Switch } from "react-router";
import Login from "../Login";
import App from "./App";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={App} />
    </Switch>
  );
};

export default Router;
