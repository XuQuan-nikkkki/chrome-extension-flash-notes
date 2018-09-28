import React, { Component } from 'react';
import '../styles/App.css';

import Header from '../components/Header';
import TextEditor from '../components/TextEditor';
import Sidebar from '../components/Sidebar';

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
          lang: 'en',
          enSelected: 'selected',
          chSelected: ''
        }
      });
    } else {
      this.setState({
        pageLang: {
          lang: 'ch',
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
        <div className="content">
          <TextEditor
            editorContent={this.state.editorContent}
            changeEditorContent={this.changeEditorContent}
          />
          <Sidebar
            content={this.state.editorContent}
            pageLang={this.state.pageLang.lang}
          />
        </div>
      </div>
    );
  }
}

export default App;
