import React, { Component } from 'react'
import RouterIndex from './router';
import MainHeader from './view/main-header';
import MainFooter from './view/main-footer';
import './view/index.css'
  /**
   * 1.react-router-dom
   * 2.antd
   * 3.redux
   * 4.react-redux
   * 5.react-thunk
   * 6.axios
   */
  /**
   * 分板块
   *    头
   *    内容
   *    底部
   * 路由模块
   *    1.详情模块 details
   *    2.首页模块 index
   *    3.教程     book
   *    4.关于     about
   *    5.用户模块  user
   */
export default class App extends Component {
  render() {
    return (
      <div className='pageWrap'>
        <MainHeader/>
        <main className="main">
          <RouterIndex/>
        </main>
        <MainFooter/>
      </div>
    )
  }
}
