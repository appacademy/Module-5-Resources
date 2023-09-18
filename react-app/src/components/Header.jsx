import React, { useContext } from "react";
import { NiceContext } from "../context/NiceContext";

export default function Header(props) {
  const { message } = useContext(NiceContext)
  return (
    <div style={{
      position: "absolute",
      top: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h2>{message ? message : "hey! say something nice!"}</h2>
    </div>
  );
}

