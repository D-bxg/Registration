import React, { Component } from "react";
// route
import ApiUrl from "../config/ApiUrl";
import {} from "react-router-dom";
// compoent
// compoent antd
import { Tabs, List, Button, Modal, Form, Input, message, Spin } from "antd";
import { UserOutlined } from "@ant-design/icons";
// axios
import Axios from "axios";
// css
// variable
// variable antd
const { TabPane } = Tabs;

class UserApply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Set_isModalVisible: false,
      New_isModalVisible: false,
      isLoading: false,
      data1: [
        // "Racing car sprays burning fuel into crowd.",
        // "Japanese princess to wed commoner.",
        // "Australian walks 100km after outback crash.",
        // "Man charged over missing wedding girl.",
        // "Los Angeles battles huge wildfires.",
      ],
      set_newsId: 0,
    };
  }

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  New_showModal = () => {
    this.New_setIsModalVisible(true);
  };

  New_handleOk = () => {
    this.New_setIsModalVisible(false);
  };

  New_handleCancel = () => {
    this.New_setIsModalVisible(false);
  };

  New_isModalVisible = () => {
    this.setState({
      New_isModalVisible: !this.state.New_isModalVisible,
    });
  };

  New_setIsModalVisible = (flag) => {
    this.setState({
      New_isModalVisible: flag,
    });
  };
  // 设置编辑的一套方法
  Set_showModal = (id) => {
    this.setState({
      set_newsId: id,
    });
    this.Set_setIsModalVisible(true);
  };

  Set_handleOk = () => {
    this.Set_setIsModalVisible(false);
  };

  Set_handleCancel = () => {
    this.Set_setIsModalVisible(false);
  };

  Set_isModalVisible = () => {
    this.setState({
      Set_isModalVisible: !this.state.Set_isModalVisible,
    });
  };

  Set_setIsModalVisible = (flag) => {
    this.setState({
      Set_isModalVisible: flag,
    });
  };

  onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  onFinish = (values) => {
    this.setIsLoading(true);
    Axios({
      method: "post",
      url: ApiUrl.saveNews,
      data: values,
      withCredentials: true,
    }).then((res) => {
      if (res.data === "success") {
        // localStorage.setItem("token", res.data.token);
        // setAuthToken(res.data.token);
        this.setIsLoading(false);
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
    setTimeout(() => {
      this.setIsLoading(false);
    }, 300);
  };
  onFinish_update = (values) => {
    values.newsId = this.state.set_newsId;
    console.log(values);
    this.setIsLoading(true);

    Axios({
      method: "post",
      url: ApiUrl.updateNews,
      data: values,
      withCredentials: true,
    }).then((res) => {
      if (res.data === "success") {
        // localStorage.setItem("token", res.data.token);
        // setAuthToken(res.data.token);
        this.setIsLoading(false);
        message.success("编辑成功");
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
        message.error("编辑错误");
        // this.setIsLoading(false);
      }
    });
    setTimeout(() => {
      this.setIsLoading(false);
    }, 300);
  };
  setIsLoading = (flag) => {
    this.setState({
      isLoading: flag,
    });
  };

  componentDidMount = () => {
    Axios({
      method: "get",
      url: ApiUrl.getAllApplyInformation,
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

  deleteNews = (id) => {
    Axios({
      method: "post",
      url: `${ApiUrl.deleteApplyInformation}/${id}`,
      withCredentials: true,
    }).then(() => {
      Axios({
        method: "get",
        url: ApiUrl.getAllApplyInformation,
        withCredentials: true,
      }).then((res) => {
        this.setState({
          data1: res.data,
          // res.data.map((value) => {
          //   return value.newsTitle;
          // })
        });
      });
    });
  };

  render() {
    return (
      <>
        <Tabs defaultActiveKey="1" type="card" size="Large">
          <TabPane tab="报名信息" key="1">
            <List
              size="large"
              header={
                <div
                  style={{
                    display: "grid",
                    gridTemplate: "1fr/repeat(3,1fr)",
                  }}
                >
                  <div>项目名称</div>
                  <div></div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="primary"
                      style={{ display:"none", background: "#52c41a", borderColor: "#52c41a" }}
                      onClick={this.New_showModal}
                    >
                      
                    </Button>
                    {/* 增加一个公告的模态框 */}
                    
                  </div>
                </div>
              }
              bordered
              dataSource={this.state.data1}
              renderItem={(item) => (
                <div
                  style={{
                    display: "grid",
                    gridTemplate: "1fr/repeat(3,1fr)",
                  }}
                >
                  <List.Item>{item.applyInformationLasTip}</List.Item>
                  <List.Item></List.Item>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      type="primary"
                      style={{
                        margin: "4px",
                        background: "#1890ff",
                        borderColor: "#1890ff",
                      }}
                      onClick={() => {
                        this.Set_showModal(item.newsId);
                      }}
                    >
                      打印
                    </Button>
                    <Modal
                      title="编辑项目"
                      visible={this.state.Set_isModalVisible}
                      onOk={this.Set_handleOk}
                      onCancel={this.Set_handleCancel}
                      cancelText="取消"
                      okText="完成"
                    >
                      <Spin
                        tip="加载中..."
                        spinning={this.state.isLoading}
                        style={{ backgroundColor: "rgb(255,255,255,0.3)" }}
                      >
                        <Form
                          name="normal_login"
                          className="login-form"
                          onFinish={this.onFinish_update}
                        >
                          <Form.Item
                            style={{ display: "none" }}
                            label=""
                            name="newsId"

                            // initialValues={item.newsId }
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Please input your username!",
                            //   },
                            // ]}
                          ></Form.Item>
                          项目标题
                          <Form.Item
                            label=""
                            name="newsTitle"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <Input
                              placeholder="输入标题"
                              prefix={<UserOutlined />}
                            />
                          </Form.Item>
                          项目内容：
                          <Form.Item
                            label=""
                            name="newsContent"
                            rules={[
                              {
                                required: true,
                                message: "Please input your username!",
                              },
                            ]}
                          >
                            <Input
                              placeholder="输入内容"
                              prefix={<UserOutlined />}
                            />
                          </Form.Item>
                          <div className="account__submit">
                            <div></div>
                            <Form.Item>
                              <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                // icon={<PoweroffOutlined />}
                              >
                                编辑
                              </Button>
                            </Form.Item>
                            <div></div>
                          </div>
                        </Form>
                      </Spin>
                    </Modal>
                    <Button
                      type="primary"
                      style={{
                        margin: "4px",
                        background: "#f5222d",
                        borderColor: "#f5222d",
                      }}
                      onClick={() => {
                        this.deleteNews(item.applyInformationId);
                      }}
                    >
                      删除
                    </Button>
                  </div>
                </div>
              )}
            />
          </TabPane>
          <TabPane tab="Card Tab 2" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default UserApply;
