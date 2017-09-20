import React from 'react';
import Vote from '../../Vote';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Date from '../../../Utils/Date';

import './styles.css';

/**
 * @description Comment
 */
const Comment = props => {
    const {
        author,
        body,
        id,
        onDeleteComment,
        onDownvote,
        onUpvote,
        timestamp,
        voteScore
    } = props;

    const handleDeleteComment = () => {
        onDeleteComment(id);
    };

    /**
     * @description Renders the comment
     */
    return (
        <article className="comment">
            <section className="comment-meta">
                <small>Posted on {Date.format(timestamp, 'MMMM Do YYYY')} by {author}</small>
            </section>
            <section className="comment-body">
                {body}
            </section>
            <footer className="comment-footer">
                <div className="comment-vote">
                    <Vote
                        id={id}
                        onDownvote={onDownvote}
                        onUpvote={onUpvote}
                        voteScore={voteScore}
                    />
                </div>
                <ul className="comment-actions">
                    <li className="post-partial-action">
                        <Link to={`/post/${id}/edit`}>Edit</Link>
                    </li>
                    <li className="post-partial-action">
                        <button onClick={handleDeleteComment}>Delete</button>
                    </li>
                </ul>
            </footer>
        </article>
    );
};

Comment.propTypes = {
    author: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
    onDeleteComment: propTypes.func.isRequired,
    onDownvote: propTypes.func.isRequired,
    onUpvote: propTypes.func.isRequired,
    timestamp: propTypes.number.isRequired,
    voteScore: propTypes.number.isRequired,
};

export default Comment;