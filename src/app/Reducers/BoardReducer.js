import { INIT_BOARD, OPEN_CELL, CHANGE_LOCK_STATE, OPEN_NEAR_ZERO, UPDATE_FLAG_STATE } from '../Actions/BoardActions/BoardActionTypes';

import { boardService } from '../Services/BoardService';

export const boardReducer = function (state = {}, action) {
    switch (action.type) {
        case INIT_BOARD:
            return boardService.initBoard(action.size);
        case OPEN_CELL:
            return boardService.openCell(action.position, state);
        case CHANGE_LOCK_STATE:
            return boardService.changeLockState(action.value, state);
        case OPEN_NEAR_ZERO:
            return boardService.openNearZero(action.position, state);
        case UPDATE_FLAG_STATE:
            return boardService.updateFlagState(action.position, state);
        default:
            return state;
    }
}