import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export class Timer extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <div className="menu__timer">
            {this.props.timer.seconds}
        </div>
    }
}

Timer.propTypes = {
    onPlayClick: PropTypes.func,
    timer: PropTypes.object
};