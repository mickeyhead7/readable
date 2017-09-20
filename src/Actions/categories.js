import * as API from '../Utils/Api';

export const ADD_CATEGORIES = 'ADD_CATEGORIES';

/**
 * @description Adds categories to the store
 * @param categories Categories to add to the store
 * @returns {{type: string, categories: *}}
 */
const addCategories = categories => {
    return {
        type: ADD_CATEGORIES,
        categories,
    }
};

/**
 * @description Fetches categories from the API
 * @returns Promise
 */
export const fetchCategories = () => dispatch => {
    return API.fetchCategories().then(categories => dispatch(addCategories(categories)));
};
