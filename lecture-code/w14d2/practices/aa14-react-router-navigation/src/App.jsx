import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'movies',
        element: <Movies />
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      },
      {
        path: '/not-logged-in',
        element: <h1>You Must Be Logged In To Enter.</h1>
      }
    ]
  }
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
