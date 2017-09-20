const uri = 'http://localhost:5001';
const headers = {
    headers: {
        'Authorization': 'whatever-you-want',
        'Content-Type': 'application/json',
    },
};
const deleteParams = {
    method: 'DELETE',
};
const postParams = {
    method: 'POST',
};
const putParams = {
    method: 'POST',
};

/**
 * @description Adds a new comment
 * @param comment Comment object
 */
export const addComment = comment => fetch(`${uri}/comments`, {
    ...headers,
    ...postParams,
    body: JSON.stringify(comment),
})
    .then(res => res.json());

/**
 * @description Adds a new post to the store
 * @param post Post object
 */
export const addPost = post => fetch(`${uri}/posts`, {
    ...headers,
    ...postParams,
    body: JSON.stringify(post),
})
    .then(res => res.json());

/**
 * @description Perform a vote on a comment
 * @param id Comment id
 * @param option Vote option
 */
export const commentVote = (id, option) =>  fetch(`${uri}/comments/${id}`, {
    ...headers,
    ...postParams,
    body: JSON.stringify({
        option,
    }),
})
    .then(res => res.json());

/**
 * @description Deletes a selected comment
 * @param id Comment id
 */
export const deleteComment = id => fetch(`${uri}/comments/${id}`, {
    ...headers,
    ...deleteParams,
    body: JSON.stringify({
        id,
    }),
});

/**
 * @description Deletes a selected post
 * @param id Post id
 */
export const deletePost = id => fetch(`${uri}/posts/${id}`, {
    ...headers,
    ...deleteParams,
    body: JSON.stringify({
        id,
    }),
});

/**
 * @description Fetches all the posts
 */
export const fetchAllPosts = () => fetch(`${uri}/posts`, {
    ...headers
})
    .then(res => res.json());

/**
 * @description Fetches the categories
 */
export const fetchCategories = () => fetch(`${uri}/categories`, {
    ...headers,
})
    .then(res => res.json())
    .then(res => res.categories);

/**
 * @description Fetches comments for a selected post
 * @param id Post id
 */
export const fetchComments = id => fetch(`${uri}/posts/${id}/comments`, {
    ...headers,
})
    .then(res => res.json());

/**
 * @description Fetches a selected post
 * @param id Post id
 */
export const fetchPost = id => fetch(`${uri}/posts/${id}`, {
    ...headers,
})
    .then(res => res.json());

/**
 * @description Fetches the posts for a given category
 */
export const fetchPosts = category => fetch(`${uri}/${category}/posts`, {
    ...headers
})
    .then(res => res.json());

/**
 * @description Perform a vote on a post
 * @param id Post id
 * @param option Vote option
 */
export const postVote = (id, option) =>  fetch(`${uri}/posts/${id}`, {
    ...headers,
    ...postParams,
    body: JSON.stringify({
        option,
    }),
})
    .then(res => res.json());

/**
 * @description Updates a post in the store
 * @param post Post object
 */
export const updatePost = post => fetch(`${uri}/posts/${post.id}`, {
    ...headers,
    ...putParams,
    body: JSON.stringify(post),
})
    .then(res => res.json());
