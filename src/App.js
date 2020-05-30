import React from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import { Route, Redirect, Link } from 'react-router-dom';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Poll from './components/Poll';
import PollDetail from './components/PollDetail';
import Login from './components/Login';
import LoadingBar from 'react-redux-loading';
import { setAuthedUserAction } from './actions/authedUser';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  handleLogOut = () => {
    this.props.dispatch(setAuthedUserAction(null));
  }

  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: 'yellow', height: '5px' }} />
        {
          this.props.authedUser === null
            ? <Login />
            :
            <div>
              <NavBar />
              <div className="App container">
                <h1>Would you rather</h1>
                <div className="chip">
                  <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" alt="authed user"/>
                  <span>Logged in as :  Jane Doe</span>
                </div>
                <button className="chip right btn"
                  onClick={this.handleLogOut}>LogOut
                  <img src={this.props.avatarURL} alt=""/>
                </button>

                <Route exact path='/' component={Dashboard} />
                <Route path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/questions/:question_id' component={Poll} />
                <Route path='/detail/:id' component={PollDetail} />
              </div>
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,        // if autheduser is null that means data from API has not been assigned to store yet.
  }
}

export default connect(mapStateToProps)(App);
