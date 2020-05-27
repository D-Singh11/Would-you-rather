import React, { Component } from 'react'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <span class="card-title">All questions</span>
                    </div>
                    <div className="card-tabs">
                        <ul className="tabs tabs-fixed-width grey lighten-4">
                            <li className="tab"><a href="#unanswered">Unanswered</a></li>
                            <li className="tab"><a className="active" href="#answered">Answered</a></li>
                        </ul>
                    </div>
                    <div className="card-content">
                        <div id="unanswered">Test 1</div>
                        <div id="answered">Test 2</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
