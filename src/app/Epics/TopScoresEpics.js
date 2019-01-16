import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ofType } from 'redux-observable';

import { ADD_SCORE } from '../Actions/TopScoresActions/TopScoresActionTypes';
import { setTopScores } from '../Actions/TopScoresActions/TopScoresAcions';
import { topScoresService } from '../Services/TopScoresService';

export const addScoreEpic = (action, state) => action.pipe(
    ofType(ADD_SCORE),
    mergeMap((action) => of(
        setTopScores(topScoresService.addScore(action.score))
    ))
)