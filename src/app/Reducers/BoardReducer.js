import { INIT_BOARD } from '../Actions/BoardActions/BoardActionTypes';

import { boardService } from '../Services/BoardService';

export const boardReducer = function (state = [], action) {
    switch (action.type) {
        case INIT_BOARD:
            return boardService.initBoard(action.size);
        default:
            return state;
    }
}