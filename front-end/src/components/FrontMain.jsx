import React, { Component } from "react";
// route
import {} from "react-router-dom";
// compoent
// compoent antd
import { Layout, Carousel, Divider, Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
// css
// variable
// variable antd
const { Content } = Layout;
const { Meta } = Card;
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

class FrontMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Content style={{ padding: "20px 50px", minHeight: "100vh" }}>
          <div className="site-layout-content">
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
            <Divider />
            {/* 循环遍历 */}
            {/* {
              .map((value,key)=>{
                
              })
            } */}
            <Card
              style={{ width: "100%" }}
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta title="Card title" description="This is the description" />
            </Card>
          </div>
        </Content>
      </>
    );
  }
}

export default FrontMain;
