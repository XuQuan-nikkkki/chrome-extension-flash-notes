import React from 'react';
import '../styles/SidebarInfo.css';
import microphoneIcon from '../img/microphone-icon.png';

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

  render() {
    const pageText =
      this.props.pageLang === 'en'
        ? this.state.pageText.en
        : this.state.pageText.ch;
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
            <select />
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
