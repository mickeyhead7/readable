import moment from 'moment';
import Vote from '../../Vote';
import React, { Component } from 'react';

import './styles.css';

class Post extends Component {
    render () {
        const { body, category, id, timestamp, title } = this.props;
        const timestampFormatted = moment(timestamp).format('MMMM Do YYYY');

        return (
            <article className="post-partial">
                <header>
                    <h2>
                        <a href={`/${category}/${id}`}>{title}
                        </a>
                    </h2>
                    <small>{timestampFormatted}</small>
                </header>
                <section>
                    {body}
                </section>
                <footer>
                    <Vote />
                </footer>
            </article>
        );
    }
}

export default Post;