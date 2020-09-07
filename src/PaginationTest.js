import React, { Component } from 'react'
import Pagination from './Pagination'

export default class PaginationTest extends Component {
    state = {
        page: 1
    }
    handleChangePage = (page) => {
        this.setState({
            page: page
        })
    }
    render() {
        const { page } = this.state
        return (
            <div>
                <p>当前第{page}页文章</p>
                <Pagination total={100} currentPage={page} pageSize={3} curPager={5} handlePageChange={this.handleChangePage} />
            </div>
        )
    }
}
