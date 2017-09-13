import { ADD_COMMENT, ADD_COMMENTS, ADD_POSTS, SET_CURRENT_POST, UPDATE_COMMENT, UPDATE_POST } from '../Actions/posts';

/**
 * @description Posts reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const posts = (state = {}, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: state.comments.concat([ action.comment ]),
            };
        case ADD_COMMENTS:
            return {
                ...state,
                comments: action.comments,
            };
        case ADD_POSTS:
            return {
                ...state,
                posts: action.posts,
            };
        case SET_CURRENT_POST:
            return {
                ...state,
                currentPost: action.post,
            };
        case UPDATE_COMMENT:
            const comments = state.comments || [];
            
            return {
                ...state,
                comments: comments.map(comment => {
                    if (comment.id === action.comment.id) {
                        comment = action.comment;
                    }

                    return comment;
                }),
            };
        case UPDATE_POST:
            const posts = state.posts || [];
            const currentPost = action.post;

            return {
                ...state,
                posts: posts.map(post => {
                    if (post.id === action.post.id) {
                        post = action.post;
                    }

                    return post;
                }),
                currentPost,
            };
        default:
            return state;
    }
};

export default posts;
