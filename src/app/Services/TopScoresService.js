import { gameModes } from '../Consts/GameModes';

export const topScoresService = { 
    addScore: (score) => {
        let scores = getTopScores();
        scores[0].records.push(score);
        
        return scores;
    },

    getTopScores: () => {
        return getTopScores();
    }
}

const getTopScores = () => {
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