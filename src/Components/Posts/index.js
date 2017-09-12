import propTypes from 'prop-types';
import React, { Component } from 'react';
import Sort from '../../Components/Sort';
import PostPartial from '../Post/Partial';

import './styles.css';

/**
 * @description Posts listing
 */
class Posts extends Component {
    static propTypes = {
        category: propTypes.string,
        onDownvote: propTypes.func,
        onSort: propTypes.func.isRequired,
        onUpvote: propTypes.func,
        posts: propTypes.array.isRequired,
    };

    /**
     * @description Renders the post listing component
     * @returns {XML}
     */
    render () {
        const { category = null, onDownvote, onSort, onUpvote, posts } = this.props;

        return (
            <div className="category">
                <header className="category-heading">
                    <h1>{category ? category.name : 'Recent posts'}</h1>
                </header>
                <Sort
                    onSort={onSort}
                />
                {posts.length ? (
                    <section className="category-posts">
                        {posts.map(post => (
                            <div className="category-post" key={post.id}>
                                <PostPartial {...post} onDownvote={onDownvote} onUpvote={onUpvote} />
                            </div>
                        ))}
                    </section>
                ) : null}
            </div>
        );
    }
}

export default Posts;