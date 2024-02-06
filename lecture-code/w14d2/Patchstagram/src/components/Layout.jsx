import { Link, NavLink, Outlet } from "react-router-dom"
import './Layout.css'


export default function Layout() {

    return (
        <div>
            <nav className="navbar-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/posts">Feed</NavLink>
                <NavLink to="new">New Post</NavLink>
                {/* <Link to="/" >Home</Link>
                <Link to="/posts" >Feed</Link> */}
                {/* <a href="/new" >New Post</a> */}
            </nav>
            <Outlet />
        </div>

    )

}