import React from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import { Route } from 'react-router-dom';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Poll from './components/Poll';
import PollDetail from './components/PollDetail';
import Login from './components/Login';
import LoadingBar from 'react-redux-loading';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: 'yellow', height: '5px' }} />
        <NavBar />
        {
          this.props.loading === true ? null :

            <div className="App container">
              <h1>Would you rather</h1>
              <div className="chip">
                <img src="https://tylermcginnis.com/would-you-rather/sarah.jpg" alt="authed user"/>
                <span>Logged in as :  Jane Doe</span>
              </div>
              
              <Route exact path='/' component={Dashboard} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/questions/:id' component={Poll} />
              <Route path='/detail/:id' component={PollDetail} />
              <Route path='/login' component={Login} />
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.authedUser === null           // if autheduser is null that means data from API has not been assigned to store yet.
  }
}

export default connect(mapStateToProps)(App);
