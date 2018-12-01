import React from 'react';
import PropTypes from 'prop-types';

import { BoardRow } from './BoardRow';

export class GameBoard extends React.Component {
    render() {
        let cells = this.props.boardStore;

        return <div>
            <table>
                <tbody>
                    {cells.map((row, i) => <BoardRow key={`row${i}`} boardRow={row}/>)}
                </tbody>
            </table>
        </div>
    }
}

GameBoard.propTypes = {
    boardStore: PropTypes.array
};