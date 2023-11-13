import { NavLink } from "react-router-dom";

// this is a component
export default function FancyNav() {
  return (
    <div style={{ display: "flex", width: "100%", flexDirection: "column" }}>
      <h1>Hi from FancyNav!</h1>
      <div>
        <span>places to go...</span>
        <div style={{ display: "flex", margin: "10px", justifyContent: "space-around" }}>
          <NavLink to='/somewheres-else'>/somewheres-else</NavLink>
          <NavLink to='/nested'>/nested</NavLink>
          <NavLink to='/nested/route'>/nested/route</NavLink>
          <NavLink to='/classes'>/classes</NavLink>
        </div>
      </div>
    </div>
  );
}
