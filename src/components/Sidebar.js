import React from 'react';
import '../styles/Sidebar.css';

import SidebarInfo from './SidebarInfo';
import SidebarSharing from './SidebarSharing';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sidebar">
        <SidebarInfo
          content={this.props.content}
          pageLang={this.props.pageLang}
        />
        <SidebarSharing pageLang={this.props.pageLang} />
      </div>
    );
  }
}

export default Sidebar;
