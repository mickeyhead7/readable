import propTypes from 'prop-types';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';
import React, { Component } from 'react';

import './styles.css';

/**
 * @description Vote
 */
class Vote extends Component {
    static propTypes = {
        id: propTypes.string.isRequired,
        onDownvote: propTypes.func.isRequired,
        onUpvote: propTypes.func.isRequired,
        voteScore: propTypes.number.isRequired,
    };

    /**
     * @description Handles the downvote action
     */
    handleDownvote = () => {
        const { onDownvote, id } = this.props;

        onDownvote(id);
    };

    /**
     * @description Handles the upvote action
     */
    handleUpvote = () => {
        const { onUpvote, id } = this.props;

        onUpvote(id);
    };

    /**
     * @description Renders the vote component
     * @returns {XML}
     */
    render () {
        const { voteScore } = this.props;
        return (
            <div className="vote">
                <ul className="vote-options">
                    <li className="vote-score">
                        Vote score: {voteScore}
                    </li>
                    <li className="vote-option">
                        <button className="vote-button upvote" onClick={this.handleUpvote}>
                            <FaThumbsUp />
                            <span>Upvote</span>
                        </button>
                    </li>
                    <li className="vote-option">
                        <button className="vote-button downvote" onClick={this.handleDownvote}>
                            <FaThumbsDown />
                            <span>Downvote</span>
                        </button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Vote;