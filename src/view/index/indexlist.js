import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import TxtTag from "../txtTag";
import { List, Avatar } from "antd";
import { connect } from "react-redux";
import axios from "axios";
class indexlist extends Component {
    constructor(arg) {
        super(arg);
        this.state = {
            page: 1
        };
        this.getDate(this.props.tab, this.state.page);
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.page !== nextState.page) {
            this.getDate(nextProps.tab, nextState.page);
        }
        if(this.props.tab!==nextProps.tab){
            this.state.page=1;
            this.getDate(nextProps.tab,1)
        }
        return true;
    }
    getDate(tab, page) {
        this.props.dispatch(dispath => {
            axios
                .get(
                    `https://cnodejs.org/api/v1/topics?tab=${
                        tab
                    }&page=${page}&limit=10`
                )
                .then(res => {
                    dispath({
                        type: "LIST_UPDATA_SUCC",
                        data: res.data
                    });
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }
    render() {
        let pagination = {
            current: this.state.page,
            pageSize: 10,
            total: 500,
            onChange: current => {
                console.log(current);
                this.setState({
                    page: current
                });
            }
        };
        let { loading, data } = this.props;
        return (
            <div>
                <List
                    loading={loading}
                    dataSource={data}
                    pagination={pagination}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                "回复" + item.reply_count,
                                "访问量" + item.visit_count
                            ]}
                        >
                            <List.Item.Meta
                                className={"pic"}
                                avatar={<Avatar src={item.author.avatar_url} />}
                                title={
                                    <div>
                                        <TxtTag data={item} />
                                        <NavLink to={"/details/" + item.id}>
                                            {item.title}
                                        </NavLink>
                                    </div>
                                }
                                description={
                                    <p>
                                        <NavLink
                                            to={
                                                "/user/" + item.author.loginname
                                            }
                                        >
                                            {item.author.loginname}
                                        </NavLink>
                                        发表于:{item.create_at.split("T")[0]}
                                    </p>
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

export default connect(state => state.list)(indexlist);
