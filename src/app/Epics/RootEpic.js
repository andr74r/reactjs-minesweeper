import { combineEpics } from 'redux-observable';

import { openMineEpic, openLastCellEpic, initBoardEpic, clickOnZero } from './BoardEpics'
import { addScoreEpic } from './TopScoresEpics';


export const rootEpic = combineEpics(
    openMineEpic,
    openLastCellEpic,
    initBoardEpic,
    clickOnZero,
    addScoreEpic
);