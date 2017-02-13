import React, {Component} from 'react';
import NavBar from './NavBar.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class AddBenchmarkPage extends Component {
  render() {
    return (
      <div className="AddBenchmarkPage">
        <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
          <NavBar />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default AddBenchmarkPage;