import React, { Component } from "react";
// route
import { Switch, Route } from "react-router-dom";
// compoent
import ManageApply from "./ManageApply";
import ManageAnnouncement from "./ManageAnnouncement";
import ManageUser from "./ManageUser";
// compoent antd
// css
// variable
// variable antd
class Manage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/backstage/manage/apply">
            <ManageApply></ManageApply>
          </Route>
          <Route path="/backstage/manage/user">
            <ManageUser></ManageUser>
          </Route>
          <Route path="/backstage/manage/announcement">
            <ManageAnnouncement></ManageAnnouncement>
          </Route>
        </Switch>
      </>
    );
  }
}

export default Manage;
