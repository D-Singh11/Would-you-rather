import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';


class Poll extends Component {

    state = {
        text: this.props.selected,
        details: this.props.selected
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.text && this.props.question.id) {

            this.props.dispatch(handleSaveAnswer(this.props.question.id, this.state.text));
            this.setState({
                details: false
            });
        }

        // this.props.history.push('/');
        // todo: above push to route doesnot update homepage data even though store was update
        // deal with it later and remove the temporary fix of calling componentDidMount in QuestionsList()
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
        console.log(event.target.value);
    }

    render() {
        console.log(this.props);
        const { authedUser, question } = this.props;
        const optioneOneVotes = question.optionOne.votes.length;
        const optioneTwoVotes = question.optionTwo.votes.length;
        const totalVotes = optioneOneVotes + optioneTwoVotes;
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
                                        checked={this.state.text === 'optionOne'}
                                        onChange={this.handleChange}
                                    />
                                    <span className='text-black'>{question.optionOne.text}</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input className="with-gap"
                                        name="group1"
                                        type="radio"
                                        value='optionTwo'
                                        checked={this.state.text === 'optionTwo'}
                                        onChange={this.handleChange}
                                    />
                                    <span>{question.optionTwo.text}</span>
                                </label>
                            </p>
                            <button className='btn-large amber lighten-2'>
                                Submit
                            </button>
                        </form>
                    ) : (
                            <div>

                                <h4>Poll Deatils</h4>
                                <h5 className="header">Would you rather?</h5>

                                <div className='card' className={this.props.selected === 'optionOne' ? 'red' : ''}>
                                    <p>{question.optionOne.text}</p>
                                    <p>{optioneOneVotes} out of {totalVotes}</p>
                                    <span>{Math.ceil(optioneTwoVotes * (100/totalVotes))} % votes</span>
                                </div>

                                <div className='card' className={this.props.selected === 'optionTwo' ? 'red' : ''}>
                                    <p>{question.optionTwo.text}</p>
                                    <p>{optioneTwoVotes} out of {totalVotes}</p>
                                    <span>{Math.floor(optioneOneVotes * (100/totalVotes))} % votes</span>
                                </div>
                            </div>
                        )
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

function mapStateToProps({ users, questions, authedUser }, props) {
    const question = questions[props.match.params.id];
    const avatarURL = users[question.author].avatarURL;
    const authorName = users[question.author].name;
    const selected = users[authedUser].answers[props.match.params.id];

    return {
        authedUser,
        selected,
        question: {
            ...question,
            authorName,
            avatarURL

        },
    }
}

export default connect(mapStateToProps)(Poll);