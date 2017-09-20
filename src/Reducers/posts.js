import {
    ADD_POST,
    ADD_POSTS,
    DELETE_POST,
    SET_EDIT_POST,
    SET_VIEW_POST,
    UPDATE_POST,
    VOTE_POST
} from '../Actions/posts';

/**
 * @description Posts reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const posts = (state = {}, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat([ action.post ]),
            };
        case ADD_POSTS:
            return {
                ...state,
                posts: action.posts.filter(post => !post.deleted),
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id),
            };
        case SET_EDIT_POST:
            return {
                ...state,
                edit: action.post,
            };
        case SET_VIEW_POST:
            return {
                ...state,
                view: action.post,
            };
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.post.id) {
                        return action.post;
                    }

                    return post;
                }),
            };
        case VOTE_POST:
            const posts = state.posts || [];
            const view = state.view && state.view.id === action.post.id
                ? state.view = action.post
                : state.view;

            return {
                ...state,
                posts: posts.map(post => {
                    if (post.id === action.post.id) {
                        post = action.post;
                    }

                    return post;
                }),
                view,
            };
        default:
            return state;
    }
};

export default posts;
