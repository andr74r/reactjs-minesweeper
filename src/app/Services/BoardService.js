export const boardService = {
    initBoard: (size) => {
        let board = [];
    
        for (var i = 0; i < size.width; i++) {
            board.push([]);
            for (var j = 0; j < size.height; j++) {
                board[i].push({
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
        return board;
    }
}