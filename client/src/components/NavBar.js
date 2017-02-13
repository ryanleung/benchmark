import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';


class NavBar extends Component {
  render() {
    return (
      <AppBar 
        zDepth={0}
        title="Kimono Metrics"
        showMenuIconButton={false} />
        )
  }
}

export default NavBar;