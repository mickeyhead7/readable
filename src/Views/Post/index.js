import uuid from 'uuid/v4';
import sortBy from 'sort-by';
import domPurify from 'dompurify';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Date from '../../Utils/Date';
import React, { Component } from 'react';
import { setSort } from '../../Actions/sort';
import PostFull from '../../Components/Post/Full';
import NotFound from '../../Components/Post/NotFound';
import { updateMessage } from '../../Actions/messages';
import { deletePost, downvotePost, fetchPost, upvotePost } from '../../Actions/posts';
import { addComment, deleteComment, downvoteComment, fetchComments, updateComment, upvoteComment } from '../../Actions/comments';

/**
 * @description Post view
 */
class Post extends Component {
    static propTypes = {
        addComment: propTypes.func.isRequired,
        comments: propTypes.array,
        deleteComment: propTypes.func.isRequired,
        deletePost: propTypes.func.isRequired,
        downvoteComment: propTypes.func.isRequired,
        downvotePost: propTypes.func.isRequired,
        fetchComments: propTypes.func.isRequired,
        fetchPost: propTypes.func.isRequired,
        setSort: propTypes.func.isRequired,
        post: propTypes.object,
        updateComment: propTypes.func.isRequired,
        upvoteComment: propTypes.func.isRequired,
        upvotePost: propTypes.func.isRequired,
        updateMessage: propTypes.func.isRequired,
    };

    /**
     * @description Fetches the post on mount
     */
    componentDidMount () {
        const { fetchComments, fetchPost, match } = this.props;
        const { post_id } = match.params;

        fetchPost(post_id);
        fetchComments(post_id);
    }

    /**
     * @description Deletes the current post
     */
    deletePost = () => {
        const { deletePost, post, updateMessage } = this.props;

        deletePost(post.id).then(() => {
            updateMessage({
                body: `The post "${post.title}" has successfully been deleted`,
                id: uuid(),
                level: 'success',
            });
        });
    };

    /**
     * @description Sorts the post comments
     * @returns {*} Sorted comments
     */
    sortComments = () => {
        const { comments, sort } = this.props;

        if (!comments) {
            return [];
        }

        const field = ['timestamp', 'voteScore'].includes(sort.field) ? sort.field : 'timestamp';
        const direction = sort.direction === 'desc' ? '-' : '';

        return comments.sort(sortBy(`${direction}${field}`));
    };

    /**
     * @description Submits a new comment
     * @param data
     */
    submitComment = data => {
        const { post, addComment, updateComment, updateMessage } = this.props;
        const messageId = uuid();

        if (!this.validateComment(data)) {
            updateMessage({
                body: 'Please enter a comment',
                id: uuid(),
                level: 'error',
            });

            return Promise.reject();
        }

        const commentData = {
            author: 'thingthree',
            body: domPurify.sanitize(data.body),
            id: data.id || uuid(),
            parentId: post.id,
            timestamp: Date.getCurrentUnixTimestamp(),
        };

        const result = data.id ? updateComment(commentData) : addComment(commentData);

        return result.then(() => {
            updateMessage({
                body: 'Your comment was successfully updated',
                id: messageId,
                level: 'success',
            });
        }).catch(() => {
            updateMessage({
                body: 'There was an error saving your post',
                id: messageId,
                level: 'error',
            });
        });
    };

    /**
     * @description Validates a comment
     * @param data Comment data
     * @returns {boolean}
     */
    validateComment = data => {
        return !!data.body;
    };

    /**
     * @description Renders the post view
     * @returns {XML}
     */
    render () {
        const {
            deleteComment,
            downvoteComment,
            downvotePost,
            post,
            setSort,
            upvoteComment,
            upvotePost,
        } = this.props;
        
        const sortedComments = this.sortComments();

        return (
            <main>
                {post && post.id ? (
                    <PostFull
                        {...post}
                        comments={sortedComments || []}
                        onDeleteComment={deleteComment}
                        onDeletePost={this.deletePost}
                        onDownvotePost={downvotePost}
                        onUpvotePost={upvotePost}
                        onSort={setSort}
                        onSubmitComment={this.submitComment}
                        onDownvoteComment={downvoteComment}
                        onUpvoteComment={upvoteComment}
                    />
                ) : (
                    <NotFound />
                )}
            </main>
        );
    }
}

/**
 * @description Maps store to local props
 * @param comments Comments store
 * @param posts Posts store
 * @param sort Sort store
 * @returns {{comments: (*, post: *, sort: *}}
 */
const mapStateToProps = ({ comments, posts, sort }) => {
    return {
        comments: comments.comments,
        post: posts.current,
        sort: sort.comments,
    };
};

/**
 * @description Maps dispatch to local props
 * @param dispatch Store dispatch method
 */
const mapDispatchToProps = dispatch => {
    return {
        /**
         * @description Adds a comment to the store
         * @param comment
         * @returns {Promise.<TResult>}
         */
        addComment: comment => {
            return dispatch(addComment(comment));
        },
        /**
         * @description Deletes a selected comment
         * @param id Comment id
         * @returns {Promise.<TResult>}
         */
        deleteComment: id => {
            return dispatch(deleteComment(id));
        },
        deletePost: id => {
            return dispatch(deletePost(id));
        },
        /**
         * @description Downvote a comment
         * @param id Comment id
         * @returns {Promise.<TResult>}
         */
        downvoteComment: id => {
            return dispatch(downvoteComment(id));
        },
        /**
         * @description Downvote a post
         * @param id Post id
         * @returns {Promise.<TResult>}
         */
        downvotePost: id => {
            return dispatch(downvotePost(id));
        },
        /**
         * @description Fetches the comments for a given post
         * @param id Post id
         * @returns {Promise.<TResult>}
         */
        fetchComments: postId => {
            return dispatch(fetchComments(postId));
        },
        /**
         * Fetches a given post and adds it to the store
         * @param id Post id
         * @returns {Promise.<TResult>}
         */
        fetchPost: id => {
            return dispatch(fetchPost(id));
        },
        /**
         * @description Sets the sort
         * @param field Sort field
         * @param direction Sort direction
         */
        setSort: (field, direction) => {
            return dispatch(setSort('comments', field, direction));
        },
        /**
         * @description Updates a comment in the store
         * @param comment
         * @returns {Promise.<TResult>}
         */
        updateComment: comment => {
            return dispatch(updateComment(comment));
        },
        /**
         * @description Sets the app message
         * @param body Message body
         * @param level Message level
         * @returns {*}
         */
        updateMessage: ({ body, level, id, timeout }) => {
            return dispatch(updateMessage({ body, level, id, timeout }));
        },
        /**
         * @description Upvote a post
         * @param id Post id
         * @returns {Promise.<TResult>}
         */
        upvotePost: id => {
            return dispatch(upvotePost(id));
        },
        /**
         * @description Upvote a comment
         * @param id Comment id
         * @returns {Promise.<TResult>}
         */
        upvoteComment: id => {
            return dispatch(upvoteComment(id));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);