import React, { Component } from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';

class LeaderBoard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>LeaderBoard</h1>
                <ul className="collection">
                    {this.props.leaders.map(leader => {
                        return (
                            <li className="collection-item" key={leader.name}>
                                <Leader leader={leader} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default connect((state => {
    const userKeys = Object.keys(state.users);
    const leaders = userKeys.map(id => {
        const userQuesIds = state.users[id].questions;
        const userAnswers = Object.keys(state.users[id].answers);
        return {
            'questions': userQuesIds.length,
            'answers': userAnswers.length,
            'avatarURL': state.users[id].avatarURL,
            'name': state.users[id].name,
            'total': userAnswers.length + userQuesIds.length,
        }
    })
    return {
        leaders: leaders.sort((a, b) => b.total - a.total)
    }
}))(LeaderBoard);
