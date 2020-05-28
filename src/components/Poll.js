import React, { Component } from 'react';
import { connect } from 'react-redux';


class Poll extends Component {

    state = {
        text: ''
    }


    handleSubmit=(event)=>{
        event.preventDefault();

        // todo: Save ansers to db, dispatch action
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
        console.log(event.target.value);
    }

    render() {
        console.log('Question', this.props);
        const { author, optionOne, id, optionTwo } = this.props;
        return (
            <div className="card">
                <div className="card-content center">
                    <div className='center'>
                        <img src="https://lorempixel.com/100/190/nature/6" alt='avatar of user' className='circle' />
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
    const author = users[authedUser].name;
    const question = questions[props.match.params.id];

    return {
        ...question,
        author
    }
}

export default connect(mapStateToProps)(Poll);