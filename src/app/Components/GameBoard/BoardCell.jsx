import React from 'react';
import PropTypes from 'prop-types';

export class BoardCell extends React.Component {

    constructor(props){
        super(props);

        this.onLeftClick = this.onLeftClick.bind(this);
    }

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

    onClick(e, cell) {
        this.props.onOpenCell(cell.position);
    }
    
    onLeftClick(e) {
        let position = this.props.cell.position;
        
        this.props.onUpdateFlagState(position);
        
        e.preventDefault();
        return false;
    }

    getButtonText(cell) {
        if (!cell.isOpened)
            return cell.hasFlag ? 'F' : '';

        if (cell.isMine)
            return 'M';

        return cell.value != 0 ? cell.value : '';
    }

    render() {
        let cell = this.props.cell;
        return <td>
            <button 
                style={this.getButtonStyle(cell)} 
                onClick={(e) => this.onClick(e, cell)}
                onContextMenu={this.onLeftClick}
                disabled={this.props.isBoardLocked || cell.isOpened}>
                {this.getButtonText(cell)}
            </button>
        </td>
    }
}

BoardCell.propTypes = {
    cell: PropTypes.object,
    onOpenCell: PropTypes.func,
    isBoardLocked: PropTypes.bool,
    onUpdateFlagState: PropTypes.func
};