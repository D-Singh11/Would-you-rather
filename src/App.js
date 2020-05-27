import React from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <NavBar />
        {
          this.props.loading === true ? null :

            <div className="App container">
              <h1>Would you rather</h1>
              <Dashboard />
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
