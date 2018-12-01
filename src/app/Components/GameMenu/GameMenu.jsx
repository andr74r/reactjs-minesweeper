import React from 'react';

export class GameMenu extends React.Component {
    render() {
        return <div>
            <button onClick={e => this.props.onPlayClick()}>
                Play game
            </button>
        </div>
    }
}