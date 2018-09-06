import React, { Component } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App
