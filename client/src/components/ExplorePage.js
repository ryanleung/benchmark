import React, {Component} from 'react';

import NavPage from './NavPage.js';
import SearchBar from './SearchBar.js';

import './ExplorePage.css';


class ExplorePage extends Component {
  render() {
    return (
      <NavPage>
        <div className="ExplorePage">
          <h1>Explore Benchmarks</h1>
          <div>Understand sales and marketing performance drivers for top companies</div>
          <div className="ExplorePage__search">
            <SearchBar />
          </div>
        </div>
      </NavPage>
    )
  }
}

export default ExplorePage;