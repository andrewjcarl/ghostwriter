import React, { Component } from 'react';
import './style.css';

class Post extends Component {
    handleUpvote = (post) => {
    // Update votevalue through firebase call here
    }

    handleDownvote = (post) => {
    // Update votevalue through firebase call here
    }

    render() {

        if (this.props.loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="post-single">
                <div>
                    Imposter Name: {this.props.post.username}
                </div>
                <div>
                    Message: {this.props.post.message}
                </div>
                <div>
                    <button
                        onClick={ this.handleUpvote.bind(this, this.props.post) }
                        type="button"
                        >
                        ^
                    </button>
                    <div>{this.props.post.votevalue}</div>
                    <button
                    onClick={ this.handleDownvote.bind(this, this.props.post) }
                    type="button"
                    >
                    v
                    </button>
                </div>
            </div>
        );
    }
}

export default Post;