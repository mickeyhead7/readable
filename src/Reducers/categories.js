import { ADD_CATEGORIES } from '../Actions/categories';

/**
 * @description Categories reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
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
