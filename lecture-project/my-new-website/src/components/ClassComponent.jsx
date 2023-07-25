import React from "react";

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {  
    console.log("args, props>> ", [...arguments], this)
    console.log(process.env.myvar)
  }

  componentDidUpdate(prevProps, prevState) { // useEffect(() => {})
    console.log("DidUpdate, args>> ", [...arguments])

     if(prevProps.count !== this.state.count){
      //do the thing
     }

  }

  componentWillUnmount() { // useEffect(() => { return () => {} })
    console.warn("component is unmounting!!! run away!!!!")
  }

  handleClick(e) {
    this.setState({ count: this.state.count + 1 }, () => {
    })
  }

  render() {
    return (
      <div>
        <h1>count: {this.state.count}</h1>
        <button
          onClick={this.handleClick}
        >change count</button>
        <button
          onClick={() => {
            ++this.state.count
            // this.updater.enqueueForceUpdate(this, () => {
            //   console.log("invoked the updater")
            // })
          }}
        >mutate state</button>
        <h2>prop data: {this.props.data}</h2>
      </div>
    )
  };
}