import { filter, mapTo, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ofType } from 'redux-observable';

import { OPEN_CELL, INIT_BOARD } from '../Actions/BoardActions/BoardActionTypes';
import { blockBoard } from '../Actions/BoardActions/BoardActions';
import { changeMessageType } from '../Actions/MessageActions/MessageActions';
import { stopTimer, restartTimer } from '../Actions/TimerActions/TimerActions';

import { messageTypes } from '../Consts/MessageTypes';

export const openMineEpic = (action, state) => action.pipe(
    ofType(OPEN_CELL),
    filter(() => state.value.boardStore.lastOpenedCell.isMine),
    mergeMap(() => of(
        blockBoard(),
        changeMessageType(messageTypes.youLostMessage),
        stopTimer()
    ))
);

export const openLastCellEpic = (action, state) => action.pipe(
    ofType(OPEN_CELL),
    filter(() => state.value.boardStore.lastOpenedCell.isLast),
    mergeMap(() => of(
        blockBoard(),
        changeMessageType(messageTypes.youWinMessage),
        stopTimer()
    ))
);

export const initBoardEpic = (action, state) => action.pipe(
    ofType(INIT_BOARD),
    mergeMap(() => of(
        changeMessageType(messageTypes.none),
        restartTimer()
    ))
);