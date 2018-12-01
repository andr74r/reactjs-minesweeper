import React from 'react';
import PropTypes from 'prop-types';

export class BoardCell extends React.Component {
    render() {
        let cell = this.props.cell;
        return <td>
            <button 
                style={{height: 25, width: 25}} 
                onClick={() => this.props.onOpenCell(cell.position)}
                disabled={this.props.isBoardLocked || cell.isOpened}>
                {
                    cell.isOpened
                        ? !cell.isMine 
                            ? cell.value != 0 
                                ? cell.value
                                : ''
                            : 'm'
                        : '' }
            </button>
        </td>
    }
}

BoardCell.propTypes = {
    cell: PropTypes.object,
    onOpenCell: PropTypes.func,
    isBoardLocked: PropTypes.bool
};