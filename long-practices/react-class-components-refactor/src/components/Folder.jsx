//!!START SILENT
import { useState } from 'react';
//!!END
//!!ADD
// import React from 'react';
//!!END_ADD

const Headers = ({ titles, currentTab, selectTab }) => {
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }

  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';

    return (
      <li
        key={idx}
        id={idx}
        onClick={handleClick}
        className={headerClass}
      >
        {title}
      </li>
    );
  });
  
  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );
}

//!!START SILENT
function Folder({ folders }) {
    const [currentTab, setCurrentTab] = useState(0);
    const folder = folders[currentTab];
    const titles = folders.map((folder) => folder.title);
//!!END
//!!ADD
// class Folder extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // currentTab: 0
    // };
  // }
  // 
  // selectTab = (num) => {
    // this.setState({ currentTab: num });
  // }
  // 
  // render() {
    // const folder = this.props.folders[this.state.currentTab];
    // const titles = this.props.folders.map((folder) => folder.title);
//!!END_ADD
    
    return (
      <section className="tabs-section">
        <h1>Tabs</h1>
        <div className='tabs'>
          <Headers
            titles={titles}
            //!!START SILENT
            currentTab={currentTab}
            selectTab={setCurrentTab}
            //!!END
            //!!ADD
            // currentTab={this.state.currentTab}
            // selectTab={this.selectTab}
            //!!END_ADD
          />
          <div className='tab-content'>
            {folder.content}
          </div>
        </div>
      </section>
    );
  //!!ADD
  // }
  //!!END_ADD
}

export default Folder;
