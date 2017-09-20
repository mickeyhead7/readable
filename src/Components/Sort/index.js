import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import './styles.css';

/**
 * @description Sort menu, persistent across application
 */
const Sort = props => {
    const { field, direction } = props.sort[props.item];

    /**
     * @description handles a change in the field selection
     * @param event Field change event
     */
    const handleChangeField = (event) => {
        const directionInput = document.getElementById('direction');
        props.onSort(event.target.value, directionInput.value);
    };

    /**
     * @description hadles a change in the direction selection
     * @param event Direction change event
     */
    const handleChangeDirection = (event) => {
        const fieldInput = document.getElementById('field');

        props.onSort(fieldInput.value, event.target.value);
    };

    // Some dynamic directions, for a more logical UI :)
    const directions = {
        timestamp: [
            {
                value: 'desc',
                label: 'Latest first',
            },
            {
                value: 'asc',
                label: 'Oldest first',
            },
        ],
        voteScore: [
            {
                value: 'desc',
                label: 'Highest first',
            },
            {
                value: 'asc',
                label: 'Lowest first',
            },
        ],
    };

    return (
        <div className="sort">
            <div className="sort-item">
                <span className="sort-item-label">Sort by</span>
                <select className="sort-item-select" onChange={handleChangeField} id="field" value={field}>
                    <option value="timestamp">Date</option>
                    <option value="voteScore">Votes</option>
                </select>
            </div>
            <div className="sort-item">
                <span className="sort-item-label">Sort order</span>
                <select className="sort-item-select" onChange={handleChangeDirection} id="direction" value={direction}>
                    {directions[field].map((direction, key) => (
                        <option key={key} value={direction.value}>{direction.label}</option>
                    ))}
                </select>
            </div>
        </div>
    );

};

Sort.propTypes = {
    item: propTypes.string.isRequired,
    onSort: propTypes.func.isRequired,
    sort: propTypes.object.isRequired,
};

/**
 * @description Maps store to local props
 * @param sort Sort store
 * @returns {{sort: *}}
 */
const mapStateToProps = ({ sort }) => {
    return {
        sort,
    };
};

export default connect(mapStateToProps)(Sort);
