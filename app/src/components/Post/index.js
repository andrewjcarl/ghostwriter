import React, { Component } from 'react';
import './style.css';

class Post extends Component {

    handleUpvote = (post) => {
        this.props.db.database().ref("posts").child(this.props.post._key).child("upvotes").set(this.props.post.upvotes += 1);
    }

    handleDownvote = (post) => {
        this.props.db.database().ref("posts").child(this.props.post._key).child("downvotes").set(this.props.post.downvotes += 1);
    }

    render() {
        if (this.props.loading) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="post-single">
                <div className="vote">
                    <button
                        className="vote-button upvote"
                        onClick={ this.handleUpvote.bind(this, this.props.post) }
                        type="button"
                        >
                        ^<br/>
                        {"+ "+this.props.post.upvotes}
                    </button>
                    <div className="vote-count">
                        {this.props.post.upvotes-this.props.post.downvotes}
                    </div>
                    <button
                        className="vote-button"
                    onClick={ this.handleDownvote.bind(this, this.props.post) }
                    type="button"
                    >
                    {"- "+this.props.post.downvotes}<br/>
                    v
                    </button>
                </div>
                <div class="post-content">
                    <div className="user">
                        @{this.props.post.username}:
                    </div>
                    <div className="message">
                        {this.props.post.message}
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;