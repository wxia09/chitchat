import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../views/index/index";
import Register from "../views/register";
import Login from "../views/login";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/res" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}
