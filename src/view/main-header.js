import React, { Component } from 'react'
import {Layout,Row,Col,Divider,Menu,Icon} from 'antd'
import {NavLink} from 'react-router-dom'
import 'antd/dist/antd.css'
//我们将整个设计建议区域按照 24 等分的原则进行划分。
export default class MainHeader extends Component {
    render() {
        return (
            <div>
                <Layout.Header>
                    <Row className={'wrap'}>
                        <Col md={6}>
                           <h1 id={'logo'}>discussion</h1>
                        </Col>
                        <Col md={18}>
                            <Divider type='vertical' className={'headerDivider'}></Divider>
                            我是头部组件
                            <Menu mode='horizontal' theme='light' className={'T-Menu'}>
                                <Menu.Item><NavLink to='/index/all'><Icon type='home'/>首页</NavLink> </Menu.Item>
                                <Menu.Item><NavLink to='/book'><Icon type='book'/>教程</NavLink></Menu.Item>
                                <Menu.Item><NavLink to='/about'><Icon type='bell'/>关于</NavLink></Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                   
                </Layout.Header>
            </div>
        )
    }
}
