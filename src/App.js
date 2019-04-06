import React, { Component } from 'react';
import Meetups from './meetups/meetups'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Meetups />
      </div>
    );
  }
}

export default App;
