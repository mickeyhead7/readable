import sortBy from 'sort-by';
import { ADD_POSTS } from '../Actions/posts';

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

export default posts;
