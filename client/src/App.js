import React, { Component } from 'react';

import NavPage from './components/NavPage.js';

 
class App extends Component {
  render() {
    return (
      <NavPage>
        {this.props.children}
      </NavPage>
    );
  }
}

export default App;
