import React, { Component } from 'react'

class NewQuestion extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        if(this.optionOne.value.trim() && this.optionTwo.value.trim()){
            return alert("Dispatch add question action");
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

export default NewQuestion
