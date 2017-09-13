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
    const { author, body, category, id, onDownvote, onUpvote, timestamp, title, voteScore } = props;

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
                <Vote
                    id={id}
                    onUpvote={onUpvote}
                    onDownvote={onDownvote}
                    voteScore={voteScore}
                />
            </footer>
        </article>
    );
};

Post.propTypes = {
    author: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    category: propTypes.string,
    id: propTypes.string.isRequired,
    onDownvote: propTypes.func,
    onUpvote: propTypes.func,
    timestamp: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    voteScore: propTypes.number.isRequired,
};

export default Post;