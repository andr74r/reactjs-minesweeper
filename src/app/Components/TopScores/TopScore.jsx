import React from 'react';
import PropTypes from 'prop-types';

export class TopScore extends React.Component {
    render() {
        return <tr>
            <td>{ this.props.topScore.name }</td> 
            <td>{ this.props.topScore.score }</td> 
        </tr>
    }
}

TopScore.propTypes = {
    topScore: PropTypes.object
};