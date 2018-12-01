import React from 'react';
import { connect } from 'react-redux';

import { GameBoard } from './GameBoard/GameBoard';
import { GameMenu } from './GameMenu/GameMenu';
import { MessageContainer } from './Messages/MessageContainer';

import { initBoard, openCell, updateFlagState } from '../Actions/BoardActions/BoardActions';

class Game extends React.Component {
    render() {
        console.log(this.props);
        return <div>
            <GameMenu onPlayClick={this.props.onPlayClick} />
            <MessageContainer 
                isGameFinished={this.props.gameStore.isGameFinished}
                isWin={this.props.gameStore.isWin} />
            <GameBoard 
                onOpenCell={this.props.onOpenCell}
                boardStore={this.props.boardStore}
                onUpdateFlagState={this.props.onUpdateFlagState} />
        </div>
    }
}


const mapStateToProps = state => {
    return {
        boardStore: state.boardStore,
        gameStore: state.gameStore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayClick: () => {
            dispatch(initBoard(5, 6, 5))
        },
        onOpenCell: (position) => {
            dispatch(openCell(position));
        },
        onUpdateFlagState: (position) => {
            dispatch(updateFlagState(position));
        }
    }
}

export const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)