import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <div>
        <h1> Welcome to the APOD App</h1>
      </div>
      <Outlet />
      <div>
        <h2>built by dlpurcell :)</h2>
      </div>
    </div>
  );
}
