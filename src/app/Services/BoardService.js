import { getRandomInt } from '../Utils/RandomUtils';

export const boardService = {
    initBoard: (size) => {
        let cells = [];
        let minesCount = size.minesCount;
        let height = size.height;
        let width = size.width;
    
        // init empty board
        for (var i = 0; i < width; i++) {
            cells.push([]);
            for (var j = 0; j < height; j++) {
                cells[i].push({
                    value: 0,
                    isOpened: false,
                    isMine: false,
                    position: {
                        x: i,
                        y: j
                    }
                })
            }
        }

        // set mines
        let currentMinesCount = 0;
        while(currentMinesCount < minesCount){
            let i = getRandomInt(0, width);
            let j = getRandomInt(0, height);

            let cell = cells[i][j];
            if (!cell.isMine) {
                currentMinesCount++;
                cell.isMine = true;
                cell.value = -1;
            }
        }

        //change values
        cells.forEach(row => 
            row.forEach(cell => {
                let checkIfCellExists = (i, j) => {
                    return i >= 0 && j >= 0 && i < width && j < height;
                }

                let addCellIfExists = (i, j, cellsIndexes) => {
                    if (checkIfCellExists(i, j)){
                        cellsIndexes.push({
                            i: i,
                            j: j
                        });
                    }
                }

                let getIndicesOfAdjacentCells = (i, j) => {
                    let adjacentCells = [];

                    addCellIfExists(i + 1, j + 1, adjacentCells);
                    addCellIfExists(i + 1, j, adjacentCells);
                    addCellIfExists(i, j + 1, adjacentCells);
                    addCellIfExists(i - 1, j - 1, adjacentCells);
                    addCellIfExists(i - 1, j, adjacentCells);
                    addCellIfExists(i, j - 1, adjacentCells);
                    addCellIfExists(i + 1, j - 1, adjacentCells);
                    addCellIfExists(i - 1, j + 1, adjacentCells);

                    return adjacentCells;
                }

                if (!cell.isMine) {
                    let indicesOfAdjacentCells = getIndicesOfAdjacentCells(cell.position.x, cell.position.y);
                    let value = indicesOfAdjacentCells
                        .map(ind => cells[ind.i][ind.j])
                        .filter(cell => cell.isMine)
                        .length;
                    cell.value = value;
                }
            }))

        // create board object
        let board = {
            cells: cells,
            height: height,
            width: width,
            minesCount: minesCount
        };

        return board;
    }
}