import React, { Component } from 'react'
import {Layout} from 'antd'

export default class MainFooter extends Component {
    render() {
        return (
            <div>
                <Layout.Footer style={{textAlign:"center"}}>
                    备案号：湘ICP备15014315号-1 版权所有：台州有限集团科技公司
                </Layout.Footer>
            </div>
        )
    }
}
