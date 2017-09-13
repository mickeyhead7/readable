import React from 'react';
import propTypes from 'prop-types';
import FaMehO from 'react-icons/lib/fa/meh-o';
import FaFrownO from 'react-icons/lib/fa/frown-o';
import FaSmileO from 'react-icons/lib/fa/smile-o';
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up';
import FaThumbsDown from 'react-icons/lib/fa/thumbs-down';

import './styles.css';

/**
 * @description Vote
 */
const Vote = props => {
    const { id, onDownvote, onUpvote, voteScore } = props;

    /**
     * @description Handles the downvote action
     */
    const handleDownvote = () => {
        onDownvote(id);
    };

    /**
     * @description Handles the upvote action
     */
    const handleUpvote = () => {
        onUpvote(id);
    };

    /**
     * @description Returns a smiley based on the voteScore prop
     * @returns {XML}
     */
    const smiley = () => {
        if (voteScore === 0) {
            return <FaMehO />;
        } else if (voteScore > 0) {
            return <FaSmileO />;
        } else {
            return <FaFrownO />;
        }
    };

    return (
        <div className="vote">
            <ul className="vote-options">
                <li className="vote-score">
                    <span>Vote score: {voteScore}</span>
                    {smiley()}
                </li>
                <li className="vote-option">
                    <button className="vote-button upvote" onClick={handleUpvote}>
                        <FaThumbsUp />
                        <span>Upvote</span>
                    </button>
                </li>
                <li className="vote-option">
                    <button className="vote-button downvote" onClick={handleDownvote}>
                        <FaThumbsDown />
                        <span>Downvote</span>
                    </button>
                </li>
            </ul>
        </div>
    );
};

Vote.propTypes = {
    id: propTypes.string.isRequired,
    onDownvote: propTypes.func.isRequired,
    onUpvote: propTypes.func.isRequired,
    voteScore: propTypes.number.isRequired,
};

export default Vote;