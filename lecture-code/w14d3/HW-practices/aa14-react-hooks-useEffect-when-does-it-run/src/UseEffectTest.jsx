import { useEffect, useState } from "react";


const UseEffectTest = () => {
    const [ toggleOne, setToggleOne] = useState(false)
    const [ toggleTwo, setToggleTwo] = useState(false)
    const [count, setCount] = useState(0)

    useEffect( () => {
        console.log("useEffect1 ran")   
    }, [])


    useEffect( () => {
        console.log("useEffect2 ran")
        if (toggleTwo) {
            console.log('toggleTwo slice of state is true so this code runs');
        }
    }, [toggleTwo])

    useEffect(() => {
        const myInterval = setInterval(() => {
          console.log(`UseEffect3 with interval number ${count} is running`);
        }, 1000);

        return () => {
            console.log(`UseEffect3 cleanup ran.\nsetInterval number ${count} is being cleared out`)
            clearInterval(myInterval);
        }
      }, [count]);


    return (
      <div>
        {console.log('rendered or re-rendered')}
        <h1>UseEffectTest Component</h1>
        <button
            onClick={ () => setToggleOne(prevState => !prevState)}
        >
            ToggleOne
        </button>
        <button
            onClick={ () => setToggleTwo(prevState => !prevState)}
        >
            ToggleTwo
        </button>
        <button
            onClick={ () => setCount(prevState => prevState + 1)}
        >
            Count
        </button>
      </div>
    );
  };

  export default UseEffectTest;