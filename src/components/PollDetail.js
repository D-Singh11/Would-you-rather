import React, { Component } from 'react'

class PollDetail extends Component {
    render() {
        const { question } = this.props;
        const optioneOneVotes = question.optionOne.votes.length;
        const optioneTwoVotes = question.optionTwo.votes.length;
        const totalVotes = optioneOneVotes + optioneTwoVotes;
        
        return (
            <div>
                <h4>Poll Deatils</h4>
                <h5 className="header">Would you rather?</h5>
                <div className='card'>
                    {/* <a className="btn-floating halfway-fab waves-effect waves-light red">Your answer</a> */}
                    <p className={this.props.selected === 'optionOne' ? 'red' : ''}>{question.optionOne.text}</p>
                    <p>{optioneOneVotes} out of {totalVotes}</p>
                    <span>{Math.ceil(optioneTwoVotes * (100 / totalVotes))} % votes</span>
                </div>

                <div className='card'>

                    <p className={this.props.selected === 'optionTwo' ? 'red' : ''}>{question.optionTwo.text}</p>
                    <p>{optioneTwoVotes} out of {totalVotes}</p>
                    <span>{Math.floor(optioneOneVotes * (100 / totalVotes))} % votes</span>
                </div>
            </div>
        )
    }
}

export default PollDetail
