import React from 'react';
import '../styles/SidebarSharing.css';

class SidebarSharing extends React.Component {
  render() {
    return (
      <div className="sidebar-sharing">
        {this.props.pageLang === 'en' && <h4>Save to</h4>}
        {this.props.pageLang === 'ch' && <h4>保存到：</h4>}
        <div className="icons">
          <ul>
            <li>
              <button>保存文件</button>
            </li>
            <li>
              <button>保存到google drive</button>
            </li>
            <li>
              <button>保存到dropbox</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SidebarSharing;
