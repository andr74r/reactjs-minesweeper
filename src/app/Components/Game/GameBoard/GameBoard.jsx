import React from 'react';
import PropTypes from 'prop-types';

import { BoardRow } from './BoardRow';

import './style.css'

export class GameBoard extends React.Component {
    render() {
        let cells = this.props.boardStore.cells;
        let isBoardLocked = this.props.boardStore.isLocked;

        return <React.Fragment>
            <table className="board">
                <tbody>
                    {!!cells
                        ? cells.map((row, i) =>
                            <BoardRow
                                key={`row${i}`}
                                boardRow={row}
                                isBoardLocked={isBoardLocked}
                                onOpenCell={this.props.onOpenCell}
                                onUpdateFlagState={this.props.onUpdateFlagState} />)
                        : null}
                </tbody>
            </table>
        </React.Fragment>
    }
}

GameBoard.propTypes = {
    boardStore: PropTypes.object,
    onOpenCell: PropTypes.func,
    onUpdateFlagState: PropTypes.func
};