import React, {Component} from 'react';

import {Card, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar.js';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import AppMuiTheme from './AppMuiTheme.js';
import './SignInPage.css';


class SignInPage extends Component {

  handleSignIn = () => {

  };

  handleSignUp = () => {

  };

  render() {
    return (
      <MuiThemeProvider muiTheme={AppMuiTheme}>
        <div>
          <NavBar />
          <div className="SignInForms">
            <Card>
              <CardText>
                <h1>Sign in to Kimono Metrics</h1>
                <TextField
                  hintText="Email Address"
                  fullWidth={true} /><br />
                <TextField
                  hintText="Password"
                  fullWidth={true} /><br />
                <RaisedButton
                  label="Sign In"
                  primary={true}
                  onTouchTap={this.handleSignIn}
                />
              </CardText>
            </Card>
            <Card>
              <CardText>
                <h1>Don't have an account? Sign up!</h1>
                <TextField
                  hintText="Create Account With Email"
                  fullWidth={true} /><br />
                <TextField
                  hintText="Password"
                  fullWidth={true} /><br />
                <RaisedButton
                  label="Create Account"
                  primary={true}
                  onTouchTap={this.handleSignUp}
                />
              </CardText>
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    )
 }
}

export default SignInPage;