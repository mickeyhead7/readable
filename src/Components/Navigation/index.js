import propTypes from 'prop-types';
import { connect } from 'react-redux';
import * as API from '../../Utils/Api';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { addCategories } from '../../Actions/categories';

import './styles.css';

/**
 * @description Navigation
 */
class Navigation extends Component {
    static propTypes = {
        categories: propTypes.array,
        fetchCategories: propTypes.func.isRequired,
    };

    /**
     * @description Fetches the categories on mount
     */
    componentDidMount () {
        this.props.fetchCategories();
    }

    /**
     * @description Renders the navigation
     * @returns {XML}
     */
    render () {
        const { categories = [] } = this.props;

        return (
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">all posts</Link>
                    </li>
                    {categories.map((category, key) => (
                        <li className="nav-item" key={key}>
                            <Link className="nav-link" to={`/${category.path}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

/**
 * @description Maps store to local props
 * @param categories Categories store
 * @returns {{categories}}
 */
const mapStateToProps = ({ categories }) => {
    return {
        categories: categories.items,
    };
};

/**
 * @description Maps dispatch to local props
 * @param dispatch Store dispatch method
 */
const mapDispatchToProps = dispatch => ({
    /**
     * @description Fetch the categories
     */
    fetchCategories: () => {
        API.fetchCategories().then(categories => {
            dispatch(addCategories(categories));
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);