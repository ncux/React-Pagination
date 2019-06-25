import React, { Component } from 'react';
import axios from 'axios';

import Posts from './components/posts';
import Pagination from './components/pagination';
import './App.css';

const postsUrl = `https://jsonplaceholder.typicode.com/posts`;

export default class App extends Component {

    state = {
        posts: [],
        loading: false,
        currentPage: 1,
        postsPerPage: 10,
        postsOnPage: []
    };

    async componentDidMount() {
        this.setState({ loading: true });
        let res = await axios.get(postsUrl);
        console.log(res.data);
        this.setState({
            posts: res.data,
            loading: false
        },  async () => {
            const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
            const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
            await this.setState({ postsOnPage: this.state.posts.slice(indexOfFirstPost, indexOfLastPost) });
        });
    };

    // change page
    paginate = page => this.setState({ currentPage: page });

    render() {
        return (
            <div className="container-fluid mt-3">
                <h2>Pagination app</h2>
                <Posts posts={ this.state.postsOnPage } loading={ this.state.loading } />
                <Pagination paginate={ this.paginate } postsPerPage={ this.state.postsPerPage } totalPosts={ this.state.posts.length } />
            </div>
        );
    }

};
