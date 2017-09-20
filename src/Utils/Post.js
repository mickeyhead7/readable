import * as API from './Api';

/**
 * @description Gets the comment count for a given post
 * @param postId Post id
 * @returns {Promise.<TResult>}
 */
export const getCommentCount = postId => {
    return API.fetchComments(postId).then(comments => {
        return comments.length;
    });
};