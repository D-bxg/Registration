import React, { Component } from "react";
// route
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// css
// componet
import Account from "./Account";
import FrontStage from "./FrontStage";
import BackStage from "./BackStage";
import Detail from "./Detail";
//component antd

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* 登录界面 */}
          <Route path="/account">
            <Account></Account>
          </Route>
          {/* 后台 back stage */}
          <Route path="/backstage">
            <BackStage></BackStage>
          </Route>
          <Route path="/backstage1">
            <BackStage></BackStage>
          </Route>
          {/* 报名信息 */}
          <Route path="/detail/:newsId" component={Detail}></Route>
          {/* 前台 front stage */}
          <Route exact path="/">
            <FrontStage></FrontStage>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
