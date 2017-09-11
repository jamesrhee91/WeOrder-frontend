import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RestaurantAdapter from './adapters/RestaurantAdapter'
import SearchFormContainer from './components/SearchFormContainer'
import Navbar from './components/Navbar'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchFormContainer />
      </div>
    );
  }
}

export default App;
