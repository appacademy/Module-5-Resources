import React, { useEffect, useState } from "react";

// what is state in React?

// what are renders?
// mount
// unmount
// re-render

// global state - heap memory
let globalVar = 0;

export default function Hooks(props) {
  //! all useSTate setters are async
  // local states - stack memory (mostly)

  const [slice, setSlice] = useState(0); // slice of state stored in the heap
  let localVar = 0; // resets every render

  // ref - 0x01,  key - 0x02
  const [ref, setRef] = useState({ key: 0 });

  // useEffects run in the commit phase, or AFTER THE RENDER
  // async code
  useEffect(() => {
    fetch("", {})
      .then((r) => r.json())
      .then((data) => {
        setRef(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // run on mount only

  useEffect(() => {}, [ref]); // on mount + every time ref changes

  useEffect(() => {}); // on mount + after every re-render

  if(Object.values(ref).length === 0) return null

  return (
    <div>
      <h1>rendering hooks</h1>
      <h3>local var: {localVar}</h3>
      <button
        onClick={() => {
          localVar += 1;
          console.log("localVar: ", localVar);
        }}
      >
        change local state
      </button>
      <h3>global var: {globalVar}</h3>
      <button
        onClick={() => {
          globalVar += 1;
          console.log("globalVar: ", globalVar);
        }}
      >
        change global state
      </button>
      <h3>useState ref: {ref.key}</h3>
      <button
        onClick={() => {
          var anon = 0;
          anon = 1
          setSlice(slice + 1)
          // ref - 0x01 , key - 0x0?
          // ref.key += 1

          // ref - 0x0?, key 0x01

          const newLocation = { ...ref }; // shallow copy
          // mutate new ref
          newLocation.key += ref.key + 1;
          setRef(newLocation);

          setRef({ ...ref, key: ref.key + 1 }); // { key: 0, key: 1 }

          console.log("useState ref: ", ref);
        }}
      >
        change useState
      </button>
    </div>
  );
}
