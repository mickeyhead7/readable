import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './styles.css';

/**
 * @description Navigation
 */
const Navigation = props => {
    const { categories = [] } = props;

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
};

Navigation.propTypes = {
    categories: propTypes.array,
};

/**
 * @description Maps store to local props
 * @param categories Categories store
 * @returns {{categories}}
 */
const mapStateToProps = ({ categories }) => {
    return {
        categories: categories.categories,
    };
};

export default connect(mapStateToProps)(Navigation);