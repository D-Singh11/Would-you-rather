import React, { Component } from 'react'

class PollDetail extends Component {
    render() {
        const { question } = this.props;
        const optioneOneVotes = question.optionOne.votes.length;
        const optioneTwoVotes = question.optionTwo.votes.length;
        const totalVotes = optioneOneVotes + optioneTwoVotes;
        const myAnswer = this.props.selected === 'optionTwo' ? 'red' : 'green'

        return (
            <div className='row'>
                <h4>Poll Deatils</h4>
                <h5 className="header">Would you rather?</h5>
                <div className='col s6'>
                    <div className='card z-depth-5'>
                        <span className={`btn-floating waves-effect waves-light red ${this.props.selected === 'optionOne' ? 'green' : 'red'}`}>
                            {this.props.selected === 'optionOne' ? 'You' : 'Other'}
                    </span>
                        <p className='flow-text'>{question.optionOne.text}</p>
                        <p>votes : {optioneOneVotes} out of {totalVotes}</p>
                        <span>{Math.ceil(optioneOneVotes * (100 / totalVotes))} % people voted for this option</span>

                    </div>
                </div>

                <div className='col s6'>
                    <div className='card z-depth-5'>
                        <span className={`btn-floating waves-effect waves-light red ${this.props.selected === 'optionTwo' ? 'green' : 'red'}`}>
                        {this.props.selected === 'optionTwo' ? 'You' : 'Other'}
                            </span>
                        <p className='flow-text'>{question.optionTwo.text}</p>
                        <p>votes : {optioneTwoVotes} out of {totalVotes}</p>
                        <span>{Math.floor(optioneTwoVotes * (100 / totalVotes))} % people voted for this option</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollDetail
