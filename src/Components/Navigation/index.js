import { connect } from 'react-redux';
import * as API from '../../Utils/Api';
import React, { Component } from 'react';
import { addCategories } from '../../Actions';

import './styles.css';

class Navigation extends Component {
    componentDidMount () {
        API.fetchCategories().then(categories => {
            this.props.dispatch(addCategories(categories));
        });
    }

    render () {
        const { categories = [] } = this.props;

        return (
            <nav className="nav">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a className="nav-link" href="/">all posts</a>
                    </li>
                    {categories.map((category, key) => (
                        <li className="nav-item" key={key}>
                            <a className="nav-link" href={`/${category.path}`}>{category.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ categories }) {
    return categories;
}

export default connect(mapStateToProps)(Navigation);