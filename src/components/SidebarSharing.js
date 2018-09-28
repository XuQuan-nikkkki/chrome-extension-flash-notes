import React from 'react';
import '../styles/SidebarSharing.css';

import { Helmet } from 'react-helmet';

class SidebarSharing extends React.Component {
  render() {
    return (
      <div className="sidebar-sharing">
        <Helmet>
          <script
            type="text/javascript"
            src="https://www.dropbox.com/static/api/2/dropins.js"
            id="dropboxjs"
            data-app-key="c8tv4v5y6e9k2zn"
          />
          <script src="https://apis.google.com/js/platform.js" async defer />
        </Helmet>
        {this.props.pageLang === 'en' && <h4>Save to</h4>}
        {this.props.pageLang === 'ch' && <h4>保存到：</h4>}
        <div className="icons">
          <ul>
            <li>
              <button>保存文件</button>
            </li>
            <li>
              <a
                href="https://dl.dropboxusercontent.com/s/deroi5nwm6u7gdf/advice.png"
                className="dropbox-saver"
              />
            </li>
            <li>
              <div
                className="g-savetodrive"
                data-src="//example.com/path/to/myfile.pdf"
                data-filename="My Statement.pdf"
                data-sitename="Flash Notes"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SidebarSharing;
