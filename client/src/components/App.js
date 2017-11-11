import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Mission from './Mission';
import Projects from './Projects';
import PartnerHeading from './PartnerHeading';
import Partner from './Partner';
import ContactForm from './ContactForm';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mission />
        <Projects />
        <PartnerHeading />
        <Partner />
        <ContactForm />
        <Footer />
      </div>
    );
  }
}

export default App;
