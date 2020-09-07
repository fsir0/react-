import React, { Component } from 'react'
import './Pagination.css'

export default class Pagination extends Component {
    state = {
        currentPage: this.props.currentPage || 1,
        pageSize: this.props.pageSize || 10,
        total: this.props.total || 0,
        curPager: this.props.curPager || 5,
    }
    prev = () => {
        const { currentPage } = this.state
        if (currentPage <= 1) return
        this.toPage(currentPage - 1)
    }
    next = () => {
        const { currentPage, pageSize, total } = this.state
        if (currentPage >= Math.ceil(total / pageSize)) return
        this.toPage(currentPage + 1)
    }
    toPage = (page) => {
        const { currentPage } = this.state
        this.calculationPagerNumber()
        if (page === currentPage) return
        this.setState({
            currentPage: page
        })
        this.props.handlePageChange && this.props.handlePageChange(page)
    }
    calculationPagerNumber = () => {
        
    }
    render() {
        const { currentPage, pageSize, total, curPager } = this.state
        const maxPagerNumber = Math.ceil(total / pageSize)
        let minPage = Math.ceil(currentPage - curPager / 2)
        let maxPage = minPage + curPager - 1
        minPage = minPage <= 1 ? 1 : minPage
        maxPage = maxPage >= maxPagerNumber ? maxPagerNumber : maxPage
        let pagerList = []
        for (let i = minPage; i <= maxPage; i++) {
            pagerList.push(
                <span
                    key={i}
                    className={currentPage === i ? 'item active': 'item'}
                    onClick={() => this.toPage(i)}
                >{i}</span>
            )
        }
        if (!total) return null
        return (
            <div className="pagination-wrapper">
                <span className={currentPage <= 1 ? 'item disabled' : 'item'} onClick={() => { this.toPage(1) }}>首页</span>
                <span className={currentPage <= 1 ? 'item disabled' : 'item'} onClick={this.prev}>前一页</span>
                {pagerList}
                <span className={currentPage >= maxPagerNumber ? 'item disabled' : 'item'} onClick={this.next}>后一页</span>
                <span className={currentPage >= maxPagerNumber ? 'item disabled' : 'item'} onClick={() => { this.toPage(maxPagerNumber) }}>末页</span>
                <span className="current">{currentPage}</span>
                /
                <span>{Math.ceil(total / pageSize)}</span>
            </div>
        )
    }
}
