
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';

const router = createBrowserRouter([
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
  }

]);

function App() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <RouterProvider router={ router } />
      {/* <Home />
      <Stocks />
      <Movies /> */}
    </div>
  );
}

export default App;
