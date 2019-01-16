import { combineReducers } from 'redux';
import { ignoreActions } from 'redux-ignore';

import { boardReducer } from './BoardReducer'
import { gameReducer } from './GameReducer';
import { timerReducer } from './TimerReducer';
import { topScoresReducer } from './TopScoresReducer';

import { INCREMENT_SECONDS_COUNT } from '../Actions/TimerActions/TimerActionTypes';

export const rootReducer = combineReducers({
    boardStore: boardReducer,
    gameStore: gameReducer,
    timerStore: timerReducer,
    topScoresStore: ignoreActions(topScoresReducer, [INCREMENT_SECONDS_COUNT])
});