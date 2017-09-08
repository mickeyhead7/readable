import React, { Component } from 'react';

import './styles.css';

class Sort extends Component {
    handleChangeField = (event) => {
        this.props.onSort(event.target.value, this.directionInput.value);
    };

    handleChangeDirection = (event) => {
        this.props.onSort(this.fieldInput.value, event.target.value);
    };

    render () {
        const { field, direction } = this.props;

        return (
            <div className="sort">
                <div className="sort-item">
                    <span>Sort by</span>
                    <select onChange={this.handleChangeField} ref={input => this.fieldInput = input} value={field}>
                        <option value="timestamp">Date</option>
                        <option value="voteScore">Votes</option>
                    </select>
                </div>
                <div className="sort-item">
                    <span>Sort direction</span>
                    <select onChange={this.handleChangeDirection} ref={input => this.directionInput = input} value={direction}>
                        <option value="desc">Descending</option>
                        <option value="asc">Ascending</option>
                    </select>
                </div>
            </div>
        );
    }
}

export default Sort;
