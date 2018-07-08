import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import Navbar from './components/navbar'
import PollList from './components/container'
import Poll from './components/poll'
import CreatePoll from './components/create-poll'

class App extends Component {

  componentWillMount(){
    const { actions } = this.props
    actions.getPolls()
  }

  render() {
    const { actions, auth } = this.props
    return (
      <div className="App">
        <Navbar auth={auth} actions={actions}/>
        <header className="App-header">FCC Voter app</header>
        {this.props.createPoll && <CreatePoll actions={this.props.actions} auth={auth} />}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={PollList} />
            <Route path="/:id" component={Poll}  />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ polls, auth, createPoll }) => {
  return { polls, auth, createPoll }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
