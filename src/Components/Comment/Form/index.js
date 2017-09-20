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
     * @description Sets the state on mount
     */
    componentDidMount () {
        this.setState({
            body: this.props.body,
        });
    }

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

        const { id, onSubmit } = this.props;

        onSubmit({
            body: this.state.body,
            id,
        }).then(() => {
            if (!id) {
                this.setState({
                    body: '',
                });
            }
        }).catch(() => {});
    };

    /**
     * Renders the comment form
     * @returns {XML}
     */
    render () {
        const { id } = this.props;

        return (
            <div className="comment-form" onSubmit={this.handleSubmit}>
                <header className="comment-form-header">
                    <h2>{id ? 'Update comment' : 'Add a comment'}</h2>
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
                        <button className="button">{id ? 'Update comment' : 'Add comment'}</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default CommentForm;