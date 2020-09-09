import React, { Component } from 'react'
import FunComponent from './FunComponent.js'
import ClassComponent from './ClassComponent.js'
// import BollList from './BollList.js'
import PaginationTest from './PaginationTest.js'
import './index.css'
import Modal from './components/Modal'
import FormTest from './components/FormTest'

export default class App extends Component {
    state = {
        modalShow: false
    }
    closeModal = () => {
        this.setState({
            modalShow: false
        })
    }
    render() {
        return (
            <div>
                {/* <BollList /> */}
                <FormTest />
                {this.state.modalShow ?
                <Modal handleCLose={this.closeModal}>
                    <FunComponent />
                    <ClassComponent />
                    <PaginationTest />
                </Modal> : null}
                <button onClick={() => {
                    this.setState({
                        modalShow: true
                    })
                }}>展示modal</button>
            </div>
        )
    }
}
