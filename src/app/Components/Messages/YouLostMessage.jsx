import React from 'react';
import PropTypes from 'prop-types';

import '../../Styles/message';

export class YouLostMessage extends React.Component {
    render() {
        return <div className='message-content'>
            <p>You have Lost :(</p>
            <button className='message-button' onClick={this.props.startGame}>New game</button>
            <button className='message-button' onClick={this.props.closeMessage}>Continue</button>
        </div>
    }
}

YouLostMessage.propTypes = {
    closeMessage: PropTypes.func,
    startGame: PropTypes.func
};