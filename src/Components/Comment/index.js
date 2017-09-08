import React, { Component } from 'react';
import Vote from '../Vote';

class Comment extends Component {
    render () {
        return (
            <article>
                <header>
                    <h2>Comment title</h2>
                </header>
                <section>
                    Comment body...
                </section>
                <footer>
                    <Vote />
                </footer>
            </article>
        );
    }
}

export default Comment;