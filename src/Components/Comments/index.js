import React, { Component } from 'react';
import Comment from '../Comment';

class Comments extends Component {
    render () {
        return (
            <div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        );
    }
}

export default Comments;