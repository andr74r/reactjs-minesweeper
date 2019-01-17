import React from 'react';
import { connect } from 'react-redux';

import { GameBoard } from './GameBoard/GameBoard';
import { GameMenu } from './GameMenu/GameMenu';
import { MessageContainer } from './Messages/MessageContainer';

import { initBoard, openCell, updateFlagState } from '../Actions/BoardActions/BoardActions';
import { incrementSeconds } from '../Actions/TimerActions/TimerActions';
import { addScore } from '../Actions/TopScoresActions/TopScoresAcions';

class Game extends React.Component {
    constructor(props)
    {
        super(props);

        this.interval = setInterval(props.incrementTimer, 1000);
    }

    componentWillUnmount() {
        if (!!this.interval)
            clearInterval(this.interval);
    }


    render() {
        console.log(this.props);
        return <div>
            <GameMenu 
                onPlayClick={this.props.onPlayClick}
                board={this.props.boardStore}
                timer={this.props.timerStore} />
            <MessageContainer 
                seconds={this.props.timerStore.seconds}
                addScore={this.props.addScore}
                messageType={this.props.messageType}
                 />
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
        messageType: state.messageStore,
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
        },
        addScore: (score) => {
            dispatch(addScore(score));
        }
    }
}

export const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)