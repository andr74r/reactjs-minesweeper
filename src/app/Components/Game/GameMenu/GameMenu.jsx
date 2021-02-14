import React from 'react';
import PropTypes from 'prop-types';

import { MinesCounter } from './MinesCounter';
import { Timer } from './Timer';
import { Smile } from './Smile';

import './styles.css';

export class GameMenu extends React.Component {
    render() {
        return <div className="menu">
            {!!this.props.board.cells 
                ? <MinesCounter board={this.props.board}/>
                : null }
            <Smile onPlayClick={this.props.onPlayClick}/>
            {!!this.props.board.cells
                ? <Timer timer={this.props.timer} />
                : null }
        </div>
    }
}

GameMenu.propTypes = {
    onPlayClick: PropTypes.func,
    board: PropTypes.object,
    timer: PropTypes.object
};