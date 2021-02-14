import { getRandomInt } from '../Utils/RandomUtils';

export class BoardService {
    initBoard(size) {
        let cells = [];
        let minesCount = size.minesCount;
        let height = size.height;
        let width = size.width;
    
        // init empty board
        for (var i = 0; i < height; i++) {
            cells.push([]);
            for (var j = 0; j < width; j++) {
                cells[i].push({
                    value: 0,
                    isOpened: false,
                    isMine: false,
                    isLast: false,
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
            let i = getRandomInt(0, height);
            let j = getRandomInt(0, width);

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
                    let indicesOfAdjacentCells = this._getIndicesOfAdjacentCells(cell.position.x, cell.position.y, height, width);
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
            hasFlag: false,
            lastOpenedCell: null
        };

        return board;
    }

    openCell(position, board) {
        let cell = board.cells[position.x][position.y];
        cell.isOpened = true;

        // automatic opening of adjacent cells
        if (cell.value == 0) {
            this._openNearZeroUsingBFS(position, board);
        }

        cell.isLast = this._isLastCellOpened(board);

        board.lastOpenedCell = cell;

        return {...board};
    }

    changeLockState(value, board) {
        board.isLocked = value;

        return {...board};
    }

    updateFlagState(position, board) {
        let cell = board.cells[position.x][position.y];

        cell.hasFlag = !cell.hasFlag;

        return {...board};
    }

    /**
     * PRIVATE
     */

    _isLastCellOpened(board) {
        let areCellsOpened = true;
    
        board.cells.forEach(row => {
            row.forEach(cell => {
                if (!cell.isMine && !cell.isOpened){
                    areCellsOpened = false;
                }
            })
        });
    
        return areCellsOpened;
    }
    
    _cellExists(i, j, maxWidth, maxHeight) {
        return i >= 0 && j >= 0 && i < maxWidth && j < maxHeight;
    }
    
    _addCellIfExists(i, j, cellsIndexes, maxWidth, maxHeight) {
        if (this._cellExists(i, j, maxWidth, maxHeight)){
            cellsIndexes.push({
                i: i,
                j: j
            });
        }
    }
    
    _getIndicesOfAdjacentCells(i, j, maxHeight, maxWidth) {
        let adjacentCells = [];
    
        this._addCellIfExists(i + 1, j + 1, adjacentCells, maxHeight, maxWidth);
        this._addCellIfExists(i + 1, j, adjacentCells, maxHeight, maxWidth);
        this._addCellIfExists(i, j + 1, adjacentCells, maxHeight, maxWidth);
        this._addCellIfExists(i - 1, j - 1, adjacentCells, maxHeight, maxWidth);
        this._addCellIfExists(i - 1, j, adjacentCells, maxHeight, maxWidth);
        this._addCellIfExists(i, j - 1, adjacentCells, maxHeight, maxWidth);
        this._addCellIfExists(i + 1, j - 1, adjacentCells, maxHeight, maxWidth);
        this._addCellIfExists(i - 1, j + 1, adjacentCells, maxHeight, maxWidth);
    
        return adjacentCells;
    }
    
    _openNearZeroUsingBFS(position, board) {
    
        let indicesOfAdjacentCells = this._getIndicesOfAdjacentCells(position.x, position.y, board.height, board.width);
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
            this._openNearZeroUsingBFS(cell.position, board));
    }
}