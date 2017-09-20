export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';

/**
 * @description Adds a comment to the store
 * @param comment C`omment object to add
 * @returns {{type: string, comment: *}}
 */
export const addComment = comment => {
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
 * @description Deletes a selected comment
 * @param id ID of comment to delete
 * @returns {{type: string, comment: *}}
 */
export const deleteComment = id => {
    return {
        type: DELETE_COMMENT,
        id,
    };
};

/**
 * @description Updates a comment in the store
 * @param comment Comment object
 * @returns {{type: string, comment: *}}
 */
export const updateComment = comment => {
    return {
        type: UPDATE_COMMENT,
        comment,
    };
};
