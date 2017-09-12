import Post from './Views/Post';
import Posts from './Views/Posts';
import NewPost from './Views/NewPost';
import React, { Component } from 'react';
import { Route} from 'react-router-dom';

import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" component={Posts} />
                <Route exact path="/:category" component={Posts} />
                <Route exact path="/:category/:post_id" component={Post} />
                <Route exact path="/new" component={NewPost} />
            </div>
        );
    }
}

export default App;
