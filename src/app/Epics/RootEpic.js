import { combineEpics } from 'redux-observable';

import { openCellEpic } from './BoardEpics'


export const rootEpic = combineEpics(
    openCellEpic
);