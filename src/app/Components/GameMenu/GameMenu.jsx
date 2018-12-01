import React from 'react';
import PropTypes from 'prop-types';

export class GameMenu extends React.Component {
    render() {
        return <div>
            <button onClick={e => this.props.onPlayClick()}>
                Play game
            </button>
        </div>
    }
}

GameMenu.propTypes = {
    onPlayClick: PropTypes.func
};