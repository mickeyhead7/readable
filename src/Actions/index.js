export const ADD_CATEGORIES = 'ADD_CATEGORIES';
export const ADD_POSTS = 'ADD_POSTS';
export const SET_SORT = 'SET_SORT';

export function addCategories (categories) {
    return {
        type: ADD_CATEGORIES,
        categories,
    }
}

export function addPosts (posts, field, direction) {
    return {
        type: ADD_POSTS,
        posts,
        field,
        direction,
    }
}

export function setSort (field, direction) {
    return {
        type: SET_SORT,
        field,
        direction,
    }
}
