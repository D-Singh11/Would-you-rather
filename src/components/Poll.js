import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSaveAnswer } from '../actions/questions';


class Poll extends Component {

    state = {
        text: this.props.selected
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.text && this.props.id) {

            this.props.dispatch(handleSaveAnswer(this.props.id, this.state.text));
        }

        this.props.history.push('/');
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
        console.log(event.target.value);
    }

    render() {
        console.log('Question', this.props);
        const { author, optionOne, id } = this.props;
        return (
            <div className="card">
                <div className="card-content center">
                    <div className='center'>
                        <img src={this.props.avatarURL} alt='avatar of user' className='circle' />
                        <p className='card-title'>{author} asks</p>
                    </div>
                    <h5 className="header">Would you rather?</h5>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <label>
                                <input className="with-gap"
                                    name="group1"
                                    type="radio"
                                    value='optionOne'
                                    checked={this.state.text === 'optionOne'}
                                    onChange={this.handleChange}
                                />
                                <span className='text-black'>{optionOne.text}</span>
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
                                <span>{this.props.optionTwo.text}</span>
                            </label>
                        </p>
                        <button className='btn-large amber lighten-2'>
                            Submit
                        </button>
                    </form>
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
    let author = questions[props.match.params.id].author;
    const avatarURL = users[author].avatarURL;
    const question = questions[props.match.params.id];
    author = users[author].name;
    const selected = users[authedUser].answers[props.match.params.id];

    return {
        ...question,
        author,
        selected,
        avatarURL
    }
}

export default connect(mapStateToProps)(Poll);