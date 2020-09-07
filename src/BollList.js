import React, { Component } from 'react'
import Boll from './Boll.js'

export default class BollList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bollList: []
        }
        this.timer = setInterval(() => {
            this.setState({
                bollList: [...this.state.bollList, <Boll
                        key={this.state.bollList.length}
                        left={parseInt(Math.random() * document.documentElement.clientWidth)}
                        top={parseInt(Math.random() * document.documentElement.clientHeight)}
                        speedX={parseInt(Math.random() * 100 + 100)}
                        speedY={parseInt(Math.random() * 100 + 100)}
                    />]
            })
            if (this.state.bollList.length >= 10) {
                clearInterval(this.timer)
            }
        }, 2000)
    }
    render() {
        return (
            <div>
                {this.state.bollList}
            </div>
        )
    }
}
