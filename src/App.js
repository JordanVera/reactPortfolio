import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../src/css/default.css';
import '../src/css/layout.css';
import '../src/css/magnific-popup.css';
import '../src/css/media-queries.css'
import Header from '../src/components/header/header';
import About from '../src/components/about/about';
import Portfolio from '../src/components/portfolio/portfolio';
import ContactUs from '../src/components/contactus/contactus';
import Resume from '../src/components/resume/resume';
import Footer from '../src/components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;
