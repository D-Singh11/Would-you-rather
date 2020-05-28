import React from 'react'

const Leader = ({ leader }) => {
    return (
        <div>
            <div className='row blue-grey lighten-5'>
                <div className='col s6 offset-s3'>
                    <div className="card center">
                        <div className="card-image">
                            <img src={leader.avatarURL} alt="leader avatar" />
                            <span className="title">{leader.name}</span>
                        </div>
                        <div className='card-content'>
                            <p>Questions posted : {leader.questions}</p>
                            <p>Answered : {leader.answers}</p>
                            <span>Score : {leader.answers + leader.questions}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leader
