
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import Saved from './saved.js';
import Search from './search.js';
import Helpers from './utils/helpers.js';


class Main extends Component {
  constructor(){
    super();

    this.state = {
      searchResults: [],
      savedList: []
    }
  }

  apiSearch = (subject, startDate, endDate) => {

    Helpers.queryApi(searchQuery, startDate, endDate)
      .then((res) =>{
        //Get API JSON structure
       });
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the NYT React Search</h2>
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default Main;
