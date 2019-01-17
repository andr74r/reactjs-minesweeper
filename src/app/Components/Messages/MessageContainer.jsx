import React from 'react';
import PropTypes from 'prop-types';

import { messageTypes } from '../../Consts/MessageTypes';

import { YouLostMessage } from './YouLostMessage';
import { YouWonMessage } from './YouWonMessage';

export class MessageContainer extends React.Component {
    render() {
        let message = null;

        switch (this.props.messageType) {
            case messageTypes.youLostMessage:
                message = <YouLostMessage />
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

        return <div>
            { message }
        </div>
    }
}

MessageContainer.propTypes = {
    seconds: PropTypes.number,
    addScore: PropTypes.func,
    messageType: PropTypes.string
};