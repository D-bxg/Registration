import React, { Component } from "react";
// route
import ApiUrl from "../config/ApiUrl";
import {} from "react-router-dom";
// compoent
// compoent antd
import { Spin, Form, Input, message, Button } from "antd";
import {
  UserOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  PoweroffOutlined,
  LockOutlined,
} from "@ant-design/icons";
// axios
import Axios from "axios";
// css
// variable
// variable antd
class temp extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }
  setIsLoading = (flag) => {
    this.setState({
      isLoading: flag,
    });
  };
  onFinish = (values) => {
    console.log(values);
    this.setIsLoading(true);
    Axios({
      method: "post",
      url: ApiUrl.getGeneralUserByName,
      data: values,
      withCredentials: true,
    }).then((res) => {
      if (res.data === "success") {
        // localStorage.setItem("token", res.data.token);
        // setAuthToken(res.data.token);
        this.setIsLoading(false);
        message.success("成功登录！");
        this.props.history.push("/");
      } else {
        message.error("用户名密码错误");
        // this.setIsLoading(false);
      }
    });
    setTimeout(() => {
      this.setIsLoading(false);
    }, 300);
  };
  render() {
    return (
      <>
        <Spin
          tip="加载中..."
          spinning={this.state.isLoading}
          style={{ backgroundColor: "rgb(255,255,255,0.3)" }}
        >
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
          >
            {/* 用户名 */}
            用户名：
            <Form.Item
              label=""
              name="generalUserName"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input placeholder="输入账号" prefix={<UserOutlined />} />
            </Form.Item>
            {/* 密码 */}
            密码：
            <Form.Item
              label=""
              name="generalUserPassword"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password
                placeholder="输入密码"
                prefix={<LockOutlined />}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
            </Form.Item>
            {/* 提交按钮 */}
            <div className="account__submit">
              <div></div>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  icon={<PoweroffOutlined />}
                >
                  登录
                </Button>
              </Form.Item>
              <div></div>
            </div>
          </Form>
        </Spin>
      </>
    );
  }
}

export default temp;
