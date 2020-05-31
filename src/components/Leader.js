import React from 'react'

const Leader = ({ leader }) => {
    let stars = [];

    for (let i = 0; i < leader.answers + leader.questions; i++) {
        stars.push(<i className="material-icons amber" key={i}>stars</i>)
    }

    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card  card-panel hoverable center">
                        <div className="card-image">
                            <img src={leader.avatarURL} alt="leader avatar" />
                            <p className="flow-text">{leader.name}</p>
                            {stars}
                        </div>
                        <div className="card-content">
                            <p>Questions posted : {leader.questions}</p>
                            <p>Answered : {leader.answers}</p>
                            <p>Score : {leader.answers + leader.questions}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leader;
