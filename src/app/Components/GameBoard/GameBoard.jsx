import React from 'react';
import PropTypes from 'prop-types';

import { BoardRow } from './BoardRow';

export class GameBoard extends React.Component {
    render() {
        let cells = this.props.boardStore.cells;

        return <div>
            <table>
                <tbody>
                    {!!cells ? cells.map((row, i) => <BoardRow key={`row${i}`} boardRow={row}/>) : null}
                </tbody>
            </table>
        </div>
    }
}

GameBoard.propTypes = {
    boardStore: PropTypes.object
};