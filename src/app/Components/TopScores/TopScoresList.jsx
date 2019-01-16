import React from 'react';
import PropTypes from 'prop-types';

import { TopScore } from './TopScore';

export class TopScoresList extends React.Component {
    render() {
        if (!!this.props.list)
            return <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    { this.props.list.records.map((x, ind) => <TopScore key={ind} topScore={x} />) }
                </tbody>
            </table>
        else
            return null;
    }
}

TopScoresList.propTypes = {
    list: PropTypes.object
};