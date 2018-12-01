import { INIT_BOARD } from './BoardActionTypes';

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