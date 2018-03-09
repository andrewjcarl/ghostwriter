import React, { Component } from 'react';
import './style.css';
import Post from '../Post';

class PostFeed extends Component {
    render() {

        if (this.props.loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <ul>
            {this.props.posts.map(function(post){
                return <Post post={post} />;
            })}
            </ul>
        );
    }
}

export default PostFeed;