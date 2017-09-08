import React, { Component } from 'react';
import Sort from '../../Components/Sort';
import PostPartial from '../Post/Partial';

import './styles.css';

class Posts extends Component {
    render () {
        const { category = null, onSort = () => {}, posts = [] } = this.props;

        return (
            <div className="category">
                <header className="category-heading">
                    <h1>{category || 'Recent posts'}</h1>
                </header>
                <Sort
                    onSort={onSort}
                />
                <section className="category-posts">
                    {posts.map(post => (
                        <div className="category-post" key={post.id}>
                            <PostPartial {...post} />
                        </div>
                    ))}
                </section>
            </div>
        );
    }
}

export default Posts;