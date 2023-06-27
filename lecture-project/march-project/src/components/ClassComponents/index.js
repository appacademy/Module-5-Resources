import React, { useEffect } from "react";
export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(
      (prevState) => ({ count: this.state.count + 1 }),
      this.runAfterSliceUpdate
    );
  }

  runAfterSliceUpdate() {
    console.log("howdy folks!");
  }

  componentDidMount(){
    //useEffect(() => {}, [])
  }

  componentWillUnmount() {
    // useEffect(() => {
    //   return () => {}
    // }, [])    
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.count !== this.state.count){
      // do the thing
    }
    // useEffect(() => {}, [dependency])
    // useEffect(() => {})
  }


  render() {
    return (
      <>
        <h1>Yo i'm made from a class</h1>
        <h3>Count: {this.state.count}</h3>
        <button onClick={this.handleClick}>count!</button>
      </>
    );
  }
}

const obj = {
  method: () => {
    console.log("what is this: ", this);
  },

  method2: function () {
    console.log("what is this: ", this);
  },
};
