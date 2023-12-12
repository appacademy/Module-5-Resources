import React from "react";

export default class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      someotherstate: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log("this: ", this);
    this.setState({ count: this.state.count + 1 });
  }

  handleClickFatArrow = () => {
    // console.log("this: ", this);
    this.setState(() => ({ count: this.state.count + 1 }), () => console.log("howdy!"));
  };

  componentDidMount() {
    console.log("running on mount only")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("args: ", arguments)

    if(prevState.count !== this.state.count) {
      // do the thing, but protected from overflows
    }

  }

  componentWillUnmount() {
    // run this on unmount of comp
  }

  render() {
    return (
      <div>
        <h1>hi from a class component!</h1>
        <span>count: {this.state.count}</span>
        <br />
        <br />
        <button onClick={this.handleClickFatArrow}>increment</button>
      </div>
    );
  }
}

// function testThis() {
//   arguments
//   console.log("this: ", this) // -> undefined
// }

// testThis.anotherProperty = 0;

// const slightlyDifferentFunction = () => {
//   arguments
//   console.log("this: ", this) // -> not undef
// }
