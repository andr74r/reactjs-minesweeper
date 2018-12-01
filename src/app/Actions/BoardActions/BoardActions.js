import { INIT_BOARD, OPEN_CELL } from './BoardActionTypes';

export const initBoard = (height, width, minesCount) => {
    return {
        type: INIT_BOARD,
        size: {
            height: height,
            width: width,
            minesCount: minesCount
        }
    }
}

export const openCell = (position) => {
    return {
        type: OPEN_CELL,
        position: position
    }
}