import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout";
import App from "../components/App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="profile" element={<h1>profile page</h1>} />
    </Route>
  )
);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
