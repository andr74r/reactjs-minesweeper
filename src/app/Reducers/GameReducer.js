import { CHANGE_GAME_STATE } from '../Actions/GameActions/GameActionTypes';

export const gameReducer = function (state = { isGameFinished: false, isWin: false}, action) {
    switch (action.type) {
        case CHANGE_GAME_STATE:
            return action.payload;
        default:
            return state;
    }
}