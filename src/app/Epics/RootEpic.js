import { combineEpics } from 'redux-observable';

import { openMineEpic, openLastCellEpic, initBoardEpic } from './BoardEpics'


export const rootEpic = combineEpics(
    openMineEpic,
    openLastCellEpic,
    initBoardEpic
);