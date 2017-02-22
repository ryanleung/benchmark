import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class NavBar extends Component {

  handleTitleTap = () => {
  };

  handleLoginTap = () => {
  };

  render() {
    return (
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
    )
  }
}

export default NavBar;