import propTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'just-debounce';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';

class Message extends Component {
    static propTypes = {
        body: propTypes.string,
        id: propTypes.string,
        level: propTypes.oneOf(['error', 'success']),
        timeout: propTypes.number,
    };

    activate = debounce(() => {
        const { id } = this.props;
        let message = document.getElementById(id);

        if (message) {
            message.classList.remove('message-active');
        }
    }, this.props.timeout);

    componentDidUpdate() {
        const { id } = this.props;
        let message = document.getElementById(id);

        this.activate();

        if (message) {
            message.classList.add('message-active');
        }
    }

    render () {
        const { body, id, level } = this.props;
        const classes = classNames({
            message: true,
            [`message-${level}`]: !!level,
        });

        return (
            <div className={classes} id={id}>
                {body}
            </div>
        );
    }
}

const mapStateToProps = ({ messages }) => {
    return messages;
};

export default connect(mapStateToProps)(Message);
