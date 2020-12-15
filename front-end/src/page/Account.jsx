import React, { Component } from "react";
// route
import { Switch, Route } from "react-router-dom";
// compoent
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
// compoent antd
// css
import "../static/css/Accounts.min.css";
// variable
// variable antd
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { loadings: [] };
  }

  render() {
    return (
      <>
        <div className="account">
          <div className="account__main">
            <Switch>
              <Route path="/account">
                <Route path="/account/sign-in">
                  <SignIn></SignIn>
                </Route>
                <Route path="/account/sign-up">
                  <SignUp></SignUp>
                </Route>
              </Route>
            </Switch>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
