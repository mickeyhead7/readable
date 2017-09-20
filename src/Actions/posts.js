import * as API from '../Utils/Api';

export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const SET_CURRENT_POST = 'SET_CURRENT_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const VOTE_POST = 'VOTE_POST';

/**
 * @description Adds a post via the API
 * @param post Post to add
 * @returns Promise
 */
export const addPost = post => dispatch => {
    return API.addPost(post).then(post => dispatch(addPostToStore(post)));
};

/**
 * @description Adds posts to the store
 * @param posts Posts to add to the store
 * @returns {{type: string, posts: *}}
 */
const addPosts = posts => {
    return {
        type: ADD_POSTS,
        posts,
    };
};

/**
 * @description Adds a post to the store
 * @param post Post to add
 * @returns {{type: string, post: *}}
 */
const addPostToStore = post => {
    return {
        type: ADD_POST,
        post,
    };
};

/**
 * @description Deletes a post via the API
 * @param id
 * @returns Promise
 */
export const deletePost = id => dispatch => {
    return API.deletePost(id).then(() => dispatch(deletePostFromStore(id)));
};

/**
 * @description Deletes a post from the store
 * @param id
 * @returns {{type: string, id: *}}
 */
const deletePostFromStore = id => {
    return {
        type: DELETE_POST,
        id,
    };
};

/**
 * @description Downvotes a post via the API
 * @param id
 * @returns Promise
 */
export const downvotePost = id => dispatch => {
    return API.postVote(id, 'downVote')
        .then(post => dispatch(votePost(post)));
};

/**
 * @description Fetches the current post from the API
 * @param id Post id
 */
export const fetchPost = id => dispatch => {
    return API.fetchPost(id)
        .then(post => dispatch(setCurrentPost(post)));
};

/**
 * @description Fetches posts, from a category if required
 * @param category Category path
 * @returns Promise
 */
export const fetchPosts = category => dispatch => {
    const result = category ? API.fetchPosts(category) : API.fetchAllPosts();

    return result.then(posts => dispatch(addPosts(posts)));
};

/**
 * @description Sets the current post in the store
 * @param post Post object to set
 * @returns {{type: string, post: *}}
 */
export const setCurrentPost = post => {
    return {
        type: SET_CURRENT_POST,
        post,
    };
};

/**
 * @description Updates a post via the API
 * @param post
 * @returns Promise
 */
export const updatePost = post => dispatch => {
    return API.updatePost(post)
        .then(post => dispatch(updatePostInStore(post)));
};

/**
 * @description Updates a post in the store
 * @param post Post to update
 * @returns {{type: string, post: *}}
 */
const updatePostInStore = post => {
    return {
        type: UPDATE_POST,
        post,
    };
};

/**
 * @description Upvotes a post via the API
 * @param id
 * @returns Promise
 */
export const upvotePost = id => dispatch => {
    return API.postVote(id, 'upVote')
        .then(post => dispatch(votePost(post)));
};

/**
 * @description Updates a posts votes in the store
 * @param post Post to update
 * @returns {{type: string, post: *}}
 */
const votePost = post => {
    return {
        type: VOTE_POST,
        post,
    };
};
