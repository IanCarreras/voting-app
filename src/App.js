import React, { Component } from 'react'

import './App.css'
import Navbar from './components/navbar'
import Container from './components/container'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">FCC Voter app</header>
        <Container />
      </div>
    )
  }
}

export default App
