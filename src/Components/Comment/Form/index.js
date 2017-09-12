import uuid from 'uuid/v4';
import domPurify from 'dompurify';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import * as Date from '../../../Utils/Date';

import './styles.css';

/**
 * @description Comment form
 */
class CommentForm extends Component {
    static propTypes = {
        onSubmit: propTypes.func.isRequired,
        postId: propTypes.string.isRequired,
    };

    /**
     * @description Handles comment submission
     * @param event Submit event
     */
    handleSubmit = (event) => {
        event.preventDefault();

        const { onSubmit, postId } = this.props;

        const comment = {
            author: 'thingthree',
            body: domPurify.sanitize(this.comment.value),
            id: uuid(),
            parentId: postId,
            timestamp: Date.getUnixTimestamp(),
        };

        onSubmit(comment);
    };

    /**
     * @description renders the comment form component
     * @returns {XML}
     */
    render () {
        return (
            <form className="comment-form" onSubmit={this.handleSubmit}>
                <header className="comment-form-header">
                    <h2>Add a comment</h2>
                </header>
                <div className="comment-form-content">
                    <textarea className="comment-form-input" ref={input => this.comment = input} />
                    <button>Submit comment</button>
                </div>
            </form>
        );
    }
}

export default CommentForm;