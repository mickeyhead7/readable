import * as API from '../Utils/Api';

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

/**
 * @description Adds a coment via the API
 * @param comment
 * @returns Promise
 */
export const addComment = comment => dispatch => {
    return API.addComment(comment)
        .then(comment => dispatch(addCommentToStore(comment)));
};

/**
 * @description Adds a comment to the store
 * @param comment C`omment object to add
 * @returns {{type: string, comment: *}}
 */
const addCommentToStore = comment => {
    return {
        type: ADD_COMMENT,
        comment,
    };
};

/**
 * @description Adds comments to the store
 * @param comments List of comments
 * @returns {{type: string, comments: *}}
 */
export const addComments = comments => {
    return {
        type: ADD_COMMENTS,
        comments,
    };
};

/**
 * @description Deletes a comment via the API
 * @param id
 * @returns Promise
 */
export const deleteComment = id => dispatch => {
    return API.deleteComment(id)
        .then(() => dispatch(deleteCommentFromStore(id)));
};

/**
 * @description Deletes a selected comment
 * @param id ID of comment to delete
 * @returns {{type: string, comment: *}}
 */
const deleteCommentFromStore = id => {
    return {
        type: DELETE_COMMENT,
        id,
    };
};

/**
 * @description Downvotes a comment via the API
 * @param id Comment id
 * @returns Promise
 */
export const downvoteComment = id => dispatch => {
    return API.commentVote(id, 'downVote')
        .then(comment => dispatch(updateCommentInStore(comment)));
};

/**
 * @description Fetches comments for a post via the API
 * @param postId Post id
 * @returns Promise
 */
export const fetchComments = postId => dispatch => {
    return API.fetchComments(postId)
        .then(comments => dispatch(addComments(comments)));
};

/**
 * @description Updates a comment via the API
 * @param comment
 */
export const updateComment = comment => dispatch => {
    return API.updateComment(comment)
        .then(comment => dispatch(updateCommentInStore(comment)));
};

/**
 * @description Updates a comment in the store
 * @param comment Comment object
 * @returns {{type: string, comment: *}}
 */
const updateCommentInStore = comment => {
    return {
        type: UPDATE_COMMENT,
        comment,
    };
};

/**
 * @description Upvotes a comment via the API
 * @param id Comment id
 * @returns Promise
 */
export const upvoteComment = id => dispatch => {
    return API.commentVote(id, 'upVote')
        .then(comment => dispatch(updateCommentInStore(comment)));
};
