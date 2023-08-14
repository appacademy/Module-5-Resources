// a function with a capital name
// possible returns
// JSX
// null
// Another React comp

// PROPS === DATA FROM PARENT

// Comps must be PURE FUNCTIONS

// what is jsx??
// stands for JavaScript XML
// wrapper
// symbols that get translated into JavaScript
// Babel will transpile JSX down into JS and call your functions
// JSX returned from A react comp, is THE VIRTUAL DOM

export default function ReactComponent(props){
  if(!props.loggedIn){
    return (
      <h1>404</h1>
    )
  }

  return (
    <div>
      <h1>hi there!</h1>
      <h3>{props.content}</h3>
    </div>
  )
}