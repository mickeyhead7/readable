import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import './styles.css';

/**
 * @description Navigation
 */
const Navigation = props => {
    const { categories = [], active } = props;

    /**
     * @description Configures and renders the list of nav items
     * @param categories List of category items to render
     * @param active The current active path
     */
    const navItems = (categories, active) => {
        return categories.map((category, key) => {
            const classes = classNames({
                'nav-link': true,
                'nav-link-active': category.path === active,
            });

            return (
                <li className="nav-item" key={key}>
                    <Link className={classes} to={`/${category.path}`}>{category.name}</Link>
                </li>
            )
        });
    };

    /**
     * @description Configures and renders the root nav item
     * @param active The current active path
     * @returns {XML}
     */
    const rootNavItem = active => {
        const classes = classNames({
            'nav-link': true,
            'nav-link-active': !active,
        });

        return (
            <li className="nav-item">
                <Link className={classes} to="/">all posts</Link>
            </li>
        );
    };

    return (
        <nav className="nav">
            <ul className="nav-menu">
                {rootNavItem(active)}
                {navItems(categories, active)}
                <li className="nav-item new-post">
                    <Link className="nav-link" to="/post/new">
                        <span>add a new post</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

Navigation.propTypes = {
    active: propTypes.string,
    categories: propTypes.array,
};

export default Navigation;
