import React, { Component } from 'react'

import './App.css'
import Navbar from './components/navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">Voter</header>
      </div>
    )
  }
}

export default App
