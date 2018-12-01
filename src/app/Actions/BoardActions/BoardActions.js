import { INIT_BOARD } from './BoardActionTypes';

export const initBoard = (height, width) => {
    return {
        type: INIT_BOARD,
        size: {
            height: height,
            width: width
        }
    }
}