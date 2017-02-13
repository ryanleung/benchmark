import React, {Component} from 'react';
import NavBar from './NavBar.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AddBenchmarkMuiTheme from './AddBenchmarkMuiTheme.js';


class AddBenchmarkPage extends Component {
  render() {
    return (
      <div className="AddBenchmarkPage">
        <MuiThemeProvider muiTheme={AddBenchmarkMuiTheme}>
          <NavBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AddBenchmarkPage;