import React, { Component } from 'react';
import Question from './Question';

class QuestionList extends Component {
    render() {
        return (
            <ul>
                <Question/>
                <Question/>
                <Question/>
            </ul>
        )
    }
}

export default QuestionList;
