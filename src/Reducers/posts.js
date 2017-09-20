import {
    ADD_POST,
    ADD_POSTS,
    DELETE_POST,
    SET_CURRENT_POST,
    UPDATE_POST,
    VOTE_POST
} from '../Actions/posts';

const initialState = {
    posts: [],
    current: null,
};

/**
 * @description Posts reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const posts = (state = initialState, action) => {
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
        case SET_CURRENT_POST:
            return {
                ...state,
                current: action.post,
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
                current: action.post,
            };
        case VOTE_POST:
            const curent = state.curent && state.curent.id === action.post.id
                ? state.curent = action.post
                : state.curent;

            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.post.id) {
                        post = action.post;
                    }

                    return post;
                }),
                curent,
            };
        default:
            return state;
    }
};

export default posts;
