import React, { Component } from 'react'
import { connect } from 'react-redux'

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

const mapStateToProps = ({ polls }) => {
  return { polls }
}

export default connect(mapStateToProps)(App)
