import propTypes from 'prop-types';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';

class Sort extends Component {
    static propTypes = {
        onSort: propTypes.func.isRequired,
        sort: propTypes.object.isRequired,
    };

    handleChangeField = (event) => {
        this.props.onSort(event.target.value, this.directionInput.value);
    };

    handleChangeDirection = (event) => {
        this.props.onSort(this.fieldInput.value, event.target.value);
    };

    render () {
        const { field, direction } = this.props.sort;

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
                    <span className="sort-item-label">Sort direction</span>
                    <select className="sort-item-select" onChange={this.handleChangeDirection} ref={input => this.directionInput = input} value={direction}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ sort }) {
    return {
        sort,
    };
};

export default connect(mapStateToProps)(Sort);
