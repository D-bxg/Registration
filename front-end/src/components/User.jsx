import React, { Component } from "react";
// route
import { Switch, Route } from "react-router-dom";
// compoent
import UserApply from "./UserApply";
// compoent antd
// css
// variable
// variable antd
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/backstage/user/apply">
            <UserApply></UserApply>
          </Route>
        </Switch>
      </>
    );
  }
}

export default User;
