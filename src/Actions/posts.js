export const ADD_POSTS = 'ADD_POSTS';

export function addPosts (posts, field, direction) {
    return {
        type: ADD_POSTS,
        posts,
        field,
        direction,
    }
}
