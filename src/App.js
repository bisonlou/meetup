import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Meetups from './meetups/meetups'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/meetups" component={Meetups} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
