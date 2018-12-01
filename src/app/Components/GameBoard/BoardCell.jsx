import React from 'react';

export class BoardCell extends React.Component {
    render() {
        let cell = this.props.cell;
        return <td>
            {cell.value}
        </td>
    }
}