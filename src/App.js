import Post from './Views/Post';
import Posts from './Views/Posts';
import EditPost from './Views/Post/Edit';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './app.css';

/**
 * @description Application
 */
class App extends Component {
    /**
     * @description Renders the application
     * @returns {XML}
     */
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path="/" component={Posts} />
                    <Route exact path="/post/new" component={EditPost} />
                    <Route exact path="/:category" component={Posts} />
                    <Route exact path="/:category/:post_id" component={Post} />
                </Switch>
            </div>
        );
    }
}

export default App;
