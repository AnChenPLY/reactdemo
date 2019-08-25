import React, { Component } from 'react'
import {Card,Avatar,List}from 'antd'
import {NavLink}from 'react-router-dom'
import TxtTag from '../txtTag'
export default class replyList extends Component {
    render() {
        let {replies,replyCount}=this.props
        return (
            <div>
                <List
                    id={'list'}
                    dataSource={replies}
                    renderItem={
                        item=>(<List.Item
                            className={'listItem'}
                            extra={item.ups.length>0?<span className='answer'>有{item.ups.length}个人赞了这条回复</span>:''}
                        >
                            <List.Item.Meta
                                avatar={
                                    <Avatar src={item.author.avatar_url}></Avatar>
                                }
                                description={
                                    <p>
                                        <NavLink to={'/user/'+item.author.loginname}>{item.author.loginname}</NavLink>
                                        发表于:{item.create_at.split("T")[0]}
                                    </p>
                                } 
                            >

                            </List.Item.Meta>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >
                            </div>
                        </List.Item>

                        )
                    }
                >
                    
                </List>
            </div>
        )
    }
}
