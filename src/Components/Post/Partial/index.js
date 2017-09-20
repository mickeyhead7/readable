import Vote from '../../Vote';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { Component }  from 'react';
import * as Date from '../../../Utils/Date';
import { getCommentCount } from '../../../Utils/Post';

import './styles.css';

/**
 * @description Post partial
 */
class Post extends Component {
    static propTypes = {
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

    state = {
        commentCount: 0,
    };

    /**
     * @description Updates the comment count on mount, lazy-loading an expensive process
     * @returns {Promise.<TResult>}
     */
    componentDidMount () {
        const { id } = this.props;

        return getCommentCount(id).then(commentCount => {
            this.setState({
                commentCount,
            });
        }).catch(() => {});
    };

    /**
     * @description Handles deleting the post
     */
    handleDeletePost = () => {
        const { id, onDeletePost } = this.props;

        onDeletePost(id);
    };

    /**
     * @description Renders the post partial
     * @returns {XML}
     */
    render () {
        const {
            author,
            body,
            category,
            id,
            onDownvote,
            onUpvote,
            timestamp,
            title,
            voteScore
        } = this.props;

        return (
            <article className="post-partial">
                <header>
                    <h2>
                        <Link to={`/${category}/${id}`}>{title}</Link>
                    </h2>
                </header>
                <div className="post-partial-meta">
                    <small>Posted on {Date.format(timestamp, 'MMMM Do YYYY')} by {author}</small>
                    <small>{this.state.commentCount} Comments</small>
                </div>
                <section className="post-partial-body">
                    {body}
                </section>
                <footer className="post-partial-footer">
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
                            <button onClick={this.handleDeletePost}>Delete</button>
                        </li>
                    </ul>
                </footer>
            </article>
        );
    }
}

export default Post;