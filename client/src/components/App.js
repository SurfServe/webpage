import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Mission from './Mission';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mission />
      </div>
    );
  }
}

export default App;
