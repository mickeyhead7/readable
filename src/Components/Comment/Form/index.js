import propTypes from 'prop-types';
import React, { Component } from 'react';

import './styles.css';

/**
 * @description Comment form
 */
class CommentForm extends Component {
    static propTypes = {
        onSubmit: propTypes.func.isRequired,
    };

    state = {
        body: '',
    };

    /**
     * @description Handles an input change
     * @param event Input event
     */
    handleInputChange = (event) => {
        this.setState({
            body: event.target.value,
        });
    };

    /**
     * @description Handles comment submission
     * @param event Submit event
     */
    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state).then(() => {
            this.setState({
                body: '',
            });
        }).catch(() => {});
    };

    /**
     * Renders the comment form
     * @returns {XML}
     */
    render () {
        return (
            <div className="comment-form" onSubmit={this.handleSubmit}>
                <header className="comment-form-header">
                    <h2>Add a comment</h2>
                </header>
                <form className="comment-form-content">
                    <div className="form-row">
                        <textarea
                            value={this.state.body}
                            name="body"
                            onChange={this.handleInputChange}
                            placeholder="Start writing..."
                        />
                    </div>
                    <div className="form-row">
                        <button className="button">Submit comment</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default CommentForm;