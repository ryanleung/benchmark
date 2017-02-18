import React, {Component} from 'react';

import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import NavPage from './NavPage.js';
import './SignInPage.css';


class SignInPage extends Component {

  handleSignIn = () => {

  };

  handleSignUp = () => {

  };

  render() {
    return (
      <NavPage>
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
      </NavPage>
    )
 }
}

export default SignInPage;