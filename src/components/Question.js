import React, { Component } from 'react'

class Question extends Component {
    render() {
        return (
            <div className='question'>
                <li className="collection-item">
                    <div className="col s12 m7">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src="https://lorempixel.com/100/190/nature/6" alt='avatar of user' />
                                <span className='card-title'>fname lastname</span>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                <h5 className="header">Would you rather</h5>
                                    <span>Would you rather be a good person or not?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}

export default Question
