import { SET_TOPSCORES, ADD_SCORE } from './TopScoresActionTypes';

export const setTopScores = (scores) => {
    return {
        type: SET_TOPSCORES,
        topScores: scores
    }
}

export const addScore = (score) => {
    return {
        type: ADD_SCORE,
        score: score
    }
}