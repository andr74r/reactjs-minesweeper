import { INIT_BOARD, OPEN_CELL, CHANGE_LOCK_STATE, UPDATE_FLAG_STATE } from '../Actions/BoardActions/BoardActionTypes';

import { BoardService } from '../Services/BoardService';

const boardService = new BoardService();

export const boardReducer = function (state = {}, action) {
    switch (action.type) {
        case INIT_BOARD:
            return boardService.initBoard(action.size);
        case OPEN_CELL:
            return boardService.openCell(action.position, state);
        case CHANGE_LOCK_STATE:
            return boardService.changeLockState(action.value, state);
        case UPDATE_FLAG_STATE:
            return boardService.updateFlagState(action.position, state);
        default:
            return state;
    }
}