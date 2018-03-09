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
            <div className="Post">
                <div className="">
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