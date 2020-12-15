import React, { Component } from "react";
// route
import { Switch, Route } from "react-router-dom";
// compoent
import FrontMain from "./FrontMain";
import BackMain from "./BackMain";
// compoent antd
// css
import "../static/css/Main.min.css";
// variable antd
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <FrontMain></FrontMain>
        </Route>
        <Route path="/backstage">
          <BackMain></BackMain>
        </Route>
      </Switch>
    );
  }
}

export default Main;
