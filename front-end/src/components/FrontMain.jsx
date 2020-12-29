import React, { Component } from "react";
// route
import ApiUrl from "../config/ApiUrl";
import { Link } from "react-router-dom";
// compoent
// compoent antd
import { Layout, Carousel, Divider, Card, Row, Col } from "antd";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// axios
import Axios from "axios";
// css
// variable
// variable antd
import lunbo from "../static/image/lunbo.png";
import lunbo1 from "../static/image/lunbo1.jpg";
import lunbo2 from "../static/image/lunbo2.jpg";
const { Content } = Layout;
const { Meta } = Card;
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "400px",
  textAlign: "center",
  background: "rgb(153, 0, 255)",
};

class FrontMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [
        // "Racing car sprays burning fuel into crowd.",
        // "Japanese princess to wed commoner.",
        // "Australian walks 100km after outback crash.",
        // "Man charged over missing wedding girl.",
        // "Los Angeles battles huge wildfires.",
      ],
    };
  }

  componentDidMount = () => {
    Axios({
      method: "get",
      url: ApiUrl.getAllNews,
      withCredentials: true,
    }).then((res) => {
      this.setState({
        data1: res.data,
        // res.data.map((value) => {
        //   return value.newsTitle;
        // })
      });
    });
  };

  render() {
    return (
      <>
        <Content style={{ padding: "20px 50px", minHeight: "calc(100vh-84px)" }}>
          <div className="site-layout-content">
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}><img style={{height:"100%"}} src={lunbo} alt=""/></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img style={{height:"100%"}} src={lunbo1} alt=""/></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img style={{height:"100%"}} src={lunbo2} alt=""/></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img style={{height:"100%"}} src={lunbo} alt=""/></h3>
              </div>
            </Carousel>
            <Divider />
            <div className="site-card-wrapper">
              <Row gutter={[16, 16]}>



                {/* 循环遍历 */}


                
                {this.state.data1.map((value, key) => {
                  console.log(value)
                  return (
                    <Col key={key} span={8}>
                      <Link to={`/detail/${value.newsId}`}>
                        <Card
                          hoverable={true}
                          style={{ backgroundColor: " rgb(178, 146, 192)" }}
                          // actions={[
                          //   <SettingOutlined key="setting" />,
                          //   <EditOutlined key="edit" />,
                          //   <EllipsisOutlined key="ellipsis" />,
                          // ]}
                        >
                          <Meta
                            title={value.newsTitle}
                            description={value.newsContent}
                          />
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        </Content>
      </>
    );
  }
}

export default FrontMain;
