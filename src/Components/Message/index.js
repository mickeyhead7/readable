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

    state = {
        active: true,
    };

    activate = () => {
        this.setState({
            active: true,
        });
    };

    deactivate = debounce(() => {
        this.setState({
            active: false,
        });
    }, this.props.timeout);

    componentWillReceiveProps (newProps) {
        if (this.props.id !== newProps.id) {
            this.activate();
            this.deactivate();
        }
    }

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

const mapStateToProps = ({ messages }) => {
    return messages;
};

export default connect(mapStateToProps)(Message);
