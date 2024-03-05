import { Outlet } from 'react-router-dom'
import MovieNavBar from './MovieNavBar';

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <MovieNavBar movies={ movies }/>
      <Outlet />
    </div>
  );
}

export default Movies;
