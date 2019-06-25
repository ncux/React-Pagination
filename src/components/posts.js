import React, { Component } from 'react';
import Loading from './loading';


export default class Posts extends Component {

    render() {

        const { posts, loading } = this.props;

        const displayStuff = () => {
            if(loading) {
                return <Loading />
            } else return (
                <div>
                    <h1 className="display-2 mb-2">Posts</h1>
                    <ul className="list-group mb-4">
                        { posts.map(post => {
                            return (
                                <li key={ post.id } className="list-group-item list-group-item-action my-2">
                                    <span className="text-primary">{ post.title }</span>
                                </li>
                            )
                        }) }

                    </ul>
                </div>
            )
        };

        return (
            <div>
                { displayStuff() }
            </div>
        )
    };
}