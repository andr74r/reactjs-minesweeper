import React from 'react';
import { Link } from 'react-router-dom';

export class YouWonMessage extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            name: ''
        };

        this.onNameChanged = this.onNameChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onNameChanged(e) {
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e) {
        this.props.addScore({
            name: this.state.name || 'unknown',
            score: this.props.seconds
        })
        e.preventDefault();
    }

    render() {
        return <div>
            <div>You have won! <Link to = '/topscores'>List of records.</Link></div>
            <form onSubmit={this.onSubmit}>
                Enter your name: <input type='text' value={this.state.name} onChange={this.onNameChanged}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    }
}