import React, { Component } from 'react'
import data from './data'
import {Card}from 'antd'
import 'antd/dist/antd.css'
export default class Book extends Component {
    render() {
        return (
            <div className={'wrap'}>
                {
                    data.map((item,index)=>{
                        // console.log(item);
                        return(
                          <Card 
                            key={index}
                            title={item.title}
                            type='inner'
                          >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html:item.content
                                }}
                            >

                            </div>
                          </Card>
                        )
                    })
                }
            </div>
        )
    }
}
