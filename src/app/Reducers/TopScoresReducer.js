import { SET_TOPSCORES } from '../Actions/TopScoresActions/TopScoresActionTypes';
import { topScoresService } from '../Services/TopScoresService';

export const topScoresReducer = function (state = topScoresService.getTopScores(), action) {
    switch (action.type) {
        case SET_TOPSCORES:
            return action.topScores;
        default:
            return state;
    }
}