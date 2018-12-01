import { combineReducers } from 'redux';

import { boardReducer } from './BoardReducer'

export const rootReducer = combineReducers({
    boardStore: boardReducer
});