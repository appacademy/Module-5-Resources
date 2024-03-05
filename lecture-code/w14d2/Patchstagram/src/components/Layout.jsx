import { Outlet, Link, NavLink } from "react-router-dom"


export default function Layout() {

    return (
        <>
            <nav>
                <h2>Nav bar here...</h2>
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/feed">Feed</NavLink>
                <NavLink to="/new">New Post</NavLink>
                {/* <a href="/new">New Post</a> */}
            </nav>
            <Outlet />
        </>
    )
}