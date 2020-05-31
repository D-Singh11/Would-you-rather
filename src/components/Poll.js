import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';
import PollDetail from './PollDetail';


class Poll extends Component {

    state = {
        text: this.props.selected,
        details: this.props.selected
    };

    /**
    * @description It is used to save answer of an unanswered question to the backend 
    * and into the redux store. It reads the user selection from the form and
    * calls dispatch() of redux store which uses thunked action creator
    * handleSaveAnswer() to update state of store and backend database.
    * @param {event} event
    * @returns {array} books
    */
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.text && this.props.question.id) {

            this.props.dispatch(handleSaveAnswer(this.props.question.id, this.state.text));
            this.setState({
                details: false
            });
        }
    };

    /**
     * @description Updates the local state of the component by
     * getting of the user' radio button selection
     * Sets the text property of Controlled Component's state object
     * @param {object} book
     * @param {string} shelf 
     */
    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
        console.log(event.target.value);
    };

    /**
    * @description Renders the Poll component to DOM 
    */
    render() {
        console.log(this.props);
        const { question } = this.props;

        return (
            <div className="card">
                <div className="card-content center">
                    <div className='center'>
                        <img src={question.avatarURL} alt='avatar of user' className='circle' />
                        <p className='card-title'>{question.authorName} asks</p>
                    </div>

                    {this.state.details === undefined ? (
                        <form onSubmit={this.handleSubmit}>
                            <h5 className="header">Would you rather?</h5>
                            <p>
                                <label>
                                    <input className="with-gap"
                                        name="group1"
                                        type="radio"
                                        value='optionOne'
                                        onChange={this.handleChange}
                                    />
                                    <span>{question.optionOne.text}</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap"
                                        name="group1"
                                        type="radio"
                                        value='optionTwo'
                                        onChange={this.handleChange}
                                    />
                                    <span>{question.optionTwo.text}</span>
                                </label>
                            </p>
                            <button className='btn-large amber lighten-2'>
                                Submit
                            </button>
                        </form>
                    )
                        : <PollDetail question={question} selected={this.state.text} />
                    }

                </div>
                {/* <Link to={`/detail/${id}`} className='white-text'>
                    <div className='card-action amber lighten-2'>
                        <p className='center '>
                            <b>View Detail</b>
                        </p>
                    </div>
                </Link> */}
            </div>
        )
    }
}

/**
* @description This function is used to specify what state is needed in the component from
redux store. It is then passed as parameter to connect function. It is executed
in the the body of connect() provided by 'react-redux' library.
@param {Object} users
@param {Object} questions
@returns {object} question details
*/
function mapStateToProps({ users, questions, authedUser }, props) {
    const question = questions[props.match.params.question_id];
    const avatarURL = users[question.author].avatarURL;
    const authorName = users[question.author].name;
    const selected = users[authedUser].answers[props.match.params.question_id];

    return {
        authedUser,
        selected,
        question: {
            ...question,
            authorName,
            avatarURL

        },
    };
}

/**
* @description connect() used to connect Poll Component to store and request
state from it.
@param {function} mapStateToProps
@param {Component} Poll
@returns {Component} ConnectedComponent
*/
export default connect(mapStateToProps)(Poll);