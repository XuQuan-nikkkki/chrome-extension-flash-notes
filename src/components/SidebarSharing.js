import React from 'react';
import '../styles/SidebarSharing.css';

import { Helmet } from 'react-helmet';
let FileSaver = require('file-saver');

class SidebarSharing extends React.Component {
  saveFile = () => {
    let file = new File([this.props.content], 'Flash Notes file.html', {
      type: 'text/plain;charset=utf-8'
    });
    FileSaver.saveAs(file);
  };

  render() {
    const shareText =
      this.props.pageLang === 'en' ? 'Save to computer' : '保存文件';
    return (
      <div className="sidebar-sharing">
        {this.props.pageLang === 'en' && <h4>Save to</h4>}
        {this.props.pageLang === 'ch' && <h4>保存到：</h4>}
        <div className="save">
          <button onClick={this.saveFile}>{shareText}</button>
        </div>
      </div>
    );
  }
}

export default SidebarSharing;
