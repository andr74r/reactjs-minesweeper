import React from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

export class YouWonMessage extends React.Component {
    render() {
        return <React.Fragment>
            <Modal.Header closeButton>
                <Modal.Title>You have won!</Modal.Title>
            </Modal.Header>

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