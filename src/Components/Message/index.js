import propTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'just-debounce';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import './styles.css';

/**
 * @description Message
 */
class Message extends Component {
    static propTypes = {
        body: propTypes.string,
        id: propTypes.string,
        level: propTypes.oneOf(['error', 'success']),
        timeout: propTypes.number,
    };

    state = {
        active: true,
    };

    /**
     * @description Activates the message
     */
    activate = () => {
        this.setState({
            active: true,
        });
    };

    /**
     * @description Deactivates the message
     */
    deactivate = debounce(() => {
        this.setState({
            active: false,
        });
    }, this.props.timeout);

    /**
     * @description Activates when the component receives new props
     * @param newProps
     */
    componentWillReceiveProps (newProps) {
        if (this.props.id !== newProps.id) {
            this.activate();
            this.deactivate();
        }
    }

    /**
     * @description Renders the message
     * @returns {XML}
     */
    render () {
        const { body, id, level } = this.props;
        const classes = classNames({
            message: true,
            [`message-${level}`]: !!level,
            'message-active': !!body && this.state.active,
        });

        return (
            <div className={classes} id={id}>
                {body}
            </div>
        );
    }
}

/**
 * @description Maps the store state to the compoent props
 * @param messages Messgaes store
 * @returns {*}
 */
const mapStateToProps = ({ messages }) => {
    return messages;
};

export default connect(mapStateToProps)(Message);
