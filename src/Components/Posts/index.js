import React  from 'react';
import propTypes from 'prop-types';
import Sort from '../../Components/Sort';
import PostPartial from '../Post/Partial';

import './styles.css';

/**
 * @description Posts listing
 */
const Posts = props => {
    const { category = null, onDeletePost, onDownvote, onSort, onUpvote, posts } = props;

    return (
        <div className="posts">
            <header className="posts-heading">
                <h1>{category ? category.name : 'Recent posts'}</h1>
            </header>
            <section className="posts-actions">
                <Sort
                    item="posts"
                    onSort={onSort}
                />
            </section>
            {posts.length ? (
                <section className="posts-list">
                    {posts.map(post => (
                        <div className="posts-item" key={post.id}>
                            <PostPartial
                                {...post}
                                onDeletePost={onDeletePost}
                                onDownvote={onDownvote}
                                onUpvote={onUpvote}
                            />
                        </div>
                    ))}
                </section>
            ) : null}
        </div>
    );
};

Posts.propTypes = {
    category: propTypes.string,
    onDeletePost: propTypes.func,
    onDownvote: propTypes.func,
    onSort: propTypes.func,
    onUpvote: propTypes.func,
    posts: propTypes.array,
};

export default Posts;