import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import AddBenchmarkPage from './components/AddBenchmarkPage.js';
import AppMuiTheme from './components/AppMuiTheme.js';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider muiTheme={AppMuiTheme}>
          <AddBenchmarkPage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
