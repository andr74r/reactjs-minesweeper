import React from 'react';
import PropTypes from 'prop-types';

import FlagIcon from '../../Icons/flag.ico';
import MineIcon from '../../Icons/mine.jpg'

export class BoardCell extends React.Component {

    constructor(props){
        super(props);

        this.onLeftClick = this.onLeftClick.bind(this);
    }

    getButtonStyle(cell){

        const color = cell.isOpened 
            ? !cell.isMine 
                ? '#90EE90'
                : '#FF5050'
            : '#20B2AA';

        return {
            height: 25, 
            width: 25, 
            backgroundSize: 15,
            backgroundColor: color,
            backgroundImage: `url(${this.getButtonImg(cell)})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }
    }

    getButtonText(cell) {
        if (!cell.isOpened || cell.isMine)
            return '';

        return cell.value != 0 ? cell.value : '';
    }

    getButtonImg(cell) {
        if (!cell.isOpened)
            return cell.hasFlag ? FlagIcon : '';

        if (cell.isMine)
            return MineIcon;

        return '';
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