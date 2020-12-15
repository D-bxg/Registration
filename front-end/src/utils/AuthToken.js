/*
 * @Author: lyc
 * @Date: 2020-12-02 23:28:32
 * @LastEditors: D_bxg
 * @LastEditTime: 2020-12-11 03:48:07
 * @Description: token 头工具类
 */
import axios from "axios";
const setAuthToken = token => {
  if (token) {
    // token存在设置header,因为后续每个请求都需要
    axios.defaults.headers.common['token'] = token;
  } else {
    // 没有token就移除
    delete axios.defaults.headers.common['token'];
  }
}
export default setAuthToken;