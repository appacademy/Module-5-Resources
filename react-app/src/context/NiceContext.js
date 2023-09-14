import { createContext, useState } from "react";

export const NiceContext = createContext();

export default function NiceProvider(props) {
  const [formData, setContextFormData] = useState("");
  const [status, setContextStatus] = useState(401);

  return (
    <NiceContext.Provider
      value={{
        message: formData,
        setContextFormData,
        status,
        setContextStatus,
      }}
    >
      {props.children}
    </NiceContext.Provider>
  );
}
