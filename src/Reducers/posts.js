import { ADD_POSTS, SET_EDIT_POST, SET_VIEW_POST, VOTE_POST } from '../Actions/posts';

/**
 * @description Posts reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const posts = (state = {}, action) => {
    switch (action.type) {
        case ADD_POSTS:
            return {
                ...state,
                posts: action.posts,
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
