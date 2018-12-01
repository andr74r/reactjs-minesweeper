import React from 'react';
import { BoardCell } from './BoardCell';

export class BoardRow extends React.Component {
    render() {
        let boardRow = this.props.boardRow;

        return <tr>
            {boardRow.map(c => <BoardCell key={`cell${c.position.x}${c.position.y}`} cell={c}/>)}
        </tr>
    }
}