const uri = 'http://localhost:5001';
const options = {
    headers: {
        'Authorization': 'whatever-you-want',
    }
};

export const fetchCategories = () => fetch(`${uri}/categories`, options)
    .then(res => res.json())
    .then(res => res.categories);

export const fetchAllPosts = () => fetch(`${uri}/posts`, options)
    .then(res => res.json());

export const fetchPosts = category => fetch(`${uri}/${category}/posts`, options)
    .then(res => res.json());
