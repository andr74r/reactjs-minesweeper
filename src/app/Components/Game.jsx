import React from 'react';
import { connect } from 'react-redux';

import { GameBoard } from './GameBoard/GameBoard';
import { GameMenu } from './GameMenu/GameMenu';

import { initBoard } from '../Actions/BoardActions/BoardActions';

class Game extends React.Component {
    render() {
        console.log(this.props);
        return <div>
            <GameMenu onPlayClick={this.props.onPlayClick} />
            <GameBoard boardStore={this.props.boardStore} />
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
            dispatch(initBoard(4, 4))
        }
    }
}

export const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)