import Post from './Views/Post';
import NewPost from './Views/NewPost';
import Posts from './Views/Posts';
import { Route } from 'react-router-dom';
import React, { Component } from 'react';

import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <Posts />
                )} />
                <Route exact path="/:category" render={({ match }) => (
                    <Posts
                        category={match.params.category}
                    />
                )} />
                <Route exact path="/:category/:post_id" render={() => (
                    <Post />
                )} />
                <Route exact path="/new" render={() => (
                    <NewPost />
                )} />
            </div>
        );
    }
}

export default App;
