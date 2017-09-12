export const ADD_POSTS = 'ADD_POSTS';
export const SORT_POSTS = 'SORT_POSTS';
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
