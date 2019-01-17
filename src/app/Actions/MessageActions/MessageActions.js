import { CHANGE_MESSAGE_TYPE } from './MessageActionTypes';

export const changeMessageType = (type) => {
    return {
        type: CHANGE_MESSAGE_TYPE,
        messageType: type
    }
}