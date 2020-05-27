import React, { Component } from 'react';
import Question from './Question';
import { connect } from 'react-redux';

class QuestionList extends Component {
    render() {
        console.log(this.props);
        return (
            <ul className='collection' key={this.props.type}>
                {this.props.qIds.map(id => {
                    return (
                        <li className="collection-item" key={id}>
                            < Question id={id} />
                        </li>
                    )
                })}
            </ul>
        )
    }
}

function mapPropsToState({ users, questions, authedUser }, props) {
    const user = users[authedUser];
    const answers = Object.keys(user.answers);

    const qIds = props.type === 'answered'
        ? answers.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
        : Object.keys(questions).filter(qId => !answers.includes(qId));


    return {
        qIds
    }
}

export default connect(mapPropsToState)(QuestionList);