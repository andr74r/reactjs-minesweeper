import React from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { GameBoard } from './GameBoard/GameBoard';
import { GameMenu } from './GameMenu/GameMenu';
import { MessageContainer } from './Messages/MessageContainer';

import { initBoard, openCell, updateFlagState } from '../Actions/BoardActions/BoardActions';
import { incrementSeconds } from '../Actions/TimerActions/TimerActions';
import { addScore } from '../Actions/TopScoresActions/TopScoresAcions';
import { changeMessageType } from '../Actions/MessageActions/MessageActions';

import { messageTypes } from '../Consts/MessageTypes';

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
        
        return <React.Fragment>
            <MessageContainer 
                messageType={this.props.messageType}
                closeMessage={this.props.closeMessage}
                startGame={this.props.onPlayClick}
            />
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <GameMenu 
                            onPlayClick={this.props.onPlayClick}
                            board={this.props.boardStore}
                            timer={this.props.timerStore} />
                    </Col>
                </Row>
                
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <GameBoard 
                            onOpenCell={this.props.onOpenCell}
                            boardStore={this.props.boardStore}
                            onUpdateFlagState={this.props.onUpdateFlagState} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
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
        closeMessage: () => {
            dispatch(changeMessageType(messageTypes.none))
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