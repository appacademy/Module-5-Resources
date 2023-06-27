import { createContext } from "react";
import { data_shape } from "./api-data";

export const ApiContext = createContext()

export default function ApiProvider(props){
  //!! Day in the life of the embattled Frontend engineer
  // TODO: Steps
  // 1. hope to god you make new refs for each object you're mutating
  // 2. convince your team this was a great idea
  // 3. ...
  // 4. profit

  //!! approaches:
  // have no globally available api data (something your boss decides)

  // write as many crud functions as your api has in each route

  // spread it out for sanity's sake. more code, more files.

  // create functions to hit api for each slice, then reduce into globalState

  // figure out why nothing is rerendering. there must be stale references somewhere...

  // puzzle over how to keep spotDetails from rerendering when you just add a review

  // buy your boss a coffee because she's mad it's taking so long

  // write hooks that can reach into any nested slice to grab a specific
  // object, then trigger a rerender if the ref is new

  // write 10 pages of internal documentation to keep people from using your
  // functions wrong, but they'll do it wrong anyway because no-one reads instructions.

  // todo NOTE: make sure you're on holiday when this thing breaks

  /*
  !! OR OR OR
  !! use a popular lib that created the architecture for you: Redux.
  */

  return (
    <ApiContext.Provider value={{}}>
      {props.children}
    </ApiContext.Provider>
  )
}