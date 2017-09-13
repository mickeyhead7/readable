import React from 'react';
import Vote from '../../Vote';
import propTypes from 'prop-types';
import * as Date from '../../../Utils/Date';

import './styles.css';

/**
 * @description Comment
 */
const Comment = props => {
    const { author, body, id, onDownvote, onUpvote, timestamp, voteScore } = props;

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
};

Comment.propTypes = {
    author: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    onDownvote: propTypes.func.isRequired,
    onUpvote: propTypes.func.isRequired,
    timestamp: propTypes.number.isRequired,
    voteScore: propTypes.number.isRequired,
};

export default Comment;