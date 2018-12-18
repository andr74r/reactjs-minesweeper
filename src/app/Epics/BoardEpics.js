import { filter, mapTo, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ofType } from 'redux-observable';

import { OPEN_CELL, INIT_BOARD } from '../Actions/BoardActions/BoardActionTypes';
import { blockBoard, openNearZero } from '../Actions/BoardActions/BoardActions';
import { finishGame, startGame } from '../Actions/GameActions/GameActions';
import { stopTimer, restartTimer } from '../Actions/TImerActions/TimerActions';

export const openMineEpic = (action, state) => action.pipe(
    ofType(OPEN_CELL),
    filter(action => {
        let position = action.position;
        let cell = state.value.boardStore.cells[position.x][position.y];
        return cell.isMine;
    }),
    mergeMap(() => of(
        blockBoard(),
        finishGame(false),
        stopTimer()
    ))
);

export const openLastCellEpic = (action, state) => action.pipe(
    ofType(OPEN_CELL),
    filter(action => {
        let boardStore = state.value.boardStore;
        let cells = boardStore.cells;
        let notMineCellsCount =  boardStore.height * boardStore.width - boardStore.minesCount;
        let openedNotMineCellsCount = 0;
        
        cells
            .forEach(row => openedNotMineCellsCount += row
                .filter(cell => !cell.isMine && cell.isOpened)
                .length);
        
        return openedNotMineCellsCount == notMineCellsCount;
    }),
    mergeMap(() => of(
        blockBoard(),
        finishGame(true),
        stopTimer()
    ))
);

export const clickOnZero = (action, state) => action.pipe(
    ofType(OPEN_CELL),
    filter(action => {
        let position = action.position;
        let cell = state.value.boardStore.cells[position.x][position.y];
        return cell.value == 0;
    }),
    mergeMap(action => of(openNearZero(action.position)))
)

export const initBoardEpic = (action, state) => action.pipe(
    ofType(INIT_BOARD),
    mergeMap(() => of(
        startGame(),
        restartTimer()
    ))
);