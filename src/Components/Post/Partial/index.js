import React  from 'react';
import Vote from '../../Vote';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Date from '../../../Utils/Date';

import './styles.css';

/**
 * @description Post partial
 */
const Post = props => {
    const {
        author,
        body,
        category,
        id,
        onDeletePost,
        onDownvote,
        onUpvote,
        timestamp,
        title,
        voteScore
    } = props;

    const handleDeletePost = () => {
        onDeletePost(id);
    };

    return (
        <article className="post-partial">
            <header>
                <h2>
                    <Link to={`/${category}/${id}`}>{title}</Link>
                </h2>
            </header>
            <div className="post-partial-meta">
                <small>Posted on {Date.format(timestamp, 'MMMM Do YYYY')} by {author}</small>
            </div>
            <section className="post-partial-body">
                {body}
            </section>
            <footer>
                <div className="post-partial-vote">
                    <Vote
                        id={id}
                        onUpvote={onUpvote}
                        onDownvote={onDownvote}
                        voteScore={voteScore}
                    />
                </div>
                <ul className="post-partial-actions">
                    <li className="post-partial-action">
                        <Link to={`/post/${id}/edit`}>Edit</Link>
                    </li>
                    <li className="post-partial-action">
                        <button onClick={handleDeletePost}>Delete</button>
                    </li>
                </ul>
            </footer>
        </article>
    );
};

Post.propTypes = {
    author: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    category: propTypes.string,
    id: propTypes.string.isRequired,
    onDeletePost: propTypes.func.isRequired,
    onDownvote: propTypes.func,
    onUpvote: propTypes.func,
    timestamp: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    voteScore: propTypes.number.isRequired,
};

export default Post;