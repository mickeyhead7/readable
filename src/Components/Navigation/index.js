import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Navigation extends Component {
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

function mapStateToProps({ categories }) {
    return {
        categories: categories.items,
    };
}

export default connect(mapStateToProps)(Navigation);