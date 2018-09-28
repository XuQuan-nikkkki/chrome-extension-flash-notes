import React, { Component } from 'react';
import '../styles/Header.css';

import logo from '../img/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="title">
          <img src={logo} height="80" className="App-logo" alt="logo" />
          <h1>Flash Notes</h1>
        </div>
        <div className="page-language">
          <div
            id="en"
            className={this.props.pageLang.enSelected}
            onClick={() => this.props.changePageLang('en')}
          >
            English
          </div>
          <div
            id="ch"
            className={this.props.pageLang.chSelected}
            onClick={() => this.props.changePageLang('ch')}
          >
            中文
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
