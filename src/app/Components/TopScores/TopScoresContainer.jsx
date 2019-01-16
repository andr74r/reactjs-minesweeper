import React from 'react';
import PropTypes from 'prop-types';

import { TopScoresList } from './TopScoresList';

export class TopScoresContainer extends React.Component {
    render() {
        let lists = this.props.topScoresStore || [];
        return <div>
            { lists.map(l => <TopScoresList key = {l.mode} list={l}/> )}
        </div>
    }
}

TopScoresContainer.propTypes = {
    topScoresStore: PropTypes.array
};