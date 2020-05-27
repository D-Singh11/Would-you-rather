import React from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import NavBar from './components'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Would you rather</h1>
      </div>
    );
  }
}

export default connect()(App);
