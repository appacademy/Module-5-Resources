import React from "react";

export default class ClassComponents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      console.log("param in setter, state: ", state)
      return { count: state.count + 1 }
    }, () => {
      //!! similar to useEffect(() => {}, [pointer])
      // do some side effect
    });
  }

  // useEffect(() => {}, [])
  componentDidMount() {

  }

  // useEffect(() => {})
  componentDidUpdate(prevProps, prevState) {
    if(this.state.count !== prevState.count){

    }
  }

  // useEffect(() => { return () => {} }, [])
  componentWillUnmount() {
    
  }

  render() {
    return (
      <div>
        <h3>hi from a react class</h3>
        <h5>count: {this.state.count}</h5>
        <button onClick={this.handleClick}>inc count</button>
      </div>
    );
  }
}
