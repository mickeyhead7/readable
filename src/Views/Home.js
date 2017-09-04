import React, { Component } from 'react';
import Categories from '../Components/Categories';
import Posts from '../Components/Posts';
import PostForm from '../Components/PostForm';

class Posts extends Component {
    render () {
        return (
            <div>
                <Categories />
                <Posts />
                <PostForm />
            </div>
        );
    }
}

export default Posts;