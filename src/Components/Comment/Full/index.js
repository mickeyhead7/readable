import Vote from '../../Vote';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import * as Date from '../../../Utils/Date';

import './styles.css';

/**
 * @description Comment
 */
class Comment extends Component {
    static propTypes = {
        author: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
        id: propTypes.string.isRequired,
        onDownvote: propTypes.func.isRequired,
        onUpvote: propTypes.func.isRequired,
        timestamp: propTypes.number.isRequired,
        voteScore: propTypes.number.isRequired,
    };

    /**
     * @description Renders the comment component
     * @returns {XML}
     */
    render () {
        const { author, body, id, onDownvote, onUpvote, timestamp, voteScore } = this.props;

        return (
            <article className="comment">
                <section className="comment-meta">
                    <small>Posted on {Date.format(timestamp, 'MMMM Do YYYY')} by {author}</small>
                </section>
                <section className="comment-body">
                    {body}
                </section>
                <footer className="comment-footer">
                    <Vote
                        id={id}
                        onDownvote={onDownvote}
                        onUpvote={onUpvote}
                        voteScore={voteScore}
                    />
                </footer>
            </article>
        );
    }
}

export default Comment;