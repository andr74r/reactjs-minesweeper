import { filter, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import { OPEN_CELL } from '../Actions/BoardActions/BoardActionTypes';
import { blockBoard } from '../Actions/BoardActions/BoardActions';

export const openCellEpic = (action, state) => action.pipe(
    ofType(OPEN_CELL),
    filter(action => {
        let position = action.position;
        let cell = state.value.boardStore.cells[position.x][position.y];
        return cell.isMine;
    }),
    mapTo(blockBoard())
);