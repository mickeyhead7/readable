import React from 'react';
import uuid from 'uuid/v4';
import domPurify from 'dompurify';
import propTypes from 'prop-types';
import * as Date from '../../../Utils/Date';

import './styles.css';

/**
 * @description Comment form
 */
const CommentForm = props => {
    const { onSubmit, postId } = props;

    /**
     * @description Handles comment submission
     * @param event Submit event
     */
    const handleSubmit = event => {
        event.preventDefault();

        const commentInput = document.getElementById('comment');
        const comment = {
            author: 'thingthree',
            body: domPurify.sanitize(commentInput.value),
            id: uuid(),
            parentId: postId,
            timestamp: Date.getUnixTimestamp(),
        };

        onSubmit(comment);
    };

    return (
        <form className="comment-form" onSubmit={handleSubmit}>
            <header className="comment-form-header">
                <h2>Add a comment</h2>
            </header>
            <div className="comment-form-content">
                <textarea className="comment-form-input" id="comment" />
                <button>Submit comment</button>
            </div>
        </form>
    );
};

CommentForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
    postId: propTypes.string.isRequired,
};

export default CommentForm;