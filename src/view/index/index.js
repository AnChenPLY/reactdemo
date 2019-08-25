import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Row, Col } from "antd";
import IndexList from './indexlist'
import MenuIndex from './menuindex'
export default class Index extends Component {
    render() {
        let tab=this.props.match.params.id
        return (
            <Row className="wrap">
                <Col md={6}>
                    <MenuIndex/>
                </Col>
                <Col md={18} className='IndexList'>
                    <IndexList
                        tab={tab}
                    ></IndexList>
                </Col>
            </Row>
        );
    }
}
