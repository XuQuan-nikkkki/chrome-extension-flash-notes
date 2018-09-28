import React from 'react';
import '../styles/Sidebar.css';

import SidebarInfo from './SidebarInfo';
import SidebarSharing from './SidebarSharing';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarInfo
          content={this.props.content}
          pageLang={this.props.pageLang}
          transcript={this.props.transcript}
          startListening={this.props.startListening}
          stopListening={this.props.stopListening}
          resetTranscript={this.props.resetTranscript}
          setDictationLang={this.props.setDictationLang}
          listening={this.props.listening}
          editorContent={this.props.editorContent}
          changeEditorContent={this.props.changeEditorContent}
        />
        <SidebarSharing
          pageLang={this.props.pageLang}
          content={this.props.content}
        />
      </div>
    );
  }
}

export default Sidebar;
