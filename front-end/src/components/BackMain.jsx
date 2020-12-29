import React, { Component } from "react";
// route
import { Link, Switch,Route } from "react-router-dom";
// compoent
import User from "./User";
import Manage from "./Manage"
// compoent antd
import { Layout, Menu } from "antd";
import { UserOutlined, LaptopOutlined } from "@ant-design/icons";
// css
// variable
// variable antd
const { SubMenu } = Menu;
const { Content, Sider } = Layout;
class BackMain extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: false };
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: "calc(100vh-84px)" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu
            theme="dark"
            mode="inline"
            //   defaultSelectedKeys={["1"]}
            //   defaultOpenKeys={["sub1"]}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="用户选项">
              <Menu.Item key="1">
                <Link to="/backstage/user/apply">报名信息查看</Link>
              </Menu.Item>
            </SubMenu>
            <Route path="backstage/manage">
            <SubMenu  key="sub2" icon={<LaptopOutlined />} title="管理员选项">
              <Menu.Item key="2">
                <Link to="/backstage/manage/apply">可报名项目管理</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/backstage/manage/user">人员管理</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/backstage/manage/announcement">公告管理</Link>
              </Menu.Item>
            </SubMenu>
            </Route>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div className="site-layout-content">
              <Switch>
                <Route path="/backstage/user">
                  <User></User>
                </Route>
                <Route path="/backstage/manage">
                  <Manage></Manage>
                </Route>
              </Switch>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default BackMain;
