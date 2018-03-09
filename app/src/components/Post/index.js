import React, { Component } from 'react';
import './style.css';

class Post extends Component {

    handleUpvote = (post) => {
        this.props.db.database().ref("posts").child(this.props.post._key).child("votevalue").set(this.props.post.votevalue += 1);
    }

    handleDownvote = (post) => {
        this.props.db.database().ref("posts").child(this.props.post._key).child("votevalue").set(this.props.post.votevalue -= 1);
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
                    <div
                        className="vote-button upvote"
                        onClick={ this.handleUpvote.bind(this, this.props.post) }
                    ></div>
                    <div className="vote-count">
                        {this.props.post.votevalue}
                    </div>
                    <div
                        className="vote-button downvote"
                        onClick={ this.handleDownvote.bind(this, this.props.post) }
                    ></div>
                </div>
                <div className="post-content">
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