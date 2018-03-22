import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'

import './App.css'
import Navbar from './components/navbar'
import Container from './components/container'

class App extends Component {

  componentWillMount(){
    const { actions } = this.props
    actions.getPolls()
  }

  render() {
    const { actions, auth, polls } = this.props
    return (
      <div className="App">
        <Navbar auth={auth} actions={actions}/>
        <header className="App-header">FCC Voter app</header>
        <Container polls={polls}/>
      </div>
    )
  }
}

const mapStateToProps = ({ polls, auth }) => {
  return { polls, auth }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
