import React from 'react';
import '../styles/SidebarInfo.css';

import microphoneIcon from '../img/microphone-icon.png';
import LanguageList from './languageList';

class SidebarInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      microphoneAcitve: false,
      microphoneClass: '',
      pageText: {
        en: {
          selectLang: 'Language: ',
          dictationTitle: 'Dictation is on...'
        },
        ch: {
          selectLang: '选择语言：',
          dictationTitle: '正在记录中...'
        }
      }
    };
  }

  toggleMicrophone = () => {
    if (!this.state.microphoneAcitve) {
      this.props.startListening();
      this.setState({
        microphoneAcitve: true,
        microphoneClass: 'animation'
      });
    } else {
      this.props.stopListening();
      this.setState({
        microphoneAcitve: false,
        microphoneClass: ''
      });
    }
  };

  selectDictationLang = event => {
    if (this.state.microphoneAcitve) {
      this.toggleMicrophone();
      this.props.setDictationLang(event);
      this.toggleMicrophone();
    } else {
      this.props.setDictationLang(event);
    }
  };

  render() {
    const pageText =
      this.props.pageLang === 'en'
        ? this.state.pageText.en
        : this.state.pageText.ch;

    const languageList = LanguageList.map(lang => (
      <option key={lang.languageCode} value={lang.languageCode}>
        {lang.language}
      </option>
    ));
    return (
      <div className="sidebarinfo">
        <div className="dictationLang">
          <div
            id="microphoneIcon"
            className={this.state.microphoneClass}
            onClick={this.toggleMicrophone}
          >
            <img src={microphoneIcon} />
          </div>
          <div className="lang-select">
            <p>{pageText.selectLang}</p>
            <select
              defaultValue="cmn-Hans-CN"
              onChange={this.selectDictationLang}
            >
              {languageList}
            </select>
          </div>
        </div>
        <div className="dicatationInfo">
          <div className="dictationOn">{pageText.dictationTitle}</div>
          <div className="dictationText" id="transcript">
            {this.props.transcript}
          </div>
        </div>
      </div>
    );
  }
}

export default SidebarInfo;
