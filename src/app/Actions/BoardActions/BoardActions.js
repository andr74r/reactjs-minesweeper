import { INIT_BOARD, OPEN_CELL, CHANGE_LOCK_STATE } from './BoardActionTypes';

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

export const blockBoard = () => {
    return {
        type: CHANGE_LOCK_STATE,
        value: true
    }
}

export const unlockBoard = () => {
    return {
        type: CHANGE_LOCK_STATE,
        value: false
    }
}