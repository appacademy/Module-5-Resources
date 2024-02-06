import { NavLink } from 'react-router-dom'

export default function MovieNavBar({ movies }) {

    return(
        <nav>
            { movies.map( (movie) => (
                <NavLink 
                    to={ `${movie.id}` } 
                    key={ movie.id }
                >
                    { movie.title }
                </NavLink>

            ))};
        </nav>
    );
}