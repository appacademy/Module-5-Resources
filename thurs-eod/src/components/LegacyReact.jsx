import React from "react";

export default class LegacyReact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick(e) {
    this.setState((s) => {
      return { count: s.count + 1 };
    });
  }
  render() {
    return (
      <div>
        <h1>Rendering a class component</h1>
        <h3>count: {this.state.count}</h3>
        <button onClick={this.handleClick}>inc count</button>
      </div>
    );
  }
}
