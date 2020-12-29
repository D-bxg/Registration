/*
 * @Author: D_bxg
 * @Date: 2020-12-09 16:16:23
 * @LastEditors: D_bxg
 * @LastEditTime: 2020-12-25 13:31:37
 * @Description: antd全局变量
 * @FilePath: \front-end\craco.config.js
 */

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#40a9ff' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};