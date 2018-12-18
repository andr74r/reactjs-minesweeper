import { combineReducers } from 'redux';

import { boardReducer } from './BoardReducer'
import { gameReducer } from './GameReducer';
import { timerReducer } from './TimerReducer';

export const rootReducer = combineReducers({
    boardStore: boardReducer,
    gameStore: gameReducer,
    timerStore: timerReducer
});