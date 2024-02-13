//!!START SILENT
import { useState, useEffect } from 'react';
//!!END
//!!ADD
// import React from 'react';
//!!END_ADD

//!!START SILENT
export function ClockToggle ({ toggleClock }) {
//!!END
//!!ADD
// export class ClockToggle extends React.Component {
  // render () {
//!!END_ADD
    return (
      <button 
        type="button"
        className="clock-toggle" 
        //!!START SILENT
        onClick={toggleClock}
        //!!END
        //!!ADD
        // onClick={this.props.toggleClock}
        //!!END_ADD
      >
        Toggle Clock
      </button>
    )
  //!!ADD
  // }
  //!!END_ADD
} 

//!!START SILENT
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return (() => {
      console.log("Clearing Clock interval!"); 
      clearInterval(interval);
    });
  }, [])

  const tick = () => {
    setTime(new Date());
  }
//!!END
//!!ADD
// class Clock extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // time: new Date(),
    // };
  // }
  //
  // componentDidMount() {
    // this.interval = setInterval(this.tick, 1000);
  // }
  //
  // componentWillUnmount() {
    // console.log("Clearing Clock interval!")
    // clearInterval(this.interval);
  // }
  //
  // tick = () => {
    // this.setState({ time: new Date() });
  // }
//!!END_ADD

    //!!START SILENT
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    //!!END
  //!!ADD
  // render() {
    // let hours = this.state.time.getHours();
    // let minutes = this.state.time.getMinutes();
    // let seconds = this.state.time.getSeconds();
  //!!END_ADD
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    //!!START SILENT
    const timezone = time
    //!!END
    //!!ADD
    // const timezone = this.state.time
    //!!END_ADD
      .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
      .replace(/[^A-Z]/g, "") // Strip out all but capitals
      .slice(3); // Eliminate initial GMT

    return (
      <section className="clock-section">
        <h1>Clock</h1>
        <div className='clock'>
          <p className="time">
            <span>
              Time:
            </span>
            <span>
              {`${hours}:${minutes}:${seconds} ${timezone}`}
            </span>
          </p>
          <p className="date">
            <span>
              Date: 
            </span>
            <span>
              {/*!!START SILENT */}
              {time.toDateString()}
              {/*!!END */}
              {/*!!ADD */}
              {/* {this.state.time.toDateString()} */}
              {/*!!END_ADD */}
            </span>
          </p>
        </div>
      </section>
    );
  //!!ADD
  // }
  //!!END_ADD
}

export default Clock;
