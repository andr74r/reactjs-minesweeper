import { INIT_BOARD, OPEN_CELL } from '../Actions/BoardActions/BoardActionTypes';

import { boardService } from '../Services/BoardService';

export const boardReducer = function (state = {}, action) {
    switch (action.type) {
        case INIT_BOARD:
            return boardService.initBoard(action.size);
        case OPEN_CELL:
            return boardService.openCell(action.position, state);
        default:
            return state;
    }
}