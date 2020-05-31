import React from 'react'

const Leader = ({ leader }) => {
    let stars = []
    for (let i = 0; i < leader.answers + leader.questions; i++) {
        stars.push(<i className="material-icons amber" key={i}>stars</i>)
    }
    return (
        <div>
            <div className='row'>
                <div className='col s6 offset-s3'>
                    <div className="card card-panel hoverable center">
                        <div className="card-image">
                            <img src={leader.avatarURL} alt="leader avatar" />
                            <span className="flow-text">{leader.name}</span>
                        </div>
                        <div className='card-content'>
                            <p className=''>Questions posted : {leader.questions}</p>
                            <p className=''>Answered : {leader.answers}</p>
                            <p className=''>Score : {leader.answers + leader.questions}</p>
                            {stars}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leader
