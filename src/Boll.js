import React, { Component } from 'react'
import './Boll.css'
export default class Boll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            left: props.left || 0,
            top: props.top || 0,
            speedX: props.speedX,
            speedY: props.speedY
        }
        const duration = 16
        this.timer = setInterval(() => {
            const { speedX, speedY, left, top } = this.state
            const disX = speedX * duration / 1000
            const disY = speedY * duration / 1000
            let newLeft = left + disX
            let newTop = top + disY
            if (newLeft >= document.documentElement.clientWidth - 100) {
                newLeft = document.documentElement.clientWidth - 100
                this.setState({
                    speedX: -props.speedX
                })
            } else if (newLeft <= 0) {
                newLeft = 0
                this.setState({
                    speedX: props.speedX
                })
            }
            if (newTop >= document.documentElement.clientHeight - 100) {
                newTop = document.documentElement.clientHeight - 100
                this.setState({
                    speedY: -props.speedY
                })
            } else if (newTop <= 0) {
                newTop = 0
                this.setState({
                    speedY: props.speedY
                })
            }
            this.setState({
                left: newLeft,
                top: newTop
            })
        }, duration)
    }
    render() {
        return (
            <p className="boll-wrapper" style={{
                left: this.state.left,
                top: this.state.top
            }}></p>
        )
    }
}