import { useParams } from 'react-router-dom'


function MovieDetails({ movies }) {
  const { movieId } = useParams()
  const movieChoice = movies.find((movie) => movie.id === +movieId);

  return (
    <div className='comp purple'>
      <h1>Hello</h1>
      <h1>{ movieChoice.title }</h1>
    </div>
  );
}

export default MovieDetails;
