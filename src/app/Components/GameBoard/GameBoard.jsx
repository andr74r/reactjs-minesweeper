import React from 'react';
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