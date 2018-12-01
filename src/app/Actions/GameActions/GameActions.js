import { CHANGE_GAME_STATE } from './GameActionTypes';

export const finishGame = (isWin) => {
    return {
        type: CHANGE_GAME_STATE,
        payload: {
            isGameFinished: true,
            isWin: isWin
        }
    }
}

export const startGame = () => {
    return {
        type: CHANGE_GAME_STATE,
        payload: {
            isGameFinished: false,
            isWin: false
        }
    }
}