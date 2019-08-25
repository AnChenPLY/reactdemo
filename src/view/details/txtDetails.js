import React, { Component } from 'react'
import data from './data'
import {Card,Avatar}from 'antd'
import {NavLink}from 'react-router-dom'
import 'antd/dist/antd.css'
import TxtTag from '../txtTag'
export default class txtDetails extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Meta
                        title={
                            <div>
                               <h3>{data.data.title}</h3>
                               <TxtTag
                                    data={data.data}
                               >
                               </TxtTag>
                               <Avatar src={data.data.author.avatar_url}>
                               </Avatar>
                               <NavLink to={'/user/'+data.data.author.loginname}>{data.data.author.loginname}</NavLink>
                               发表于:{data.data.create_at.split("T")[0]}
                            </div>
                            
                        }
                    >
                    </Card.Meta>
                    <div
                        dangerouslySetInnerHTML={{
                            __html:data.data.content
                        }}
                    >
                    </div>
                </Card>                
            </div>
        )
    }
}
