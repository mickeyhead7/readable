import sortBy from 'sort-by';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from '../../Utils/Api';
import React, { Component } from 'react';
import PostFull from '../../Components/Post/Full';
import { setViewPost, votePost } from '../../Actions/posts';
import { addComment, addComments, updateComment } from '../../Actions/comments';

/**
 * @description Post view
 */
class Post extends Component {
    static propTypes = {
        comments: propTypes.array,
        onDownvoteComment: propTypes.func.isRequired,
        onDownvotePost: propTypes.func.isRequired,
        fetchComments: propTypes.func.isRequired,
        fetchPost: propTypes.func.isRequired,
        onSubmitComment: propTypes.func.isRequired,
        post: propTypes.object,
        onUpvoteComment: propTypes.func.isRequired,
        onUpvotePost: propTypes.func.isRequired,
    };

    /**
     * @description Fetches the post on nount
     */
    componentDidMount () {
        const { fetchComments, fetchPost, match } = this.props;
        const { post_id } = match.params;

        fetchPost(post_id);
        fetchComments(post_id);
    }

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
     * @description Renders the post view
     * @returns {XML}
     */
    render () {
        const {
            post,
            onDownvoteComment,
            onDownvotePost,
            onSubmitComment,
            onUpvoteComment,
            onUpvotePost,
        } = this.props;
        
        const sortedComments = this.sortComments();

        return (
            <main>
                {post? (
                    <PostFull
                        {...post}
                        comments={sortedComments || []}
                        onDownvotePost={onDownvotePost}
                        onUpvotePost={onUpvotePost}
                        onSubmitComment={onSubmitComment}
                        onDownvoteComment={onDownvoteComment}
                        onUpvoteComment={onUpvoteComment}
                    />
                ) : null}
            </main>
        );
    }
}

/**
 * @description Maps store to local props
 * @param posts Posts store
 * @param sort Sort store
 * @returns {{comments: (*, post: *, sort: *}}
 */
const mapStateToProps = ({ comments, posts, sort }) => {
    return {
        comments: comments.comments,
        post: posts.view,
        sort,
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
         */
        onSubmitComment: comment => {
            return API.addComment(comment).then(comment => {
                dispatch(addComment(comment));
            });
        },
        /**
         * @description Downvote a comment
         * @param id Comment id
         */
        onDownvoteComment: (id) => {
            return API.commentVote(id, 'downVote').then(comment => {
                dispatch(updateComment(comment));
            });
        },
        /**
         * @description Downvote a post
         * @param id Post id
         */
        onDownvotePost: (id) => {
            return API.postVote(id, 'downVote').then(post => {
                dispatch(votePost(post));
            });
        },
        /**
         * @description Fetches the comments for a given post
         * @param id Post id
         */
        fetchComments: id => {
            return API.fetchComments(id).then(comments => {
                dispatch(addComments(comments));
            });
        },
        /**
         * Fetches a given post and adds it to the store
         * @param id Post id
         */
        fetchPost: id => {
            return API.fetchPost(id).then(post => {
                dispatch(setViewPost(post));
            });
        },
        /**
         * @description Upvote a comment
         * @param id Comment id
         */
        onUpvoteComment: (id) => {
            return API.commentVote(id, 'upVote').then(comment => {
                dispatch(updateComment(comment));
            });
        },
        /**
         * @description Upvote a post
         * @param id Post id
         */
        onUpvotePost: (id) => {
            return API.postVote(id, 'upVote').then(post => {
                dispatch(votePost(post));
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);