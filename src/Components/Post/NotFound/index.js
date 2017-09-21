import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

/**
 * @description Post not found
 * @returns {XML}
 * @constructor
 */
const NotFound = () => {
    return (
        <div className="post-not-found">
            <header>
                <h1>This post has been deleted</h1>
            </header>
            <section>
                <p>
                    <span>The post you are looking for is no longer available. Why not have a look at </span>
                    <Link to="/">some other posts</Link>.
                </p>
            </section>
        </div>
    );
};

export default NotFound;
