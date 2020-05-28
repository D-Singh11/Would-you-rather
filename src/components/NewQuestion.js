import React, { Component } from 'react';
import { handleAddQuestion } from '../actions/questions';
import { connect } from 'react-redux';

class NewQuestion extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.optionOne.value.trim() && this.optionTwo.value.trim()) {
            this.props.dispatch(handleAddQuestion({
                optionOneText: this.optionOne.value.trim(),
                optionTwoText: this.optionTwo.value.trim(),
                author: this.props.authedUser
            }));
            this.props.history.push('/');
            // todo: above push to route doesnot update homepage data even though store was update
            // deal with it later and remove the temporary fix of calling componentDidMount in QuestionsList()
        }
        alert("Provide both options to save new question");
    }

    render() {
        return (
            <div className='newQuestion'>
                <h1>Add new question</h1>
                <form onSubmit={this.handleSubmit} className='center'>
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

export default connect((state => {
    return {
        authedUser: state.authedUser
    }
}))(NewQuestion);
