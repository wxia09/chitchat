import { Router, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../views/index/index";
import Register from "../views/register";
import Login from "../views/login";
import history from "../assets/history";

/*
 * Router 是所有路由组件共用的底层接口。通常，我们的应用程序将使用其中一个高级路由器代替：
 *   <BrowserRouter>
 *   <HashRouter>
 *   <MemoryRouter>
 *   <NativeRouter>
 *   <StaticRouter>
 * */
export default class RouterIndex extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/res" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
