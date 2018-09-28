import React, { Component } from 'react';
import '../styles/App.css';

import Header from '../components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 页面语言，默认英语
      pageLang: {
        lang: 'en',
        enSelected: 'selected',
        chSelected: ''
      }
    };
  }
  changePageLang = lang => {
    if (lang === 'en') {
      this.setState({
        pageLang: {
          pageLang: 'en',
          enSelected: 'selected',
          chSelected: ''
        }
      });
    } else {
      this.setState({
        pageLang: {
          pageLang: 'ch',
          enSelected: '',
          chSelected: 'selected'
        }
      });
    }
  };
  render() {
    return (
      <div className="App">
        <Header
          pageLang={this.state.pageLang}
          changePageLang={this.changePageLang}
        />
      </div>
    );
  }
}

export default App;
