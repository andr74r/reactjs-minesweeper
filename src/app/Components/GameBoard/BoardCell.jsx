import React from 'react';
import PropTypes from 'prop-types';

export class BoardCell extends React.Component {
    render() {
        let cell = this.props.cell;
        return <td>
            {!cell.isMine ? cell.value : 'm'}
        </td>
    }
}

BoardCell.propTypes = {
    cell: PropTypes.object
};