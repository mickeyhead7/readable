import React, { Component } from 'react';
import Comment from '../Comment';

/**
 * @description Comment listing
 */
class Comments extends Component {
    /**
     * @description Renders the comment list
     * @returns {XML}
     */
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