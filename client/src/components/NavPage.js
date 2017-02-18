import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppMuiTheme from './AppMuiTheme.js';
import NavBar from './NavBar.js';

class NavPage extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={AppMuiTheme}>
        <div>
          <NavBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default NavPage;