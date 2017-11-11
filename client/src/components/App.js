import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Mission from './Mission';
import Projects from './Projects';
import Partner from './Partner';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mission />
        <Projects />
        <Partner />
        <Footer />
      </div>
    );
  }
}

export default App;
