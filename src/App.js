import React from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import { Route, Switch } from 'react-router-dom';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import Poll from './components/Poll';
import PollDetail from './components/PollDetail';
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import LoadingBar from 'react-redux-loading';
import { setAuthedUserAction } from './actions/authedUser';

class App extends React.Component {

  /**
* @description Lidecycle hook called when DOM is rendered
* It is used to dispatch() a thubked action handleInitialData() which reterieve initiak data
* from API and save it to redux store
*/
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }


  /**
* @description This event handler is invoked when users clicks on the Logout button
* It is used to sign out current user. It dispatches an action to store to set the current logged in user to null
*/
  handleLogOut = () => {
    this.props.dispatch(setAuthedUserAction(null));
  };

  render() {
    return (
      <div>
        <LoadingBar style={{ backgroundColor: "yellow", height: "5px" }} />
        {
          this.props.authedUser === null
            ? <Login />
            :
            <div>
              <NavBar handleLogOut={this.handleLogOut} />
              <div className="App container">
                <h1>Would you rather</h1>
                <div className="chip">
                  <img src={this.props.avatarURL} alt="authed user" />
                  <span>Logged in as : {this.props.authedUser}</span>
                </div>


                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/add" component={NewQuestion} />
                  <Route path="/leaderboard" component={LeaderBoard} />
                  <Route path="/questions/:question_id" component={Poll} />
                  <Route path="/detail/:id" component={PollDetail} />
                  <Route component={PageNotFound} />
                </Switch>
              </div>
            </div>
        }
      </div>
    );
  }
}

/**
* @description This function is used to specify what state is needed in the component from
redux store. It is then passed as parameter to connect function. It is executed
in the the body of connect() provided by 'react-redux' library.
@param {Object} state
@returns {object} User details
*/
function mapStateToProps(state) {
  return {
    authedUser: state.authedUser,                                   // if autheduser is null that means data from API has not been assigned to store yet.
    avatarURL: state.authedUser ? state.users[state.authedUser].avatarURL : null
  };
}


/**
* @description connect() used to connect Poll Component to store and request
state from it.
@param {function} mapStateToProps
@param {Component} App
@returns {Component} ConnectedComponent
*/
export default connect(mapStateToProps)(App);
