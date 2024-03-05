import { createBrowserRouter, RouterProvider, NavLink, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Stocks from './components/Stocks';
import Movies from './components/Movies';
import MovieDetails from "./components/MovieDetails";
import { movies } from './data/movieData';


function Layout() {
  return (
    <div className='app'>
      <h1>App Component</h1>
      <nav className='comp nav'>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({isActive}) => isActive? 'purple' : ''}
              style={({isActive}) => isActive? { fontWeight: 'bold' } : {}}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/stocks' 
              className={({isActive}) => isActive? 'purple' : ''}
              style={({isActive}) => isActive? { fontWeight: 'bold' } : {}}
            >
              Stocks
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/movies'
              className={({isActive}) => isActive? 'purple' : ''}
              style={({isActive}) => isActive? { fontWeight: 'bold' } : {}}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

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
        element: <Movies movies={ movies } />,
        children: [
          {
            path: ':movieId',
            element: <MovieDetails movies={ movies } />
          }
        ]
      },
      {
        path: '*',
        element: <h1>Page Not Found</h1>
      },
      {
        path: '/not-logged-in',
        element: <h1> You Must Be Logged In To Enter.</h1>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
