import { ADD_COMMENT, ADD_COMMENTS, DELETE_COMMENT, UPDATE_COMMENT } from '../Actions/comments';

const initialState = {
    comments: [],
};

/**
 * @description Comments reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const comments = (state = initialState, action) => {
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
        case DELETE_COMMENT:
            return {
                ...state,
                comments: state.comments.filter(comment => comment.id !== action.id),
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                comments: state.comments.map(comment => {
                    if (comment.id === action.comment.id) {
                        comment = action.comment;
                    }

                    return comment;
                }),
            };
        default:
            return state;
    }
};

export default comments;
