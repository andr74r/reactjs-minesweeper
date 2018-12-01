import React from 'react';
import PropTypes from 'prop-types';

export class BoardCell extends React.Component {

    getButtonStyle(cell){
        return {
            height: 25, 
            width: 25, 
            backgroundColor: cell.isOpened 
                ? !cell.isMine 
                    ? '#90EE90'
                    : '#FF5050'
                : '#20B2AA'
        }
    }

    render() {
        let cell = this.props.cell;
        return <td>
            <button 
                style={this.getButtonStyle(cell)} 
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