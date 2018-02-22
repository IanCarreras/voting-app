import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <h1 className="app-title">Vote</h1>
        <button className="add-pin-button"> + </button>
        <button className="log-button">Logout</button>
        <button className="log-button">
          <SocialIcon network="twitter" style={{ height: 25, width: 25 }} /> Login
        </button>
      </div>
    );
  }
}

export default NavBar;
