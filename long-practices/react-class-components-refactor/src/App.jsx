//!!START SILENT
import { useState } from 'react';
//!!END
//!!ADD
// import React from 'react';
//!!END_ADD
import Clock, { ClockToggle } from './components/Clock';
import Folder from './components/Folder';
import Weather from './components/Weather';
import Autocomplete from './components/Autocomplete';

const names = [
  'Abba',
  'Barbara',
  'Barney',
  'Jeff',
  'Jenny',
  'Sally',
  'Sarah',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

//!!START SILENT
const App = () => {
  const [showClock, setShowClock] = useState(true);
  const toggleClock = () => setShowClock(!showClock);

//!!END
//!!ADD
// class App extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // showClock: true
    // };
  // }
  // 
  // toggleClock = () => this.setState({ showClock: !this.state.showClock });
  //
  // render () {
//!!END_ADD
    return (
      <div className="widgets">
        <Folder folders={folders} />
        <Weather />
        {/*!!START SILENT */}
        <ClockToggle toggleClock={toggleClock}/>
        {showClock && <Clock />}
        {/*!!END */}
        {/*!!ADD */}
        {/* <ClockToggle toggleClock={this.toggleClock} /> */}
        {/* {this.state.showClock && <Clock />} */}
        {/*!!END_ADD */}
        <Autocomplete names={names} />
      </div>
    );
  //!!ADD
  // }
  //!!END_ADD
}

export default App;

