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
        <div className="App container">
          <h1>Would you rather</h1>
          <Dashboard />
        </div>
      </div>
    );
  }
}

export default connect()(App);
