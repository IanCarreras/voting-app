import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import './index.css'

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
    const { auth } = this.props
    return (
      <div className="navbar">
        <h1 className="app-title">Vote</h1>
        {auth.isLoggedIn && <button className="add-pin-button"> + </button>}

        {auth.isLoggedIn
        ?
          <button className="log-button" onClick={this.handleLogout}>Logout</button>
        :
          <button className="log-button" onClick={this.handleLogin}>
            <SocialIcon network="twitter" style={{ height: 25, width: 25 }} /> Login
          </button>
        }
      </div>
    );
  }
}

export default NavBar;
