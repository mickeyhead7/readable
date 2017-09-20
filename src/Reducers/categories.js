import { ADD_CATEGORIES } from '../Actions/categories';

const initialState = {
    categories: [],
};

/**
 * @description Categories reducer
 * @param state Current state
 * @param action Action to reduce
 * @returns {*}
 */
const categories = (state = initialState, action) => {
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

export default categories;
