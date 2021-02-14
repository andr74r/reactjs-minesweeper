import { CHANGE_MESSAGE_TYPE } from '../Actions/MessageActions/MessageActionTypes';

import { messageTypes } from '../Consts/MessageTypes';

export const messageReducer = function (state = messageTypes.none, action) {
    switch (action.type) {
        case CHANGE_MESSAGE_TYPE:
            return action.messageType;
        default:
            return state;
    }
}