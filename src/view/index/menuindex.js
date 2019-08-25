import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Row, Col } from "antd";
export default class menuindex extends Component {
    render() {
        return (
            <div>
                <Menu id="MenuIndex">
                    <Menu.Item>
                        <NavLink to="/index/all">全部</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/index/good">精华</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/index/ask">问答</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/index/share">分享</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/index/job">招聘</NavLink>
                    </Menu.Item>
                    <Menu.Item>
                        <NavLink to="/index/dev">测试</NavLink>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
