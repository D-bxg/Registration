/*
 * @Author: D_bxg
 * @Date: 2020-12-09 16:16:23
 * @LastEditors: D_bxg
 * @LastEditTime: 2020-12-09 17:43:32
 * @Description: antd全局变量
 * @FilePath: \registration\craco.config.js
 */

const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#722ED1' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};