import { Outlet, Link, NavLink } from 'react-router-dom'
import "./Layout.css"


export default function Layout () {

    return (
        <div>
            <nav className='navbar-links-container'>
                {/* <Link to="/"> Home </Link>
                <Link to="/posts"> Feed </Link>
                <Link to="/new"> New Post </Link> */}
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/posts"> Feed </NavLink>
                <NavLink to="/new"> New Post </NavLink>
                {/* <a href="/new"> New Post </a> */}
            </nav>
            <Outlet />
        </div>
    )
}