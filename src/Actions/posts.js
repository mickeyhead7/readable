export const ADD_POSTS = 'ADD_POSTS';
export const SET_EDIT_POST = 'SET_EDIT_POST';
export const SET_VIEW_POST = 'SET_VIEW_POST';
export const VOTE_POST = 'VOTE_POST';

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
 * @description Updates a posts votes in the store
 * @param post Post to update
 * @returns {{type: string, post: *}}
 */
export const votePost = (post) => {
    return {
        type: VOTE_POST,
        post,
    };
};

/**
 * @description Sets the current post being edited in the store
 * @param post Post object to add
 * @returns {{type: string, post: *}}
 */
export const setEditPost = (post) => {
    return {
        type: SET_EDIT_POST,
        post,
    };
};

/**
 * @description Sets the current post being viewed in the store
 * @param post Post object to add
 * @returns {{type: string, post: *}}
 */
export const setViewPost = (post) => {
    return {
        type: SET_VIEW_POST,
        post,
    };
};
