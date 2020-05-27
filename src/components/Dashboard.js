import React, { Component } from 'react';
import Question from './Question';

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
                            <li className="tab"><a className="active" href="#unanswered">Unanswered</a></li>
                            <li className="tab"><a href="#answered">Answered</a></li>
                        </ul>
                    </div>
                    <div className="card-content">
                        <div id="unanswered">
                            <h2>Answered questions</h2>
                            <ul>
                                <Question />
                            </ul>
                        </div>
                        <div id="answered">
                            <h2>Unanswered questions</h2>
                            <ul>
                                <Question />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
