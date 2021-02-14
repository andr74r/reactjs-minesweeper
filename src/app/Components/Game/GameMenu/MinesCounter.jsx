import React from 'react';
import PropTypes from 'prop-types';

export class MinesCounter extends React.Component {
    render() {
        let board = this.props.board;
        let flagsCount = board.cells
            .map(row => row.filter(c => c.hasFlag).length)
            .reduce((a, b) => a + b, 0);

        return <div className="menu__minesCounter">
            {board.minesCount - flagsCount}
        </div>
    }
}


MinesCounter.propTypes = {
    board: PropTypes.object
};