import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <h1>LeaderBoard</h1>
            </div>
        )
    }
}

export default connect((state => {
    const userKeys = Object.keys(state.users);
    const leaders = {}
    userKeys.map(id => {
        const userQuesIds = state.users[id].questions;
        const userAnswers = Object.keys(state.users[id].answers);
        leaders[id] = {
            'questions': userQuesIds.length,
            'answers': userAnswers.length
        }
    })
    return {
        leaders
    }
}))(LeaderBoard);
