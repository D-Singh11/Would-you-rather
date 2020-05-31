import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'


class Question extends Component {
    render() {
        const { author, optionOne, id } = this.props;    
        return (
            <div className="col s12 m7">
                <div className="card horizontal">
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
                            <div className='card-action red lighten-2'>
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

function mapStateToProps({ users, questions, authedUser }, props) {
    const question = questions[props.id];
    const author = questions[props.id].author;
    const avatarURL = users[author].avatarURL;

    return {
        ...question,
        author,
        avatarURL
    }
}

export default connect(mapStateToProps)(Question);
