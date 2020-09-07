import React, { Component } from 'react'
import FunComponent from './FunComponent.js'
import ClassComponent from './ClassComponent.js'
import BollList from './BollList.js'
import PaginationTest from './PaginationTest.js'
import './index.css'
import Modal from './components/Modal'

export default class App extends Component {
    render() {
        return (
            <div>
                <BollList />
                <Modal>
                    <FunComponent />
                    <ClassComponent />
                    <PaginationTest />
                </Modal>
            </div>
        )
    }
}
