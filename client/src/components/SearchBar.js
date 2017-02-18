import React, {Component} from 'react';

import {grey400} from 'material-ui/styles/colors';
import Paper from 'material-ui/Paper';
import SearchIcon from 'material-ui/svg-icons/action/search';
import TextField from 'material-ui/TextField';

import './SearchBar.css';


class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <Paper className="SearchBar__paper">
          <div className="SearchBar__search-field">
            <SearchIcon className="SearchBar__icon" color={grey400}/>
            <TextField
              hintText="Company name"
              underlineShow={false}
              fullWidth={true} /><br />
          </div>
        </Paper>
      </div>
    )
  }
}

export default SearchBar;