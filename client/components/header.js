import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a className="navbar-brand">Cre8-Memories</a>
        </div>
        <ul className="nav navbar-nav">
          <li><a>Sign up</a></li>
          <li><a>About</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
