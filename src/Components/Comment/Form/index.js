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

        const bodyInput = document.getElementById('body');
        const comment = {
            author: 'thingthree',
            body: domPurify.sanitize(bodyInput.value),
            id: uuid(),
            parentId: postId,
            timestamp: Date.getUnixTimestamp(),
        };

        onSubmit(comment).then(() => {
            bodyInput.value = '';
        });
    };

    return (
        <div className="comment-form" onSubmit={handleSubmit}>
            <header className="comment-form-header">
                <h2>Add a comment</h2>
            </header>
            <form className="comment-form-content">
                <div className="form-row">
                    <textarea id="body" placeholder="Start writing..." />
                </div>
                <div className="form-row">
                    <button>Submit comment</button>
                </div>
            </form>
        </div>
    );
};

CommentForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
    postId: propTypes.string.isRequired,
};

export default CommentForm;