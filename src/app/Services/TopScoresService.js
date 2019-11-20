import { gameModes } from '../Consts/GameModes';

export class TopScoresService { 
    addScore(score) {
        let scores = getTopScores();
        scores[0].records.push(score);
        
        return scores;
    }

    getTopScores() {
        return this._getTopScores();
    }

    /**
     * PRIVATE
     */

    _getTopScores() {
        return [
            {
                mode: gameModes.beginner,
                records: [
                    {
                        name: 'andrey',
                        score: 10
                    },
                    {
                        name: 'olya',
                        score: 8
                    }
                ]
            }
        ];
    }
}