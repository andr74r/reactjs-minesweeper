import { combineEpics } from 'redux-observable';

import { openMineEpic, openLastCellEpic, initBoardEpic } from './BoardEpics'
import { addScoreEpic } from './TopScoresEpics';


export const rootEpic = combineEpics(
    openMineEpic,
    openLastCellEpic,
    initBoardEpic,
    addScoreEpic
);