import React, { Component } from 'react';
import Categories from '../Components/Categories';
import PostList from '../Components/Posts';
import PostForm from '../Components/PostForm';

class Posts extends Component {
    render () {
        return (
            <div>
                <Categories />
                <PostList />
                <PostForm />
            </div>
        );
    }
}

export default Posts;