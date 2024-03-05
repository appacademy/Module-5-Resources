import { Outlet, NavLink } from "react-router-dom";


export default function Layout() {

    return(
        <div className='app'>
            <h1>App Component</h1>
            <nav className="comp nav">
                <ul>
                    <NavLink 
                        to="/" 
                        className={({isActive}) => isActive? 'purple' : ''}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/stocks" 
                        className={({isActive}) => isActive? 'purple' : ''}
                    >
                        Stocks
                    </NavLink>
                    <NavLink 
                        to="/movies" 
                        className={({isActive}) => isActive? 'purple' : ''}
                    >
                        Movies
                    </NavLink>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}