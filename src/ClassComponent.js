import React, { Component } from 'react'
export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        // 如果此处需要修改constructor则需要传super(props)
        console.log(props)
    }
    render() {
        return <p>类组件，传过来的值：{this.props.value}</p>
    }
}