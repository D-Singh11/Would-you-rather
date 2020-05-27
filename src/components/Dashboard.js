import React, { Component } from 'react';
import QuestionList from './QuestionList';

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
                            <h2>Unanswered questions</h2>
                            <QuestionList />
                        </div>
                        <div id="answered">
                            <h2>Answered questions</h2>
                            <QuestionList />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
