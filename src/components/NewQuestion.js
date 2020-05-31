import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from 'react-redux';

class NewQuestion extends Component {

    /**
    * @description It is used to add a new question to the backend 
    * and into the redux store. It reads the user unputs from the form and
    * calls dispatch() of redux store which uses thunked action creator
    * handleAddQuestion() to update state of store and backend database.
    * This event handler also redirects user to home route using history object of route.
    * @param {event} event
    * @returns {array} books
    */

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.optionOne.value.trim() && this.optionTwo.value.trim()) {
            this.props.dispatch(handleAddQuestion({
                optionOneText: this.optionOne.value.trim(),
                optionTwoText: this.optionTwo.value.trim(),
                author: this.props.authedUser
            }));
            this.props.history.push('/');
        }
        else {
            alert("Provide both options to save new question");
        }
    }

    /**
    * @description Renders the NewQuestion component to DOM
    */
    render() {
        return (
            <div className='newQuestion row center'>
                <h3>Would you rather?</h3>
                <form onSubmit={this.handleSubmit} className=' col s6 offset-s3'>
                    <label htmlFor="optionOne">Option one</label>
                    <input type="text"
                        placeholder='add first option'
                        ref={(optionOne) => this.optionOne = optionOne}
                    />

                    <label htmlFor="optionTwo">Option two</label>
                    <input type="text"
                        placeholder='add second option '
                        ref={(optionTwo) => this.optionTwo = optionTwo}
                    />
                    <button type="submit" className='btn-large amber center'>
                        Save
                        </button>
                </form>
            </div>
        )
    }
}

/**
* @description connect() used to connect NewQuestionComponent to store and request
state from it.
@param {function} arrow function
@param {Component} NewQuestion
@returns {Component} ConnectedComponent
*/
export default connect((state => {
    return {
        authedUser: state.authedUser
    }
}))(NewQuestion);
