import sortBy from 'sort-by';
import { combineReducers } from 'redux';
import { ADD_CATEGORIES, ADD_POSTS, SET_SORT } from '../Actions';

const categories = (state = {}, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            };
        default:
            return state;
    }
};

const posts = (state = {}, action) => {
    switch (action.type) {
        case ADD_POSTS:
            const field = ['timestamp', 'voteScore'].includes(action.field) ? action.field : 'timestamp';
            const direction = action.direction === 'asc' ? '' : '-';

            return {
                ...state,
                items: action.posts.sort(sortBy(`${direction}${field}`)),
            };
        default:
            return state;
    }
};

const sortInitialState = {
    field: 'timestamp',
    direction: 'desc',
};

const sort = (state = sortInitialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return {
                field: action.field,
                direction: action.direction,
            };
        default:
            return state;
    }
};

export default combineReducers({
    categories,
    posts,
    sort,
});
