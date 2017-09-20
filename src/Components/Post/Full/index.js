import Sort from '../../Sort';
import Vote from '../../Vote';
import propTypes from 'prop-types';
import Comment from '../../Comment/Full';
import { Link } from 'react-router-dom';
import React, { Component }  from 'react';
import * as Date from '../../../Utils/Date';
import CommentForm from '../../Comment/Form';
import { getCommentCount } from '../../../Utils/Post';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';

import './style.css';

/**
 * @description Renders the post view
 * @param props
 * @returns {*}
 * @constructor
 */
class Post extends Component {
    static propTypes = {
        comments: propTypes.array.isRequired,
        onDeleteComment: propTypes.func.isRequired,
        onDownvoteComment: propTypes.func.isRequired,
        onDownvotePost: propTypes.func.isRequired,
        onSort: propTypes.func.isRequired,
        onSubmitComment: propTypes.func.isRequired,
        onUpvoteComment: propTypes.func.isRequired,
        onUpvotePost: propTypes.func.isRequired,
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

    render () {
        const {
            author,
            body,
            category,
            comments,
            id,
            onDeleteComment,
            onDownvoteComment,
            onDownvotePost,
            onSort,
            onSubmitComment,
            onUpvoteComment,
            onUpvotePost,
            timestamp,
            title,
            voteScore
        } = this.props;

        return id ? (
            <div className="post-full">
                <section className="post-full-backlink">
                    <Link to={`/${category}`}>
                        <FaArrowLeft />
                        <span>{category}</span>
                    </Link>
                </section>
                <article className="post-full-article">
                    <header className="post-full-header">
                        <h2>{title}</h2>
                    </header>
                    <section className="post-full-meta">
                        <small>Posted on {Date.format(timestamp, 'MMMM Do YYYY')} by {author}</small>
                        <small>{this.state.commentCount} Comments</small>
                    </section>
                    <div className="post-full-content">
                        <section className="post-full-body">
                            {body}
                        </section>
                        <footer className="post-full-footer">
                            <Vote
                                id={id}
                                onDownvote={onDownvotePost}
                                onUpvote={onUpvotePost}
                                voteScore={voteScore}
                            />
                        </footer>
                    </div>
                </article>
                {comments.length ? (
                    <section className="post-full-comments">
                        <header>
                            <h2>Comments</h2>
                        </header>
                        <Sort
                            item="comments"
                            onSort={onSort}
                        />
                        <section className="post-full-list">
                            {comments.map(comment => (
                                <div className="post-full-comment" key={comment.id}>
                                    <Comment
                                        {...comment}
                                        onDeleteComment={onDeleteComment}
                                        onDownvote={onDownvoteComment}
                                        onSubmitComment={onSubmitComment}
                                        onUpvote={onUpvoteComment}
                                    />
                                </div>
                            ))}
                        </section>
                    </section>
                ) : null}
                <section className="post-full-comment-form">
                    <CommentForm
                        onSubmit={onSubmitComment}
                    />
                </section>
            </div>
        ) : null;
    }
}

export default Post;
