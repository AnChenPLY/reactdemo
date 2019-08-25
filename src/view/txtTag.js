import React, { Component } from 'react'
import {Tag} from "antd"
import 'antd/dist/antd.css'

const tab={
    top:{
        color:'red',
        txt:'置顶'
    },
    good:{
        color:'lime',
        txt:'精华'
    },
    ask:{
        color:'green',
        txt:'问答'
    },
    job:{
        color:'magenta',
        txt:'招聘'
    },
    dev:{
        color:'purple',
        txt:'测试'
    },
    share:{
        color:"orange",
        txt:'分享'
    }
}

function getTab(data) {
    // console.log(data);
    return(
        data.top?"top":data.good?"good":data.tab
    )
}

export default class txtTag extends Component {
    render() {
        // console.log(this.props.data);
        let nowTab=tab[getTab(this.props.data)]
        return (

           <Tag color={nowTab.color}>{nowTab.txt}</Tag>
        )
    }
}
