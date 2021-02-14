import React from 'react';
import PropTypes from 'prop-types';

import FaceSmileIcon from '../../../Icons/face_smile.svg';
import FaceLoseIcon from '../../../Icons/face_lose.svg';
import FaceGaspIcon from '../../../Icons/face_gasp.svg';

import './styles.css';

export class Smile extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const face = FaceSmileIcon;

        return <React.Fragment>
            <button 
                style={
                    { 
                        backgroundImage: `url(${face})`
                    }
                }
                className="menu__smile"
                onClick={e => this.props.onPlayClick()}/>
        </React.Fragment>
    }
}

Smile.propTypes = {
    onPlayClick: PropTypes.func
};