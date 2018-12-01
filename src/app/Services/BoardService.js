export const boardService = {
    initBoard: (size) => {
        let cells = [];
        let minesCount = size.minesCount;
        let height = size.height;
        let width = size.width;
    
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

        let board = {
            cells: cells,
            height: size.height,
            width: size.width,
            minesCount: minesCount
        };

        return board;
    }
}