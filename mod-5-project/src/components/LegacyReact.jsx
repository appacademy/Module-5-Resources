import React from "react"

export default class LegacyReact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("this value: ", this)
    this.setState({ count: this.state.count + 1 })
  }
  
  handleClick2 = () => {
    this.setState({ count: this.state.count + 1 })
  }

  componentDidMount() {  // useEffect(() => {}, [])
    console.log("component did mount")
  }

  componentWillUnmount() { // useEffect(() => { return () => {}}, [])
    console.log("component is unmounting")
  }

  componentDidUpdate(prevProps, prevState) { // useEffect(() => {})
    console.log(prevProps, prevState)
    if(prevState.count !== this.state.count){
      console.log("component did update")
    }
  }

  render() {
    return (
      <div>
        <h1>hi from a class component!</h1>
        <h3>count: {this.state.count}</h3>
        <button onClick={this.handleClick2}>increment count</button>
      </div>
    )
  }
}

// function FunctionComponent(props) {

//   // run some logic to render

//   return (
//     <div>

//     </div>
//   )
// }

// const classComponent = new LegacyReact({ data: "this is a prop" })

// const element = <LegacyReact data="this is a prop" />