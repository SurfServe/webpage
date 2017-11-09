import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Mission from './Mission';
import Projects from './Projects';
import Partner from './Partner';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mission />
        <Projects />
        <Partner />
      </div>
    );
  }
}

export default App;
