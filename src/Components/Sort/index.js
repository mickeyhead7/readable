import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';

/**
 * @description Sort menu
 */
class Sort extends Component {
    static propTypes = {
        onSort: propTypes.func.isRequired,
        sort: propTypes.object.isRequired,
    };

    /**
     * @description hadles a change in the field selection
     * @param event Field change event
     */
    handleChangeField = (event) => {
        this.props.onSort(event.target.value, this.directionInput.value);
    };

    /**
     * @description hadles a change in the direction selection
     * @param event Direction change event
     */
    handleChangeDirection = (event) => {
        this.props.onSort(this.fieldInput.value, event.target.value);
    };

    /**
     * @description Renders the sort component
     * @returns {XML}
     */
    render () {
        const { field, direction } = this.props.sort;
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
                    <select className="sort-item-select" onChange={this.handleChangeField} ref={input => this.fieldInput = input} value={field}>
                        <option value="timestamp">Date</option>
                        <option value="voteScore">Votes</option>
                    </select>
                </div>
                <div className="sort-item">
                    <span className="sort-item-label">Sort order</span>
                    <select className="sort-item-select" onChange={this.handleChangeDirection} ref={input => this.directionInput = input} value={direction}>
                        {directions[field].map((direction, key) => (
                            <option key={key} value={direction.value}>{direction.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

/**
 * @description Maps store to local props
 * @param sort Sort store
 * @returns {{sort: *}}
 */
function mapStateToProps ({ sort }) {
    return {
        sort,
    };
};

export default connect(mapStateToProps)(Sort);
