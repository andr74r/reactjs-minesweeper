import React from 'react';
import PropTypes from 'prop-types';

import { messageTypes } from '../../Consts/MessageTypes';

import { YouLostMessage } from './YouLostMessage';
import { YouWonMessage } from './YouWonMessage';

import '../../Styles/message';

export class MessageContainer extends React.Component {
    render() {
        let message;

        switch (this.props.messageType) {
            case messageTypes.youLostMessage:
                message = <YouLostMessage 
                    closeMessage={this.props.closeMessage}
                    startGame={this.props.startGame}/>
                break;
            case messageTypes.youWinMessage:
                message = <YouWonMessage
                    seconds={this.props.seconds}
                    addScore={this.props.addScore}/>
                break;
            case messageTypes.initialScreen:
            case messageTypes.none:
            default:
                message = null;
        }

        if (!message) {
            return null;
        }

        return <div className='message'>
            { message }
        </div>
    }
}

MessageContainer.propTypes = {
    seconds: PropTypes.number,
    addScore: PropTypes.func,
    messageType: PropTypes.string,
    closeMessage: PropTypes.func,
    startGame: PropTypes.func
};