import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AddBenchmarkPage from './components/AddBenchmarkPage.js';
 
// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <AddBenchmarkPage />
      </div>
    );
  }
}

export default App;
