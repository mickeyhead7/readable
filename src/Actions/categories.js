export const ADD_CATEGORIES = 'ADD_CATEGORIES';

/**
 * @description Adds categories to the store
 * @param categories Categories to add to the store
 * @returns {{type: string, categories: *}}
 */
export const addCategories = categories => {
    return {
        type: ADD_CATEGORIES,
        categories,
    }
};
