export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const SET_EDIT_POST = 'SET_EDIT_POST';
export const SET_VIEW_POST = 'SET_VIEW_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const VOTE_POST = 'VOTE_POST';

/**
 * @description Adds a post to the store
 * @param post Post to add
 * @returns {{type: string, post: *}}
 */
export const addPost = post => {
    return {
        type: ADD_POST,
        post,
    };
};

/**
 * @description Adds posts to the store
 * @param posts Posts to add to the store
 * @returns {{type: string, posts: *}}
 */
export const addPosts = posts => {
    return {
        type: ADD_POSTS,
        posts,
    };
};

/**
 * @description Deletes a post from the store
 * @param id
 * @returns {{type: string, id: *}}
 */
export const deletePost = id => {
    return {
        type: DELETE_POST,
        id,
    };
};

/**
 * @description Sets the current post being edited in the store
 * @param post Post object to add
 * @returns {{type: string, post: *}}
 */
export const setEditPost = post => {
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
export const setViewPost = post => {
    return {
        type: SET_VIEW_POST,
        post,
    };
};

/**
 * @description Updates a post in the store
 * @param post Post to update
 * @returns {{type: string, post: *}}
 */
export const updatePost = post => {
    return {
        type: UPDATE_POST,
        post,
    };
};

/**
 * @description Updates a posts votes in the store
 * @param post Post to update
 * @returns {{type: string, post: *}}
 */
export const votePost = post => {
    return {
        type: VOTE_POST,
        post,
    };
};
