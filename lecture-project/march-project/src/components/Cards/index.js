

//!! this function is a component
export default function Cards(props, ...args) {
  console.log("props: ", props)
  console.log("args: ", args)
  return (
    <>
      <h1 something={{ key: "value" } }>this was the same as the other one</h1>
      {props.children}
      <span>{props.banana.green}</span>
      <span>{props.banana.yellow}</span>
      <button onClick={props.onClick}>

      </button>
    </>
  );
}


var props = { banana: "something", children: [] }

console.log("this is the component invocation: ", Cards(props))