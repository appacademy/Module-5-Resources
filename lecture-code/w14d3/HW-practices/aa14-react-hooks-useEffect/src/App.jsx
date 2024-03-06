import { createBrowserRouter, createRoutesFromElements, RouterProvider,
         Route } from 'react-router-dom';
import Cat from './Cat';
import Home from './Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />,
      <Route path ="*" element={<Cat />} />
    </>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
