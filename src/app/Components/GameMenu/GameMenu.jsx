import React from 'react';
import PropTypes from 'prop-types';

import { MinesCounter } from './MinesCounter';
import { Timer } from './Timer';

export class GameMenu extends React.Component {
    render() {
        return <div>
            <button onClick={e => this.props.onPlayClick()}>
                Play game
            </button>
            {!!this.props.board.cells 
                ? <MinesCounter board={this.props.board}/>
                : null }
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