/*
 * @Author: D_bxg
 * @Date: 2020-12-15 16:20:53
 * @LastEditors: D_bxg
 * @LastEditTime: 2020-12-17 16:11:46
 * @Description: file content
 * @FilePath: \front-end\src\components\ManageAnnouncement.jsx
 */
import React, { Component } from "react";
// route
import ApiUrl from "../config/ApiUrl";
import {} from "react-router-dom";
// compoent
// compoent antd
import {
  Tabs,
  Table,
  List,
  Button,
  Modal,
  Form,
  Input,
  message,
  Spin,
} from "antd";
import {  UserOutlined } from "@ant-design/icons";
// axios
import Axios from "axios";
// css
// variable
// variable antd
const { TabPane } = Tabs;
/**
 * 字符串数组
 *
 * 列表显示内容的字符串
 */
const data1 = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];
/**
 * 对象数组
 * 对象格式：
 *    键值对
 *    键值对
 *    键值对-属性值：对象数组：
 *                    两个键值对
 *
 * 表格格式
 */
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Joe",
        value: "Joe",
      },
      {
        text: "Jim",
        value: "Jim",
      },
      {
        text: "Submenu",
        value: "Submenu",
        children: [
          {
            text: "Green",
            value: "Green",
          },
          {
            text: "Black",
            value: "Black",
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
  },
  {
    title: "Age",
    dataIndex: "age",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Address",
    dataIndex: "address",
    filters: [
      {
        text: "London",
        value: "London",
      },
      {
        text: "New York",
        value: "New York",
      },
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
    sortDirections: ["descend", "ascend"],
  },
];
/**
 * 对象数组
 *
 * 表格内值
 */
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];
// ============================================================================================================
class ManageAnnouncement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Set_isModalVisible: false,
      New_isModalVisible: false,
      isLoading: false,
    };
  }
  // 设置新建的一套方法
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
  Set_showModal = () => {
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
      } else {
        message.error("添加错误");
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

  render() {
    return (
      <>
        <Tabs defaultActiveKey="1" type="card" size="Large">
          <TabPane tab="现有公告" key="1">
            <Table
              columns={columns}
              dataSource={data}
              onChange={this.onChange}
            />
          </TabPane>
          <TabPane tab="编辑公告" key="2">
            <List
              size="large"
              header={
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    type="primary"
                    style={{ background: "#52c41a", borderColor: "#52c41a" }}
                    onClick={this.New_showModal}
                  >
                    新增
                  </Button>
                  {/* 增加一个公告的模态框 */}

                  <Modal
                    title="新增公告"
                    visible={this.state.New_isModalVisible}
                    onOk={this.New_handleOk}
                    onCancel={this.New_handleCancel}
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
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                      >
                        公告标题
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
                        公告内容：
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
                              增加
                            </Button>
                          </Form.Item>
                          <div></div>
                        </div>
                      </Form>
                    </Spin>
                  </Modal>
                </div>
              }
              bordered
              dataSource={data1}
              renderItem={(item) => (
                <div
                  style={{
                    display: "grid",
                    gridTemplate: "1fr/repeat(2,1fr)",
                  }}
                >
                  <List.Item>{item}</List.Item>
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
                      onClick={this.Set_showModal}
                    >
                      编辑
                    </Button>
                    <Modal
                      title="编辑公告"
                      visible={this.state.Set_isModalVisible}
                      onOk={this.Set_handleOk}
                      onCancel={this.Set_handleCancel}
                      cancelText="取消"
                      okText="完成"
                    >
                      <Form>
                        <Form.Item
                          label="Username"
                          name="username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Form>
                    </Modal>
                    <Button
                      type="primary"
                      style={{
                        margin: "4px",
                        background: "#f5222d",
                        borderColor: "#f5222d",
                      }}
                    >
                      删除
                    </Button>
                  </div>
                </div>
              )}
            />
          </TabPane>
        </Tabs>
      </>
    );
  }
}

export default ManageAnnouncement;
