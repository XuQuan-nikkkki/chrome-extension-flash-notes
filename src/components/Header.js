import React from 'react';
import '../styles/Header.css';

import logo from '../img/logo-512.png';

class Header extends React.Component {
  render() {
    const title =
      this.props.pageLang.lang === 'en' ? 'Flash Notes' : '闪念笔记';
    const style = this.props.pageLang.lang === 'en' ? {} : { marginTop: 10 };
    const imgStyle = { height: 65, marginTop: 7 };
    return (
      <div className="header">
        <div className="title">
          <img src={logo} style={imgStyle} className="App-logo" alt="logo" />
          <h1 style={style}>{title}</h1>
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
