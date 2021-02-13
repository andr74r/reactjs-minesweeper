import React from 'react';
import PropTypes from 'prop-types';

import { messageTypes } from '../../Consts/MessageTypes';

import { YouLostMessage } from './YouLostMessage';
import { YouWonMessage } from './YouWonMessage';

import Modal from 'react-bootstrap/Modal'

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
                    closeMessage={this.props.closeMessage}
                    startGame={this.props.startGame}/>
                break;
            case messageTypes.initialScreen:
            case messageTypes.none:
            default:
                message = null;
        }

        return <Modal 
            show={!!message} 
            onHide={this.props.closeMessage}
            >
            { message }
        </Modal>
    }
}

MessageContainer.propTypes = {
    seconds: PropTypes.number,
    addScore: PropTypes.func,
    messageType: PropTypes.string,
    closeMessage: PropTypes.func,
    startGame: PropTypes.func
};