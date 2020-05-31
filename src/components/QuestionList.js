import React, { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux';


class QuestionList extends Component {

    /**
    * @description Renders the Poll component to DOM 
    */
    render() {
        console.log(this.props);
        return (
            <ul className="collection" key={this.props.type}>
                {this.props.qIds.map(id => {
                    return (
                        <li className="collection-item" key={id}>
                            < Question id={id} type={this.props.type} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

/**
* @description This function is used to specify what state is needed in the component from
redux store. It is then passed as parameter to connect function. It is executed
in the the body of connect() provided by 'react-redux' library.
@param {Object} users
@param {Object} questions
@param {string} authedUser
@param {object} props
@returns {array} qIds
*/
function mapPropsToState({ users, questions, authedUser }, props) {
    const user = users[authedUser];
    const answers = Object.keys(user.answers);

    const qIds = props.type === 'answered'
        ? answers.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        : Object.keys(questions).filter(qId => !answers.includes(qId));


    return {
        qIds
    };
}

/**
* @description connect() used to connect QuestionList Component to store and request
state from it.
@param {function} mapStateToProps
@param {Component} QuestionList
@returns {Component} ConnectedComponent
*/
export default connect(mapPropsToState)(QuestionList);
