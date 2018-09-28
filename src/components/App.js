import React, { Component } from 'react';
import '../styles/App.css';

import Header from '../components/Header';
import TextEditor from '../components/TextEditor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 页面语言，默认英语
      pageLang: {
        lang: 'en',
        enSelected: 'selected',
        chSelected: ''
      },
      editorContent: ''
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

  changeEditorContent = content => {
    this.setState({
      editorContent: content
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          pageLang={this.state.pageLang}
          changePageLang={this.changePageLang}
        />
        <TextEditor
          editorContent={this.state.editorContent}
          changeEditorContent={this.changeEditorContent}
        />
      </div>
    );
  }
}

export default App;
