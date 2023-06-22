import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const useCustomHook = () => useContext(UserContext);

export default function UserProvider(props) {
  const [value, setValue] = useState({});

  return (
    <UserContext.Provider value={{ value, setValue }}>
      {props.children}
    </UserContext.Provider>
  );
}
