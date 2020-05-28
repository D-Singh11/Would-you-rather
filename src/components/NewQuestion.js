import React, { Component } from 'react'

class NewQuestion extends Component {
    render() {
        return (
            <div className='newQuestion'>
                <h1>Add new question</h1>
                <form action="" className='center'>
                    <label htmlFor="optionOne">Option one</label>
                    <input type="text" />

                    <label htmlFor="optionTwo">Option two</label>
                    <input type="text" />
                    <button type="submit" className='btn-large amber center'>
                        Save
                        </button>
                </form>
            </div>
        )
    }
}

export default NewQuestion
