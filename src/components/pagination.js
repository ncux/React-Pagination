import React, { Component } from 'react';

export default class Pagination extends Component {

    pageNumbers = [];

    render() {

        const { postsPerPage, totalPosts, paginate } = this.props;

        for(let i=1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
            this.pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="pagination">
                    { this.pageNumbers.map(page => {
                        return (
                            <li key={page} className="page-item">
                                <a onClick={ () => paginate(page) } href="#" className="page-link">{ page }</a>
                            </li>
                        )
                    }) }
                </ul>
            </nav>
        )
    }
}