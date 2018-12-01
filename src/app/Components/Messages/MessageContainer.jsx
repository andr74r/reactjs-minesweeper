import React from 'react';
import PropTypes from 'prop-types';

import { YouLostMessage } from './YouLostMessage';
import { YouWonMessage } from './YouWonMessage';

export class MessageContainer extends React.Component {
    render() {
        return <div>
            { this.props.isGameFinished
                ? this.props.isWin
                    ? <YouWonMessage/>
                    : <YouLostMessage/>
                : null }
        </div>
    }
}

MessageContainer.propTypes = {
    isGameFinished: PropTypes.bool,
    isWin: PropTypes.bool
};