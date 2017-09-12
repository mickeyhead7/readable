import React, { Component } from 'react';
import Vote from '../Vote';

/**
 * @description Comment
 */
class Comment extends Component {
    /**
     * @description Renders the comment component
     * @returns {XML}
     */
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