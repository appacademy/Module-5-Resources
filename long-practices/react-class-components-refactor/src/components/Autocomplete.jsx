//!!START SILENT
import { useState, useEffect, useRef } from 'react';
//!!END
//!!ADD
// import React from 'react';
//!!END_ADD
import { CSSTransition, TransitionGroup } from 'react-transition-group';

//!!START SILENT
function Autocomplete({ names }) {
  const [inputVal, setInputVal] = useState('');
  const [showList, setShowList] = useState(false);
  const inputRef = useRef(null);
//!!END
//!!ADD
// class Autocomplete extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
      // inputVal: '',
      // showList: false
    // };
    // this.inputRef = React.createRef();
  // }
//!!END_ADD

  //!!START SILENT
  useEffect (()=> {
    if (showList) 
      document.addEventListener('click', handleOutsideClick);
    // The clean-up function returned below makes this else-clause redundant
    // else {
    //   console.log("Removing Autocomplete listener on update!");
    //   document.removeEventListener('click', handleOutsideClick);
    // }
      
    return (() => {
      console.log("Cleaning up event listener from Autocomplete!");
      document.removeEventListener('click', handleOutsideClick)
    });
  }, [showList]);
  //!!END
  //!!ADD
  // componentDidUpdate() {
    // if (this.state.showList) {
      // document.addEventListener('click', this.handleOutsideClick);
    // } else {
      // console.log("Removing Autocomplete listener on update!");
      // document.removeEventListener('click', this.handleOutsideClick);
    // }
  // }

  // componentWillUnmount () {
    // console.log("Cleaning up event listener from Autocomplete!");
    // document.removeEventListener('click', this.handleOutsideClick);
  // }
  //!!END_ADD

  //!!START SILENT
  const handleInput = e => {
    setInputVal(e.target.value);
  //!!END
  //!!ADD
  // handleInput = (e) => {
    // this.setState({ inputVal: e.target.value });
  //!!END_ADD
  }

  //!!START SILENT
  const selectName = e => {
    e.stopPropagation();
    setInputVal(e.target.innerHTML);
    setShowList(false);
  //!!END
  //!!ADD
  // selectName = e => {
    // e.stopPropagation();
    // this.setState({ inputVal: e.target.innerHTML, showList: false });
  //!!END_ADD
  }

  //!!START SILENT
  const handleOutsideClick = () => {
    // Leave dropdown visible as long as input is focused
    if (document.activeElement === inputRef.current) return;
    else setShowList(false);
  //!!END
  //!!ADD
  // handleOutsideClick = () => {
    // // Leave dropdown visible as long as input is focused
    // if (document.activeElement === this.inputRef.current) return;
    // else this.setState({ showList: false });
  //!!END_ADD
  }

  //!!START SILENT
  const matches = () => {
  //!!END
  //!!ADD
  // matches = () => {
    // const { inputVal } = this.state;
    // const { names } = this.props;
  //!!END_ADD
    const inputLength = inputVal.length;
    const matches = [];

    if (inputLength === 0) return names;

    names.forEach(name => {
      const nameSegment = name.slice(0, inputLength);
      if (nameSegment.toLowerCase() === inputVal.toLowerCase()) {
        matches.push(name);
      }
    });

    if (matches.length === 0) matches.push('No matches');

    return matches;
  }

  //!!START SILENT
  const results = matches().map((result) => (
    <TransitionItem key={result} result={result} selectName={selectName} />
  ));
  //!!END
  //!!ADD
  // render() {
    // const results = this.matches().map((result) => {
      // const nodeRef = React.createRef();
      // return (
        // <CSSTransition
          // nodeRef={nodeRef}
          // key={result}
          // classNames="result"
          // timeout={{ enter: 500, exit: 300 }}
        // >
          // <li ref={nodeRef} className="nameLi" onClick={this.selectName}>
            // {result}
          // </li>
        // </CSSTransition>
      // )
    // });
//!!END_ADD 

    return (
      <section className="autocomplete-section">
        <h1>Autocomplete</h1>
        <div className="auto">
          <input
            placeholder="Search..."
            //!!START SILENT
            ref={inputRef}
            onChange={handleInput}
            value={inputVal}
            onFocus={() => setShowList(true)}
            //!!END
            //!!ADD
            // ref={this.inputRef}
            // onChange={this.handleInput}
            // value={this.state.inputVal}
            // onFocus={() => this.setState({ showList: true })}
            //!!END_ADD
          />
          {/*!!ADD */}
          {/* {this.state.showList && ( */}
          {/*!!END_ADD */}
          {/*!!START SILENT */}
          {showList && (
          //!!END
            <ul className="auto-dropdown">
              <TransitionGroup>
                {results}
              </TransitionGroup>
            </ul>
          )}
        </div>
      </section>
    );
  //!!ADD
  // }
  //!!END_ADD
}
//!!START SILENT

const TransitionItem = ({ result, selectName, ...props }) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames="result"
      timeout={{ enter: 500, exit: 300 }}
      {...props}
    >
      <li ref={nodeRef} className="nameLi" onClick={selectName}>{result}</li>
    </CSSTransition>
  );
}
//!!END

export default Autocomplete;
