import React, { Component } from "react";
// route
import ApiUrl from "../config/ApiUrl";
import {} from "react-router-dom";
// compoent
import Nav from "../components/Nav";
// compoent antd
import { Layout, Button,  message,  } from "antd";
import {  } from "@ant-design/icons";
// axios
import Axios from "axios";
// css
import "../static/css/Detail.min.css";
// variable
// variable antd
const { Content } = Layout;
class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
      value:{
        applyInformationLasTip:""
      }
    };
  }
  componentDidMount() {
    Axios({
      method: "get",
      url: ApiUrl.getNewsById + `/${this.props.match.params.newsId}`,
      withCredentials: true,
    }).then((res) => {
      this.setState({
        New_isModalVisible: false,
        isLoading: false,
        news: res.data,
        // res.data.map((value) => {
        //   return value.newsTitle;
        // })
      });
    });
  }
  New_showModal = (value) => {
    this.state.value.applyInformationLasTip = this.state.news.newsTitle
    value = this.state.value
    Axios({
      method: "post",
      url: ApiUrl.saveApplyInformation,
      data: value,
      withCredentials: true,
    }).then((res) => {
      if (res.data === "success") {
        // localStorage.setItem("token", res.data.token);
        // setAuthToken(res.data.token);
        message.success("新增成功");
        // this.props.history.push("/");
        Axios({
          method: "get",
          url: ApiUrl.getAllNews,
          withCredentials: true,
        }).then((res) => {
          this.setState({
            data1: res.data,
          });
        });
      } else {
        message.error("添加错误");
        // this.setIsLoading(false);
      }
    });
  };

  render() {
    return (
      <>
        <Layout className="layout">
          <Nav></Nav>
          <Content style={{ padding: "20px 50px", minHeight: "calc(100vh-84px)" }}>
            <div className="site-layout-content">
              <div className="detail">
                <div>项目名称：{this.state.news.newsTitle}</div>
                <div>项目时间：{this.state.news.newsContent}</div>
                <Button
                  type="primary"
                  style={{ background: "#52c41a", borderColor: "#52c41a" }}
                  onClick={this.New_showModal}
                >
                  报名
                </Button>
              </div>
            </div>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Detail;
