import { combineEpics } from 'redux-observable';

import { openMineEpic, openLastCellEpic, initBoardEpic, clickOnZero } from './BoardEpics'


export const rootEpic = combineEpics(
    openMineEpic,
    openLastCellEpic,
    initBoardEpic,
    clickOnZero
);