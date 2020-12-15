import React, { Component } from "react";
// route
import { Link } from "react-router-dom";

// compoent
// compoent antd
import { Layout, Menu } from "antd";
// css
import "../static/css/Nav.min.css";
// variable antd
const { Header } = Layout;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { key: "" };
  }
  routeAccounts = (item) => {
    this.setState({ key: String(item.key) });
  };
  render() {
    return (
      <Header className="header">
        <Link to="/">
          <div className="header__logo" />
        </Link>
        <Menu
          defaultSelectedKeys={[this.state.key]}
          theme="dark"
          mode="horizontal"
          onClick={this.routeAccounts}
        >
          <Menu.Item key="1">
            <Link to="/account/sign-in">账户</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/backstage">后台</Link>
          </Menu.Item>
          <Menu.Item key="3"></Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default Nav;
