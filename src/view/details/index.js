import React, { Component } from 'react'
import 'antd/dist/antd.css'
import data from './data'
import TxtDetails from './txtDetails'
import ReplyList from './replyList'
export default class Details extends Component {
    render() {
        return (
            <div className='wrap'>
                <TxtDetails></TxtDetails>
                <ReplyList
                    replies={data.data.replies}
                    replyCount={data.data.reply_count}
                ></ReplyList>
            </div>
        )
    }
}
