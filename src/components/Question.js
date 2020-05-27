import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class Question extends Component {
    render() {
        console.log('Question', this.props);
        const { author, optionOne, id } = this.props;
        return (
            <div className="col s12 m7">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="https://lorempixel.com/100/190/nature/6" alt='avatar of user' />
                        <span className='card-title'>{author}</span>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <h5 className="header">Would you rather?</h5>
                            <span>{optionOne.text}</span>
                        </div>
                        <Link to={`/question/${id}`} className='white-text'>
                            <div className='card-action amber lighten-2'>
                                <p className='center '>
                                    <b>Poll</b>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, props) {
    const author = users[authedUser].name;
    const question = questions[props.id];

    return {
        ...question,
        author
    }
}

export default connect(mapStateToProps)(Question);
