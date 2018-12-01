import React from 'react';
import { connect } from 'react-redux';

import { GameBoard } from './GameBoard/GameBoard';
import { GameMenu } from './GameMenu/GameMenu';

import { initBoard, openCell } from '../Actions/BoardActions/BoardActions';

class Game extends React.Component {
    render() {
        console.log(this.props);
        return <div>
            <GameMenu onPlayClick={this.props.onPlayClick} />
            <GameBoard 
                onOpenCell={this.props.onOpenCell}
                boardStore={this.props.boardStore} />
        </div>
    }
}


const mapStateToProps = state => {
    return {
        boardStore: state.boardStore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayClick: () => {
            dispatch(initBoard(5, 6, 10))
        },
        onOpenCell: (position) => {
            dispatch(openCell(position));
        }
    }
}

export const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)