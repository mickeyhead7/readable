import React, { Component } from 'react';
import Comments from '../../Comments';
import CommentForm from '../../CommentForm';
import Vote from '../../Vote';

class Post extends Component {
    render () {
        return (
            <article>
                <header>
                    <h2>Post title</h2>
                </header>
                <section>
                    Post body...
                </section>
                <footer>
                    <Vote />
                </footer>
                <div>
                    <CommentForm />
                    <Comments />
                </div>
            </article>
        );
    }
}

export default Post;