import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import SignInPage from './SignInPage.js';

class NavBar extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };


  handleTitleTap = () => {
  };

  handleLoginTap = () => {
    this.handleOpen();
  };

  render() {
    return (
      <div>
        <AppBar 
          zDepth={0}
          title="Kimono Metrics"
          showMenuIconButton={false}
          onTitleTouchTap={this.handleTitleTap}
          iconElementRight={
            <FlatButton
            label="Sign In"
            onTouchTap={this.handleLoginTap} />
          }
        />
        <Dialog 
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <SignInPage />
        </Dialog>
      </div>
    )
  }
}

export default NavBar;