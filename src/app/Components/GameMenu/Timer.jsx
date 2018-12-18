import React from 'react';
import PropTypes from 'prop-types';

export class Timer extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return <div>
            Seconds: {this.props.timer.seconds}
        </div>
    }
}

Timer.propTypes = {
    onPlayClick: PropTypes.func,
    timer: PropTypes.object
};