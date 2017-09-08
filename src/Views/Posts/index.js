import { connect } from 'react-redux';
import * as API from '../../Utils/Api';
import React, { Component } from 'react';
import ThePosts from '../../Components/Posts';
import Navigation from '../../Components/Navigation';
import { addCategories, addPosts, setSort } from '../../Actions';

class Posts extends Component {
    componentDidMount () {
        const { fetchCategories, sort } = this.props;

        fetchCategories();
        this.getSortedPosts(sort.field, sort.direction);
    }

    fetchPosts = () => {
        const { category } = this.props;

        if (category) {
            return API.fetchPosts(category);
        } else {
            return API.fetchAllPosts();
        }
    };

    getSortedPosts = (field, direction) => {
        this.fetchPosts().then(posts => {
            this.props.onSort(posts, field, direction);
        });
    };

    render () {
        const { category, posts } = this.props;

        return (
            <div>
                <Navigation />
                <main>
                    <ThePosts
                        category={category}
                        onSort={this.getSortedPosts}
                        posts={posts}
                    />
                </main>
            </div>
        );
    }
}

function mapStateToProps({ categories, posts, sort }) {
    return {
        categories: categories.items,
        posts: posts.items,
        sort,
    };
}

const mapDispatchToProps = dispatch => ({
    fetchCategories: () => {
        API.fetchCategories().then(categories => {
            dispatch(addCategories(categories));
        });
    },
    onSort: (posts, field, direction) => {
        dispatch(setSort(field, direction));
        dispatch(addPosts(posts, field, direction));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);