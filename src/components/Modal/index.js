import React, { Component } from 'react'
import './index.css'

export default class Modal extends Component {
    render() {
        const datas = Object.assign({
            bg: 'rgba(0, 0, 0, .4)'
        }, this.props)
        return (
            <div className="modal-wrapper" style={{
                backgroundColor: datas.bg
            }}>
                <div className="modal-content">
                    <i className="modal-close"></i>
                    {datas.children}
                </div>
            </div>
        )
    }
}
