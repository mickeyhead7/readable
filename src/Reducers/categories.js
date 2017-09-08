import { ADD_CATEGORIES } from '../Actions/categories';

const categories = (state = {}, action) => {
    switch (action.type) {
        case ADD_CATEGORIES:
            return {
                ...state,
                items: action.categories,
            };
        default:
            return state;
    }
};

export default categories;
