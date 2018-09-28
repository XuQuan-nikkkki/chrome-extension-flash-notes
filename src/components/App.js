import React, { Component } from 'react';
import '../styles/App.css';

import Header from '../components/Header';
import TextEditor from '../components/TextEditor';
import Sidebar from '../components/Sidebar';

import PropTypes from 'prop-types';
import SpeechRecognition from 'react-speech-recognition';

const propTypes = {
  browserSupportsSpeechRecognition: PropTypes.bool,
  listening: PropTypes.bool,
  transcript: PropTypes.string,
  recognition: PropTypes.object,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func
};

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

  setDictationLang = event => {
    this.props.recognition.lang = event.target.value;
  };

  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition,
      listening,
      startListening,
      stopListening,
      recognition,
      finalTranscript
    } = this.props;
    this.props.recognition.lang = 'cmn-Hans-CN';

    if (!browserSupportsSpeechRecognition) {
      this.setState({
        editorContent: "This browser doesn't support speech recognition"
      });
    }
    console.log(this.state.editorContent);
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
            transcript={this.props.transcript}
            resetTranscript={this.props.resetTranscript}
            finalTranscript={this.props.finalTranscript}
          />
          <Sidebar
            content={this.state.editorContent}
            pageLang={this.state.pageLang.lang}
            transcript={this.props.transcript}
            resetTranscript={this.props.resetTranscript}
            startListening={this.props.startListening}
            stopListening={this.props.stopListening}
            setDictationLang={this.setDictationLang}
            listening={this.props.listening}
            editorContent={this.state.editorContent}
            changeEditorContent={this.changeEditorContent}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;
const options = {
  autoStart: false
};

export default SpeechRecognition(options)(App);
