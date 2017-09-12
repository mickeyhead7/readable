import { ADD_POSTS, UPDATE_POST } from '../Actions/posts';

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
                items: action.posts,
            };
        case UPDATE_POST:
            return {
                ...state,
                items: state.items.map(post => {
                    if (post.id === action.post.id) {
                        post = action.post;
                    }

                    return post;
                }),
            };
        default:
            return state;
    }
};

export default posts;
