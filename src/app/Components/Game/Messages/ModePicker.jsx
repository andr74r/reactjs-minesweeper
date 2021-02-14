import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import { gameModes } from '../../../Consts/GameModes';

export class ModePicker extends React.Component {
    render() {
        return <React.Fragment>
            <Modal.Header closeButton>
                <Modal.Title>Please Select the Game Mode</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
                <table>
                    <tr>
                        <th>Game</th>
                        <th>Height</th>
                        <th>Width</th>
                        <th>Mines</th>
                    </tr>
                    {this.renderGameMode('Begginer', gameModes.beginner)}
                    {this.renderGameMode('Intermediate', gameModes.intermediate)}
                    {this.renderGameMode('Expert', gameModes.expert)}
                </table>
            </Modal.Body>
        </React.Fragment>
    }

    renderGameMode(name, settings) {
        return <tr>
            <td>{name}</td>
            <td>{settings.height}</td>
            <td>{settings.width}</td>
            <td>{settings.mines}</td>
            <td><Button onClick={e => this.props.setBoard(settings)}>Select</Button></td>
        </tr>
    }
}

ModePicker.propTypes = {
    closeMessage: PropTypes.func,
    setBoard: PropTypes.func
};