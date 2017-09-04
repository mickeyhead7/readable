import React, { Component } from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';

class Post extends Component {
    render () {
        return (
            <article>
                <head>
                    <h2>Post title</h2>
                </head>
                <div>
                    <CommentForm />
                    <Comments />
                </div>
            </article>
        );
    }
}

export default Post;