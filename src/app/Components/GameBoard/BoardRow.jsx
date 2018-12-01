import React from 'react';
import PropTypes from 'prop-types';

import { BoardCell } from './BoardCell';

export class BoardRow extends React.Component {
    render() {
        let boardRow = this.props.boardRow;

        return <tr>
            {boardRow.map(c => 
                <BoardCell 
                    key={`cell${c.position.x}${c.position.y}`}
                    cell={c}
                    isBoardLocked={this.props.isBoardLocked}
                    onOpenCell={this.props.onOpenCell}
                    onUpdateFlagState={this.props.onUpdateFlagState}/>)}
        </tr>
    }
}

BoardRow.propTypes = {
    boardRow: PropTypes.array,
    onOpenCell: PropTypes.func,
    isBoardLocked: PropTypes.bool,
    onUpdateFlagState: PropTypes.func
};