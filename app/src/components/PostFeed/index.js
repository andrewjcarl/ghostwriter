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
            <React.Fragment>
                {this.props.posts.map(function(post){
                    return <Post key={post.id} post={post} />;
                })}
            </React.Fragment>
        );
    }
}

export default PostFeed;