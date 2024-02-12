// import { Component } from 'react'
import DiceContainer from "./components/DiceContainer"
import './App.css'


function App() {

  return (
      <div className="main-app">
        <h1 className='title-text'>Welcome to React Dice!</h1>
        <DiceContainer />
      </div>
    )
}

export default App


// class App extends Component {

//   render() {
//     return (
//       <div className="main-app">
//         <h1 className='title-text'>Welcome to React Dice!</h1>
//         <DiceContainer />
//       </div>
//     )
//   }
// }

// export default App