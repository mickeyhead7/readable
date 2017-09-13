export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_POSTS = 'ADD_POSTS';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const UPDATE_POST = 'UPDATE_POST';

/**
 * @description Adds posts to the store
 * @param posts Posts to add to the store
 * @returns {{type: string, posts: *}}
 */
export const addPosts = (posts) => {
    return {
        type: ADD_POSTS,
        posts,
    }
};

/**
 * @description Updates a post in the store
 * @param post Post object to update
 * @returns {{type: string, post: *}}
 */
export const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        post,
    };
};

/**
 * @description Sets the current post in the store
 * @param post Post object to add
 * @returns {{type: string, post: *}}
 */
export const setCurrentPost = (post) => {
    return {
        type: SET_CURRENT_POST,
        post,
    };
};

/**
 * @description Adds a comment to the store
 * @param comment C`omment object to add
 * @returns {{type: string, comment: *}}
 */
export const addComment = (comment) => {
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
export const addComments = (comments) => {
    return {
        type: ADD_COMMENTS,
        comments,
    };
};

/**
 * @description Updates a comment in the store
 * @param comment Comment object
 * @returns {{type: string, comment: *}}
 */
export const updateComment = (comment) => {
    return {
        type: UPDATE_COMMENT,
        comment,
    };
};
