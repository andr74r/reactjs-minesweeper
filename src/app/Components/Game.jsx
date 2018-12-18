import React from 'react';
import { connect } from 'react-redux';

import { GameBoard } from './GameBoard/GameBoard';
import { GameMenu } from './GameMenu/GameMenu';
import { MessageContainer } from './Messages/MessageContainer';

import { initBoard, openCell, updateFlagState } from '../Actions/BoardActions/BoardActions';
import { incrementSeconds } from '../Actions/TImerActions/TimerActions'; 

class Game extends React.Component {
    constructor(props)
    {
        super(props);

        setInterval(props.incrementTimer, 1000);
    }


    render() {
        console.log(this.props);
        return <div>
            <GameMenu 
                onPlayClick={this.props.onPlayClick}
                board={this.props.boardStore}
                timer={this.props.timerStore} />
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
        gameStore: state.gameStore,
        timerStore: state.timerStore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onPlayClick: () => {
            dispatch(initBoard(5, 5, 4))
        },
        onOpenCell: (position) => {
            dispatch(openCell(position));
        },
        onUpdateFlagState: (position) => {
            dispatch(updateFlagState(position));
        },
        incrementTimer: () => {
            dispatch(incrementSeconds());
        }
    }
}

export const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)