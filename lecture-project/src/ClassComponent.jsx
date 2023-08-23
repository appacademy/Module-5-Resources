import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this)
  }

  //lifecycle methods
  componentDidUpdate(prevProps, prevState) {
    console.log([...arguments]);
    console.log(this.state);
  }

  componentDidMount() {
    console.log("mounting, this: ", this)
  }

  componentWillUnmount() {}

  handleClick() {
    console.log(this)
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>I'm a class!</h1>
        <h2>count: {this.state.count}</h2>
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}
