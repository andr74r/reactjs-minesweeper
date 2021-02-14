import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export class YouLostMessage extends React.Component {
    render() {
        return <React.Fragment>
            <Modal.Header closeButton>
                <Modal.Title>You have Lost :(</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <p>You can start new game</p>
            </Modal.Body>
        
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.startGame}>
                    Start New Game
                </Button>
                <Button variant="primary" onClick={this.props.closeMessage}>
                    Close
                </Button>
            </Modal.Footer>
        </React.Fragment>
    }
}

YouLostMessage.propTypes = {
    closeMessage: PropTypes.func,
    startGame: PropTypes.func
};