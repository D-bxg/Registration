import React, { Component } from "react";
// route
import {} from "react-router-dom";
// compoent
import Nav from "../components/Nav";
import Main from "../components/Main";
// compoent antd
import { Layout } from "antd";
// css
// variable
// variable antd
class FrontStage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Layout className="layout">
          <Nav></Nav>
          <Main></Main>
        </Layout>
      </>
    );
  }
}

export default FrontStage;
