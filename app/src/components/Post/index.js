import React, { Component } from 'react';
import './style.css';

class Post extends Component {
    render() {

        if (this.props.loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="Post">
                <div>
                    {this.props.post.username}
                </div>
                <div>
                    {this.props.post.message}
                </div>
            </div>
        );
    }
}

export default Post;