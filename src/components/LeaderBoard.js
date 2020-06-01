import React, { Component } from 'react';
import { connect } from 'react-redux';
import Leader from './Leader';

class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <h3>LeaderBoard</h3>
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


/**
* @description This function is used to specify what state is needed in the component from
redux store. It is then passed as parameter to connect function. It is executed
in the the body of connect() provided by 'react-redux' library.
@param {Object} state
@returns {array} leaders
*/
function mapStaeToProps(state) {
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
        };
    });
    return {
        leaders: leaders.sort((a, b) => b.total - a.total)
    };
}

/**
* @description connect() used to connect Poll Component to store and request
state from it.
@param {function} mapStateToProps
@param {Component} LeaderBoard
@returns {Component} ConnectedComponent
*/
export default connect(mapStaeToProps)(LeaderBoard);
