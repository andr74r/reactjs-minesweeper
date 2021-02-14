import React from 'react';
import { connect } from 'react-redux';

import { TopScoresContainer } from './TopScoresContainer';

class TopScores extends React.Component {
    render() {
        return <div>
            <TopScoresContainer 
                topScoresStore = {this.props.topScoresStore}/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        topScoresStore: state.topScoresStore,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export const TopScoresView = connect(
    mapStateToProps,
    mapDispatchToProps
)(TopScores)