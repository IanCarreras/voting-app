import React, { Component } from 'react'
import createHistory from "history/createBrowserHistory"
import './index.css'

const history = createHistory()

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin() {
    this.props.auth.login();
  }

  handleLogout() {
    this.props.auth.logout();
  }

  render() {
    const { auth, actions } = this.props
    return (
      <div className="navbar">
        <h1
          className="app-title"
          onClick={() => history.goBack()}
        >
          Home
        </h1>
        {auth.isLoggedIn && <button className="create-poll-button" onClick={actions.createPoll}>Create New Poll</button>}

        {auth.isLoggedIn
        ?
          <button className="log-button" onClick={this.handleLogout}>Logout</button>
        :
          <button className="log-button" onClick={this.handleLogin}>Login</button>
        }
      </div>
    );
  }
}

export default NavBar;
