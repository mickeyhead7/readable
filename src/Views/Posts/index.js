import { connect } from 'react-redux';
import * as API from '../../Utils/Api';
import { setSort } from '../../Actions';
import React, { Component } from 'react';
import { addPosts } from '../../Actions';
import TheCategory from '../../Components/Posts';
import Navigation from '../../Components/Navigation';

class Posts extends Component {
    componentDidMount () {
        const { field, direction } = this.props;

        this.getSortedPosts(field, direction);
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
                    <TheCategory
                        category={category}
                        onSort={this.getSortedPosts}
                        posts={posts}
                    />
                </main>
            </div>
        );
    }
}

function mapStateToProps({ posts, sort }) {
    return {
        posts: posts.items,
        sort,
    };
}

const mapDispatchToProps = dispatch => ({
    onSort: (posts, field, direction) => {
        dispatch(setSort(field, direction));
        dispatch(addPosts(posts, field, direction));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);