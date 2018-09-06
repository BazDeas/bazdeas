import React, { Component } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Projects />
      </div>
    );
  }
}

export default App
