import sortBy from 'sort-by';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from '../../Utils/Api';
import React, { Component } from 'react';
import { setSort } from '../../Actions/sort';
import ThePosts from '../../Components/Posts';
import Navigation from '../../Components/Navigation';
import { addCategories } from '../../Actions/categories';
import { addPosts, votePost } from '../../Actions/posts';

/**
 * @description Posts listing view
 */
class Posts extends Component {
    static propTypes = {
        categories: propTypes.array,
        downvotePost: propTypes.func.isRequired,
        fetchCategories: propTypes.func.isRequired,
        fetchPosts: propTypes.func.isRequired,
        match: propTypes.object.isRequired,
        onSort: propTypes.func.isRequired,
        posts: propTypes.array,
        sort: propTypes.object.isRequired,
        upvotePost: propTypes.func.isRequired,
    };

    /**
     * @description Fetch the posts on mount
     */
    componentDidMount () {
        const { fetchCategories, fetchPosts, match } = this.props;
        const { category } = match.params;

        fetchCategories();
        fetchPosts(category);
    }

    /**
     * @description Fetch new category posts if a category change is detected
     * @param prevProps Previous props
     */
    componentDidUpdate (prevProps) {
        const { fetchPosts, match } = this.props;
        const { category } = match.params;

        if (prevProps.match.params.category !== category) {
            fetchPosts(category);
        }
    }

    /**
     * @description Sort the posts
     * @returns {*} Sorted posts
     */
    sortPosts = () => {
        const { posts, sort } = this.props;

        if (!posts) {
            return [];
        }

        const field = ['timestamp', 'voteScore'].includes(sort.field) ? sort.field : 'timestamp';
        const direction = sort.direction === 'desc' ? '-' : '';

        return posts.sort(sortBy(`${direction}${field}`));
    };

    /**
     * @description Renders the posts listing view
     * @returns {XML}
     */
    render () {
        const { categories, downvotePost, onSort, upvotePost } = this.props;
        const sortedPosts = this.sortPosts();

        return (
            <div>
                <Navigation
                    categories={categories}
                />
                <main>
                    <ThePosts
                        onDownvote={downvotePost}
                        onSort={onSort}
                        onUpvote={upvotePost}
                        posts={sortedPosts}
                    />
                </main>
            </div>
        );
    }
}

/**
 * @description Maps store to local props
 * @param posts Posts store
 * @param sort Sort store
 * @returns {{posts: *, sort: *}}
 */
function mapStateToProps({ categories, posts, sort }) {
    return {
        categories: categories.categories,
        posts: posts.posts,
        sort,
    };
}

/**
 * @description Maps dispatch to local props
 * @param dispatch Store dispatch method
 */
const mapDispatchToProps = dispatch => ({
    /**
     * @description Downvote a post
     * @param id Post id
     */
    downvotePost: (id) => {
        return API.postVote(id, 'downVote').then(post => {
            dispatch(votePost(post));
        });
    },
    /**
     * @description Fetch the categories
     */
    fetchCategories: () => {
        return API.fetchCategories().then(categories => {
            dispatch(addCategories(categories));
        });
    },
    /**
     * @description Fetch posts
     * @param category Category filter
     */
    fetchPosts: (category = null) => {
        const result = category ? API.fetchPosts(category) : API.fetchAllPosts();

        return result.then(posts => {
            dispatch(addPosts(posts));
        });
    },
    /**
     * @description on-sort event
     * @param field Sort field
     * @param direction Sort direction
     */
    onSort: (field, direction) => {
        dispatch(setSort(field, direction));
    },
    /**
     * @description Upvote a post
     * @param id Post id
     */
    upvotePost: (id) => {
        return API.postVote(id, 'upVote').then(post => {
            dispatch(votePost(post));
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);