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
                if (!cell.isMine) {
                    let indicesOfAdjacentCells = getIndicesOfAdjacentCells(cell.position.x, cell.position.y, width, height);
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
            minesCount: minesCount,
            isLocked: false,
            hasFlag: false
        };

        return board;
    },
    openCell: (position, board) => {
        let cell = board.cells[position.x][position.y];
        cell.isOpened = true;

        return {...board};
    },
    changeLockState: (value, board) => {
        board.isLocked = value;

        return {...board};
    },
    openNearZero: (position, board) => {
        openNearZeroUsingBFS(position, board);

        return {...board};
    },
    updateFlagState: (position, board) => {
        let cell = board.cells[position.x][position.y];

        cell.hasFlag = !cell.hasFlag;

        return {...board};
    }
}


const checkIfCellExists = (i, j, maxWidth, maxHeight) => {
    return i >= 0 && j >= 0 && i < maxWidth && j < maxHeight;
}

const addCellIfExists = (i, j, cellsIndexes, maxWidth, maxHeight) => {
    if (checkIfCellExists(i, j, maxWidth, maxHeight)){
        cellsIndexes.push({
            i: i,
            j: j
        });
    }
}

const getIndicesOfAdjacentCells = (i, j, maxWidth, maxHeight) => {
    let adjacentCells = [];

    addCellIfExists(i + 1, j + 1, adjacentCells, maxWidth, maxHeight);
    addCellIfExists(i + 1, j, adjacentCells, maxWidth, maxHeight);
    addCellIfExists(i, j + 1, adjacentCells, maxWidth, maxHeight);
    addCellIfExists(i - 1, j - 1, adjacentCells, maxWidth, maxHeight);
    addCellIfExists(i - 1, j, adjacentCells, maxWidth, maxHeight);
    addCellIfExists(i, j - 1, adjacentCells, maxWidth, maxHeight);
    addCellIfExists(i + 1, j - 1, adjacentCells, maxWidth, maxHeight);
    addCellIfExists(i - 1, j + 1, adjacentCells, maxWidth, maxHeight);

    return adjacentCells;
}

const openNearZeroUsingBFS = (position, board) => {

    let indicesOfAdjacentCells = getIndicesOfAdjacentCells(position.x, position.y, board.width, board.height);
    let cells = board.cells;

    let notOpenedAdjacentCells = indicesOfAdjacentCells
        .map(ind => cells[ind.i][ind.j])
        .filter(cell => !cell.isOpened);
    
    let notOpenedAdjacentCellsWithZero = notOpenedAdjacentCells
        .filter(cell => cell.value == 0);

    notOpenedAdjacentCells.forEach(cell => {
        cell.isOpened = true
    })

    notOpenedAdjacentCellsWithZero.forEach(cell => 
        openNearZeroUsingBFS(cell.position, board));
}