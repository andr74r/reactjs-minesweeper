import { combineReducers } from 'redux';

import { boardReducer } from './BoardReducer'
import { gameReducer } from './GameReducer';

export const rootReducer = combineReducers({
    boardStore: boardReducer,
    gameStore: gameReducer
});