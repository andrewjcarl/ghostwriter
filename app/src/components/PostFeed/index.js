import React, { Component } from 'react';
import './style.css';
import Post from '../Post';

class PostFeed extends Component {
    render() {
        var that = this;
        if (this.props.loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <ul>
            {this.props.posts.map(function(post){
                return <Post db={that.props.db} key={post._key} post={post} />;
            })}
            </ul>
        );
    }
}

export default PostFeed;