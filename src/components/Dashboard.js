import React, { Component } from 'react';
import QuestionList from './QuestionList';

class Dashboard extends Component {
    componentDidMount(){
        const elems = document.querySelectorAll('.tabs');
        window.M.Tabs.init(elems);  
    }
    
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">All questions</span>
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
                            <QuestionList type={'unanswered'} />
                        </div>
                        <div id="answered">
                            <h2>Answered questions</h2>
                            <QuestionList type={'answered'}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
