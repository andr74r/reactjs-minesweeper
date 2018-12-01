import React from 'react';
import PropTypes from 'prop-types';

import { BoardRow } from './BoardRow';

export class GameBoard extends React.Component {
    render() {
        let cells = this.props.boardStore;

        return <div>
            <table>
                {cells.map((row, i) => <BoardRow key={`row${i}`} boardRow={row}/>)}
            </table>
        </div>
    }
}

GameBoard.propTypes = {
    boardStore: PropTypes.array
};