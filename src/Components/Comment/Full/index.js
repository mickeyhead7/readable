import Form from '../Form';
import Vote from '../../Vote';
import propTypes from 'prop-types';
import React, { Component } from 'react';
import * as Date from '../../../Utils/Date';

import './styles.css';

/**
 * @description Comment
 */
class Comment extends Component {
    static propTypes = {
        author: propTypes.string.isRequired,
        body: propTypes.string.isRequired,
        id: propTypes.string.isRequired,
        onDeleteComment: propTypes.func.isRequired,
        onDownvote: propTypes.func.isRequired,
        onSubmitComment: propTypes.func.isRequired,
        onUpvote: propTypes.func.isRequired,
        timestamp: propTypes.number.isRequired,
        voteScore: propTypes.number.isRequired,
    };

    state = {
        editor: false,
    };

    /**
     * @description Switches the view to/from editing mode
     */
    switchEditor = () => {
        this.setState({
            editor: !this.state.editor,
        });
    };

    /**
     * @description Handles deleting the comment
     */
    handleDeleteComment = () => {
        const { id, onDeleteComment } = this.props;

        onDeleteComment(id);
    };

    /**
     * @description Handles submission of editing the comment
     * @param data
     * @returns {Promise.<TResult>}
     */
    handleSubmit = data => {
        const { onSubmitComment } = this.props;

        return onSubmitComment(data).then(() => {
            this.switchEditor();
        }).catch(error => error);
    };

    /**
     * @description Renders the comment
     * @returns {XML}
     */
    render () {
        const {
            author,
            body,
            id,
            onDownvote,
            onUpvote,
            timestamp,
            voteScore
        } = this.props;

        /**
         * @description Renders the comment
         */
        return (
            <article className="comment">
                {this.state.editor ? (
                    <div className="comment-edit">
                        <Form
                            id={id}
                            body={body}
                            onSubmit={this.handleSubmit}
                        />
                    </div>
                ) : (
                    <div>
                        <section className="comment-meta">
                            <small>Posted on {Date.format(timestamp, 'MMMM Do YYYY')} by {author}</small>
                        </section>
                        <section className="comment-body">
                            {body}
                        </section>
                        <footer className="comment-footer">
                            <div className="comment-vote">
                                <Vote
                                    id={id}
                                    onDownvote={onDownvote}
                                    onUpvote={onUpvote}
                                    voteScore={voteScore}
                                />
                            </div>
                        </footer>
                    </div>
                )}
                <ul className="comment-actions">
                    <li className="post-partial-action">
                        <button onClick={this.switchEditor}>{this.state.editor ? 'Discard changes' : 'Edit'}</button>
                    </li>
                    <li className="post-partial-action">
                        <button onClick={this.handleDeleteComment}>Delete</button>
                    </li>
                </ul>
            </article>
        );
    }
};

export default Comment;