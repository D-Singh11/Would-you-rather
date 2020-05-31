import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Question extends Component {

    /**
    * @description Renders the Poll component to DOM 
    */
    render() {
        const { author, optionOne, id } = this.props;
        return (
            <div className="col s12 m7">
                <div className="card horizontal card-panel hoverable">
                    <div className="card-image">
                        <img src={this.props.avatarURL} alt='avatar of user' />
                        <span className='card-title'>{author}</span>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content center">
                            <h3 className=" blue-grey-text">Would you rather?</h3>
                            <span className=' '>{optionOne.text}  <br /> OR ..</span>
                        </div>
                        <Link to={`/questions/${id}`} className='white-text'>
                            <div className='card-action amber lighten-2'>
                                <p className='center '>
                                    <b>{this.props.type === 'unanswered' ? 'Poll' : 'See details'}</b>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
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
@param {string} authedUser
@param {object} props
@returns {object} question details
*/
function mapStateToProps({ users, questions, authedUser }, props) {
    const question = questions[props.id];
    const author = questions[props.id].author;
    const avatarURL = users[author].avatarURL;

    return {
        ...question,
        author,
        avatarURL
    };
}

/**
* @description connect() used to connect Question Component to store and request
state from it.
@param {function} mapStateToProps
@param {Component} Question
@returns {Component} ConnectedComponent
*/
export default connect(mapStateToProps)(Question);
