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
 * Updates a post in the store
 * @param post Post to update
 * @returns {{type: string, post: *}}
 */
export const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        post,
    };
};

export const setCurrentPost = (post) => {
    return {
        type: SET_CURRENT_POST,
        post,
    };
};

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment,
    };
};

export const addComments = (comments) => {
    return {
        type: ADD_COMMENTS,
        comments,
    };
};

export const updateComment = (comment) => {
    return {
        type: UPDATE_COMMENT,
        comment,
    };
};
